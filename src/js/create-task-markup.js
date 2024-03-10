export function createTaskMarkup(objData) {
  return `<li class="task-list-item">
      <button class="task-list-item-btn">Удалить</button>
      <h3>${objData.taskName}</h3>
      <p>${objData.taskText}</p>
  </li>`;
}
