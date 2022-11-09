// import Storage from './modules/storage.js';
import UserInterface from '../src/modules/userinterface.js';
import Tasks from '../src/modules/tasks.js';

describe('UserInterface', () => {
  document.body.innerHTML = `
        <div class="clear-completed">
            <button class="btn-clear">
                <p>
                    Clear all completed
                </p>
            </button>
        </div>  
    `;

  it('Add one new task to the to-do list', () => {
    const tasksObject = new Tasks(1, 'Exercise', false);
    UserInterface.addTask(tasksObject);
    const bodyChildLength = document.body.childNodes.length;
    expect(bodyChildLength).toBe(6);
  });
  it('Add another new task to the to-do list', () => {
    const tasksObject = new Tasks(2, 'Soccer', false);
    UserInterface.addTask(tasksObject);
    const bodyChildLength = document.body.childNodes.length;
    expect(bodyChildLength).toBe(9);
  });

  it('Remove one task form list', () => {
    const itemContainer = document.querySelector('.task-item');
    UserInterface.deleteTask(itemContainer);
    const bodyChildLength = document.body.childNodes.length;
    expect(bodyChildLength).toBe(8);
  });
  it('Remove another task form list', () => {
    const itemContainer = document.querySelector('.task-item');
    UserInterface.deleteTask(itemContainer);
    const bodyChildLength = document.body.childNodes.length;
    expect(bodyChildLength).toBe(7);
  });
});