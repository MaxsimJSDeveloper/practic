 import { localStorageAPI } from "./localStorageAPI";
 import { createTaskMarkup } from "./create-task-markup";
 import { refs } from "./refs"
 export function renderTasks() {
    const tasks = localStorageAPI.getAll();
   const markup = tasks.map(createTaskMarkup).join(``);
   refs.ul.insertAdjacentHTML(`afterbegin` , markup);
   }
   