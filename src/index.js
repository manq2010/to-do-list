import _ from 'lodash'; // eslint-disable-line
import './style.css';

class Tasks {
  constructor(description, completed) {
    this.description = description;
    this.completed = completed;
  }
}

// const toToDoArray = [
//   {
//     index: 0,
//     description: 'cook',
//     completed: true,
//   },
//   {
//     index: 1,
//     description: 'study',
//     completed: true,
//   },
//   {
//     index: 2,
//     description: 'wash clothes',
//     completed: true,
//   },
//   {
//     index: 3,
//     description: 'sleep',
//     completed: true,
//   },
//   {
//     index: 4,
//     description: 'exercise',
//     completed: true,
//   },
// ];


const addTask = (task) => {
  // const liMarkup = toToDoArray.map((task) => `

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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-three-dots-vertical delete-task" viewBox="0 0 16 16">
              <path
                  d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
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

const editTask = () => {
  // const taskItem = document.querySelector('.task-item');
  // const textArea = document.querySelector('textarea');

  // textArea.addEventListener('focus', (e) => {
  //   console.log('focus');
  //   taskItem.style.backgroundColor = "pink";
  //   textArea.style.backgroundColor = "pink";

  // });

  // textArea.addEventListener('blur', (e) => {
  //   console.log('blur')
  //   taskItem.style.backgroundColor = "";
  //   textArea.style.backgroundColor = "";
  // });
};

// Local Storage Functions
const getTasks = () => {
  let tasks;

  // let tasksT = JSON.parse(localStorage.getItem('tasks'));
  // const taskIndex = taskT.children[1].innerText;

  // console.log(taskIndex)

  if (localStorage.getItem('tasks') === null) tasks = [];
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

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
    // console.log(index);
    // console.log(element);
    if (element === index) tasks.splice(index, 1);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const updateIndex = () => {
  let tasks = JSON.parse(localStorage.getItem('tasks'));

  //Modify elements
  for (let i = 0; i < tasks.length; i++) {
   console.log(tasks[i].description);
  }

  //Store modified array in localstorage
  // localStorage.setItem('tasks', JSON.stringify(tasks));
}

window.document.addEventListener('DOMContentLoaded', (e) => {

  // e.preventDefault();

  

  const tasks = getTasks();
  tasks.forEach((task) => addTask(task));

  updateIndex();

  const addItem = document.querySelector('.add-item');
  const inputItem = document.querySelector('#input-item');

  addItem.addEventListener('click', (e) => {
    console.log(e)
    const tasksObject = new Tasks(inputItem.value, false);
    // console.log(inputItem.value === '');
    if (inputItem.value !== '') {
      addTask(tasksObject);
      addTaskLocalStorage(tasksObject);
      clearTaskInputs();
      // addTaskLocalStorage(inputItem.value);
    } else {
      //
    }
  });

  const taskDots = Array.from(document.getElementsByClassName('delete-task'));

  taskDots.forEach((element, index) => {
    element.addEventListener('click', (e) => {
      // console.log(e.target.parentNode.parentNode)
      const node = e.target.parentNode.parentNode;
      deleteTask(node);
      deleteTaskLocalStorage(index);
    });
  });
});
