new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [],
    filter: 'all'
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({ text: this.newTodo.trim(), done: false });
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.done);
    }
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      } else if (this.filter === 'active') {
        return this.todos.filter(todo => !todo.done);
      } else if (this.filter === 'completed') {
        return this.todos.filter(todo => todo.done);
      }
      return this.todos;
    }
  }
});
