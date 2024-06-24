new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [],
    filter: 'all',
    isEditing: false,
    currentTodoIndex: null,
    editText: ''
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
    },
    remaining() {
      return this.todos.filter(todo => !todo.done).length;
    }
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
    },
    editTodo(index) {
      this.isEditing = true;
      this.currentTodoIndex = index;
      this.editText = this.todos[index].text;
    },
    updateTodo() {
      if (this.editText.trim() !== '') {
        this.todos[this.currentTodoIndex].text = this.editText.trim();
        this.closeEditModal();
      }
    },
    closeEditModal() {
      this.isEditing = false;
      this.currentTodoIndex = null;
      this.editText = '';
    }
  }
});
