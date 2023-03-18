import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponents = ({props}) => {
    return (
        <div>
            <p>
                Nombre: { props.name }
            </p>

            <p>
                Descripcion: { props.description }
            </p>

            <p>
                Nivel de Importancia: {props.LEVELS}
            </p>

            <p>
                La tarea está: {props.completed ? 'Completada':'Pendiente'}
            </p>
        </div>
    );
};


TaskComponents.propTypes = {
    props: PropTypes.instanceOf = Task

};


export default TaskComponents;