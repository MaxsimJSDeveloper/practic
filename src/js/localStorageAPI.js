const LOCAL_STORAGE_KEY = 'tasks';
function add(objData) {
  const tasksArr = getAll();
  tasksArr.push(objData);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasksArr));
}
function getAll() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}
export const localStorageAPI = { add , getAll };

