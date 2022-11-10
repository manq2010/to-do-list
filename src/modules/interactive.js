import Storage from './storage.js';

class Iteractive {
    static clearAll = () => {
      const tasks = Storage.getTasks();
      const newTasks = tasks.filter((value) => !value.completed);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      Storage.updateIndex();
      return newTasks;
    }

    static statusUpdate = (indexValue, checkboxFlagValue) => {
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks[indexValue].completed = checkboxFlagValue;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      return tasks;
    }
}

export default Iteractive;
