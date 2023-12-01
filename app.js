const saveButton = document.querySelectorAll('button')[0];
const loadButton = document.querySelectorAll('button')[1];

saveButton.addEventListener('click', () => {
  const tasks = document.querySelectorAll('input[type="checkbox"]');
  const taskStates = Array.from(tasks).map(task => task.checked);
  localStorage.setItem('taskStates', JSON.stringify(taskStates));
});

loadButton.addEventListener('click', () => {
  const taskStates = JSON.parse(localStorage.getItem('taskStates'));
  const tasks = document.querySelectorAll('input[type="checkbox"]');
  Array.from(tasks).forEach((task, index) => {
    task.checked = taskStates[index];
  });
});
