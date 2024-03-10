function add(objData) {
  const tasksArr = JSON.parse(localStorage.getItem('tasks')) || [];
  tasksArr.push(objData);
  localStorage.setItem('tasks', JSON.stringify(tasksArr));
}
export const localStorageAPI = { add };
