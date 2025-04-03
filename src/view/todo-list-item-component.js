import {createElement} from '../framework/render.js'; 


// function createTodoListComponentTemplate() {
//     return (
//         `<li class="todo-list-item">Навзвание первой задачи</li>`
//       );
// }



function createTodoListComponentTemplate(task) {
  const {title,status}=task;
  return (
      `<div class="taskboard__item task task--${status}">
        <div class=task__body>
          <li class="todo-list-item-${status}">
          <div   contenteditable="true" class="task--input" disabled>${title}</div>
          <button aria-label="Изменить" class="task__edit" type="button">✏️</button>
          </li>
        </div>
      </div>`
    );
}


export default class TodoListItemComponent {

  constructor({task}){
    this.task=task;
  }


  getTemplate() {
    return createTodoListComponentTemplate(this.task);
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}