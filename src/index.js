/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */
import { refs } from './js/refs';
import { createTask } from './js/create-task';
import { createTaskMarkup } from './js/create-task-markup';
import { localStorageAPI } from './js/localStorageAPI';
import { renderTasks } from './js/renderTasks';

refs.form.addEventListener('submit', eventFormSubmit);

function eventFormSubmit(event) {
  event.preventDefault();
  const objData = createTask(event);
  const markup = createTaskMarkup(objData);

  refs.ul.insertAdjacentHTML('beforeend', markup);
  localStorageAPI.add(objData);
}

renderTasks();