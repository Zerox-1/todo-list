import TodoListComponent from '../view/todo-list-component.js'
import BoardTaskComponent from '../view/boardtask-component.js'
import TodoListItemComponent from '../view/todo-list-item-component.js'
import{Status,StatusI,StatusLabel} from '../const.js'
import { render } from '../framework/render.js';
import BinButtonComponent from '../view/bin-button-component.js';

export default class TasksBoardPresenter{
    tasksBoardComponent=new BoardTaskComponent();

    boardContainer=null;
    tasksModel=null;

    boardTasks=[];

    constructor({boardContainer,tasksModel}){
        this.boardContainer=boardContainer;
        this.tasksModel= tasksModel;
    }

    init() {
        this.boardTasks = this.tasksModel.getTasks();
        render(this.tasksBoardComponent, this.boardContainer);        
        for(let i=0;i<4;i++){
            const status=StatusI[i];
            const todoListComponent=new TodoListComponent({ title: StatusLabel[status] ,status:status});
            render(todoListComponent, this.tasksBoardComponent.getElement());
            const todoListElement = todoListComponent.getList();
            for(let j=0;j<this.boardTasks.length;j++){
                const task=this.boardTasks[j];
                if(task.status==status){
                    const taskComponent = new TodoListItemComponent({ task});
                    render(taskComponent, todoListElement);
                }
            }
            if(status==Status.BIN){
                const binButtonComponent=new BinButtonComponent();
                render(binButtonComponent, todoListElement);
            }
        }
    }
}