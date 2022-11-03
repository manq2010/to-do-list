import _ from 'lodash'; // eslint-disable-line
import './style.css';
import Tasks from '../modules/tasks.js';
import Storage from '../modules/storage.js';
import UserInterface from '../modules/userinterface.js';

window.document.addEventListener('DOMContentLoaded', () => {
  let indexV = 1;

  const tasks = Storage.getTasks();
  tasks.forEach((task) => {
    UserInterface.addTask(task);
    indexV += 1;
  });

  const addItem = document.querySelector('.add-item');
  const inputItem = document.querySelector('#input-item');

  addItem.addEventListener('click', () => {
    if (inputItem.value !== '') {
      const tasksObject = new Tasks(indexV, inputItem.value, false);
      UserInterface.addTask(tasksObject);
      indexV += 1;
      Storage.updateIndex();
      Storage.addTaskLocalStorage(tasksObject);
      UserInterface.clearTaskInputs();
    } else {
      //
    }
  });

  const taskDots = Array.from(document.getElementsByClassName('delete-task'));

  taskDots.forEach((element, index) => {
    element.addEventListener('click', (e) => {
      const node = e.target.parentNode.parentNode;
      UserInterface.deleteTask(node);
      indexV -= 1;
      Storage.deleteTaskLocalStorage(index);
      Storage.updateIndex();
    });

    const parent = element.parentNode.parentNode;
    const textAreaContent = parent.querySelector('textarea');

    textAreaContent.addEventListener('blur', () => {
      UserInterface.editTask(index, textAreaContent.value);
    });
  });
});
