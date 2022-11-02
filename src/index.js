import _ from 'lodash'; // eslint-disable-line
import './style.css';

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


const AddTask = (task) => {
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
        <textarea name="" id="edit-text" spellcheck="false">${task}</textarea>
        <div class="task-dots">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
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

const fucusTask = () => {
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

window.document.addEventListener('DOMContentLoaded', (e) => {
  // contentMarkup();
  const addItem = document.querySelector('.add-item');
  const inputItem = document.querySelector('#input-item');
  addItem.addEventListener('click', () => {
    // console.log(inputItem.value === '');
    if (inputItem.value !== '') {
      AddTask(inputItem.value);
    } else {
      //
    }
    clearTaskInputs();
  });

  const taskDots = Array.from(document.getElementsByClassName('delete-task'));

  taskDots.forEach((element) => {
    element.addEventListener('click', (e) => {
      // console.log(e.target.parentNode.parentNode)
      const node = e.target.parentNode.parentNode;
      deleteTask(node);
    });
  });
});
