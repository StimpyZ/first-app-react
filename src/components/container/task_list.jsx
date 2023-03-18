import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';
import TaskComponents from '../pure/task';



const TaskListComponent = () => {

    const defaulTask = new Task('stimp', 'Descripcion', true, LEVELS.BLOCKING)

    const changeState = (id) =>{
        console.log('TODO: Cambiar estado de una tarea')
    }
    return (
        <div>
            <h1>
               Su tarea:
            </h1>
            <TaskComponents props={ defaulTask }></TaskComponents>
        </div>
    );
};




export default TaskListComponent;