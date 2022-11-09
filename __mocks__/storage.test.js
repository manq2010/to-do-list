import Storage from '../src/modules/storage.js';

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
      completed: false,
    },
    {
      index: 2,
      description: 'wash clothes',
      completed: false,
    },
    {
      index: 3,
      description: 'sleep',
      completed: false,
    },
    {
      index: 4,
      description: 'exercise',
      completed: false,
    },
  ];

  it('Add one new task to the to-do list', () => {
    const task = Storage.addTaskLocalStorage(toToDoArray[0]);
    expect(task).toEqual([toToDoArray[0]]);
  });

  it('Add another new task to the to-do list', () => {
    const task = Storage.addTaskLocalStorage(toToDoArray[1]);
    expect(task).toEqual([toToDoArray[1]]);
  });

  it('delete one task', () => {
    const task = Storage.getTasks();
    task.splice(0, 1);
    expect(Storage.deleteTaskLocalStorage(0)).not.toEqual([toToDoArray[0]]);
  });

  it('delete another task', () => {
    const task = Storage.getTasks();
    task.splice(1, 1);
    expect(Storage.deleteTaskLocalStorage(1)).not.toEqual([toToDoArray[1]]);
  });
});