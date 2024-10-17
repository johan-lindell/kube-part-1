document.getElementById('sendButton').addEventListener('click', () => {
  const input = document.getElementById('todoInput');
  const todoText = input.value.trim();

  if (todoText.length > 0 && todoText.length <= 140) {
    const todoList = document.getElementById('todoList');
    const newTodo = document.createElement('li');
    newTodo.textContent = todoText;
    todoList.appendChild(newTodo);
    input.value = '';
  } else {
    alert('Todo must be between 1 and 140 characters long.');
  }
});