class Storage {
  static getTasks = () => {
    let tasks;
    if (localStorage.getItem('tasks') === null) tasks = [];
    else tasks = JSON.parse(localStorage.getItem('tasks'));

    return tasks;
  };

  static addTaskLocalStorage = (task) => {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  static deleteTaskLocalStorage = (element) => {
    const tasks = this.getTasks();
    tasks.forEach((task, index) => {
      if (element === index) tasks.splice(index, 1);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  static updateIndex = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.reload();
  };
}

export default Storage;