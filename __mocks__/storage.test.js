/**
 * @jest-environment jsdom
 */

import Storage from '../src/modules/storage.js';
import UserInterface from '../src/modules/userinterface.js';
import Interactive from '../src/modules/interactive.js';

const clearAll = () => {
  const tasks = Storage.getTasks();
  const newTasks = tasks.filter((value) => !value.completed);
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  return newTasks;
};

describe('LocalStorage', () => {
  const toToDoArray = [
    {
      index: 0,
      description: 'cook',
      completed: false,
    },
    {
      index: 1,
      description: 'study',
      completed: true,
    },
    {
      index: 2,
      description: 'wash clothes',
      completed: false,
    },
    {
      index: 3,
      description: 'sleep',
      completed: true,
    },
    {
      index: 4,
      description: 'exercise',
      completed: true,
    },
  ];

  it('Add one new task to the to-do list', () => {
    Storage.addTaskLocalStorage(toToDoArray[0]);
    const getTask = Storage.getTasks()[0];
    expect(getTask).toEqual(toToDoArray[0]);
  });

  it('Add another new task to the to-do list', () => {
    Storage.addTaskLocalStorage(toToDoArray[1]);
    const getTask = Storage.getTasks()[1];
    expect(getTask).toEqual(toToDoArray[1]);
  });

  it('delete one task', () => {
    Storage.addTaskLocalStorage(toToDoArray[2]);
    Storage.deleteTaskLocalStorage(2);
    const getTask = Storage.getTasks()[2];
    expect(getTask).toBe(undefined);
  });

  it('delete another task', () => {
    const task = Storage.getTasks();
    task.splice(1, 1);
    expect(Storage.deleteTaskLocalStorage(1)).not.toEqual([toToDoArray[1]]);
  });

  it('edit the task on the locale storage', () => {
    Storage.addTaskLocalStorage(toToDoArray[0]);
    UserInterface.editTask(0, 'change - description');
    const editTask = Storage.getTasks()[0];
    expect(editTask.description).not.toEqual(toToDoArray[0].description);
  });

  it('edit another task on the locale storage', () => {
    Storage.addTaskLocalStorage(toToDoArray[1]);
    UserInterface.editTask(1, 'change - work');
    const editTask = Storage.getTasks()[1];
    expect(editTask.description).not.toEqual(toToDoArray[1].description);
  });

  it('clear all completed task', () => {
    localStorage.clear();
    toToDoArray.forEach((index) => {
      Storage.addTaskLocalStorage(index);
    });

    Storage.getTasks();
    clearAll();
    expect(toToDoArray.length).not.toEqual(Storage.getTasks.length);
  });

  it('update completed status', () => {
    localStorage.clear();
    toToDoArray.forEach((index) => {
      Storage.addTaskLocalStorage(index);
    });

    const taskToComplete = Storage.getTasks()[0];
    const newStatus = Interactive.statusUpdate(0, true);
    expect(taskToComplete.completed).not.toBe(newStatus[0].completed);
  });
});