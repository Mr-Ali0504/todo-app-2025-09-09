// Todo App - Generated App
document.addEventListener('DOMContentLoaded', function() {
    console.log('Todo App loaded successfully!');
    
    
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    let todos = [];

    function addTodo() {
        const text = todoInput.value.trim();
        if (text) {
            todos.push({ id: Date.now(), text, completed: false });
            todoInput.value = '';
            renderTodos();
        }
    }

    function toggleTodo(id) {
        todos = todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        renderTodos();
    }

    function deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
        renderTodos();
    }

    function renderTodos() {
        todoList.innerHTML = todos.map(todo => `
            <li class="todo-item ${todo.completed ? 'completed' : ''}">
                <span onclick="toggleTodo(${todo.id})">${todo.text}</span>
                <button onclick="deleteTodo(${todo.id})">Delete</button>
            </li>
        `).join('');
    }

    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });
});