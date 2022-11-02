import _ from 'lodash'; // eslint-disable-line
import './style.css';

class Tasks {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }
}

const addTask = (task) => {
  const clearCompleted = document.querySelector('.clear-completed');
  const liMarkup = `
    <li class="task-item">
      <div class="btn-check">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app"
              viewBox="0 0 16 16">
              <path
                  d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
          </svg>
      </div>
      <textarea name="" id="edit-text" spellcheck="false">${task.description}</textarea>
      <div class="task-dots">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 delete-task"
                    viewBox="0 0 16 16">
                    <path
                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
          </svg> 
      </div>
    </li>
    `;

  clearCompleted.insertAdjacentHTML('beforebegin', liMarkup);
};

const clearTaskInputs = () => {
  const inputItem = document.querySelector('#input-item');
  inputItem.value = '';
};

const deleteTask = (element) => {
  element.remove();
};

const editTask = (index, value) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks[index].description = value;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Local Storage Functions
const getTasks = () => {
  let tasks;
  if (localStorage.getItem('tasks') === null) tasks = [];
  else tasks = JSON.parse(localStorage.getItem('tasks'));

  return tasks;
};

const addTaskLocalStorage = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const deleteTaskLocalStorage = (element) => {
  const tasks = getTasks();
  tasks.forEach((task, index) => {
    if (element === index) tasks.splice(index, 1);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const updateIndex = () => {
  window.location.reload();
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

window.document.addEventListener('DOMContentLoaded', () => {
  let indexV = 0;

  const tasks = getTasks();
  tasks.forEach((task) => {
    addTask(task);
    indexV += 1;
  });

  const addItem = document.querySelector('.add-item');
  const inputItem = document.querySelector('#input-item');

  addItem.addEventListener('click', () => {
    if (inputItem.value !== '') {
      const tasksObject = new Tasks(indexV, inputItem.value, false);
      addTask(tasksObject);
      indexV += 1;
      updateIndex();
      addTaskLocalStorage(tasksObject);
      clearTaskInputs();
    } else {
      //
    }
  });

  const taskDots = Array.from(document.getElementsByClassName('delete-task'));

  taskDots.forEach((element, index) => {
    element.addEventListener('click', (e) => {
      const node = e.target.parentNode.parentNode;
      deleteTask(node);
      indexV -= 1;
      deleteTaskLocalStorage(index);
      updateIndex();
    });

    const parent = element.parentNode.parentNode;
    const textAreaContent = parent.querySelector('textarea');

    textAreaContent.addEventListener('blur', () => {
      editTask(index, textAreaContent.value);
    });
  });
});
