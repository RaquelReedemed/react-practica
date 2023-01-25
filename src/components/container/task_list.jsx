//contendra los datos que le va a pasar a los hijos o la logica. Sacar los propTypes
import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';



const TaskListComponent = () => {
//cuando haya una declaracion de este componente se ejecute esta funcion y devolver algo
   //LEVELS.NORMARL, hara una tarea por defecto
   const defaultTask = new Task('Example', 'Default Descripcion', false, LEVELS.NORMAL);

   const changeState = (id) => {
    console.log('TODO: Cambiar estado de una tarea')

   }

   //configurar q el componente de task_list devuelva un componente de tipo tarea 

    return (
        <div>
            <div>
             <h1>Your Tasks:</h1>    
            </div>
            {/*HACER: Aplicar un for/map para renderizar una lista de tareas */}
            <TaskComponent task={defaultTask}></TaskComponent> {/*se va a pintar lo que hayamos dicho en task.jsx que se devuelva */}
        </div>
    );
};

//* ir a APP.JS


export default TaskListComponent;



