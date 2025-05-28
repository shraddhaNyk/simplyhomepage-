const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  // 🔒 Check for duplicate tasks
  const existingTasks = document.querySelectorAll('#task-list .task-item span');
  for (let task of existingTasks) {
    if (task.textContent.toLowerCase() === taskText.toLowerCase()) {
      alert('Task already exists!');
      taskInput.value = '';
      taskInput.focus();
      return;
    }
  }

  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  span.textContent = taskText;
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';
  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
  taskInput.focus();
});
