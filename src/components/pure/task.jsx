/* // empezar desde abajo, empieza por los bloqueas mas peque;itos e iriamos subiendo
//* 4-ir a models, donde LEVELS es una const y el Task una clase

import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//a los props le vamos a pasar la tarea a pintar, el componente de arriba va a tener los datos. Los componentes de orden superior pintar los componentes que van a tener la logica y los datos.

//TaskComponent mostrara el contenido de una tarea que nos va a pasar por props (task), osea cuando tenga mi task_list tendra una tarea.

const TaskComponent = ({ task }) => { //meter el task dentro del prop ({}) este componente puro se le va a pasar la tarea en formato prop, es decir le vamos a pasar una tarea
    return (
        <div>
        <h2>
           Nombre: { task.name }
        </h2>
        <h3>
            Descripcion: { task.description }
        </h3>
        <h4>
            Level: { task.level }
        </h4>
        <h5>
            This task is: { task.completed ? 'COMPLETED':'PENDING'} 
        </h5>
            
        </div>
    );
};
// '?' ve si es true o false, si es true colocara un completed 

TaskComponent.propTypes = {
    //* 5- task (clase tarea) es una instancia, instanceOf verifica que lo q recibimos por propTypes es una tarea, osea el padre (task_list) le va a tener q pasar una tarea
    task: PropTypes.instanceOf(Task)

};


export default TaskComponent;

//la idea es que el componente pueda pintar el nombre, descripcion, si esta completada etc
//* 6- ir a task_list */

import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({ task }) => {
    return (
        <div>
            <h2>
                Nombre: { task.name }
            </h2>
            <h3>
                Descripción: { task.description }
            </h3>
            <h4>
                Level: { task.level }
            </h4>
            <h5>
                This task is: { task.completed ? 'COMPLETED':'PENDING' }
            </h5>
            
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;



