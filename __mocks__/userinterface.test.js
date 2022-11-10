/**
 * @jest-environment jsdom
 */

import UserInterface from '../src/modules/userinterface.js';
import Tasks from '../src/modules/tasks.js';

describe('UserInterface', () => {
  document.body.innerHTML = `
        <main class="list-container">
          <div class="clear-completed">
              <button class="btn-clear">
                  <p>
                      Clear all completed
                  </p>
              </button>
          </div>
        </main> 
    `;

  const tasksObject = new Tasks(1, 'Exercise', false);

  it('Add one new task to the to-do list', () => {
    UserInterface.addTask(tasksObject);
    const mainChildLength = document.querySelector('main').children.length;
    // console.log(document.querySelector('main').children.length);
    expect(mainChildLength).toBe(2);
  });

  it('Add another new task to the to-do list', () => {
    // const tasksObject = new Tasks(2, 'Soccer', false);
    UserInterface.addTask(tasksObject);
    const mainChildLength = document.querySelector('main').children.length;
    expect(mainChildLength).toBe(3);
  });

  it('Remove one task form list', () => {
    const itemContainer = document.querySelector('.task-item');
    UserInterface.deleteTask(itemContainer);
    const mainChildLength = document.querySelector('main').children.length;
    expect(mainChildLength).toBe(2);
  });

  it('Remove another task form list', () => {
    const itemContainer = document.querySelector('.task-item');
    UserInterface.deleteTask(itemContainer);
    const mainChildLength = document.querySelector('main').children.length;
    expect(mainChildLength).toBe(1);
  });
});