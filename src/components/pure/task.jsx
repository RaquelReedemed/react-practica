 // empezar desde abajo, empieza por los bloqueas mas peque;itos e iriamos subiendo
//* 4-ir a models, donde LEVELS es una const y el Task una clase

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//importar la hoja de estilo de task.scss
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';


//a los props le vamos a pasar la tarea a pintar, el componente de arriba va a tener los datos. Los componentes de orden superior pintar los componentes que van a tener la logica y los datos.

//TaskComponent mostrara el contenido de una tarea que nos va a pasar por props (task), osea cuando tenga mi task_list tendra una tarea.

const TaskComponent = ({ task }) => { //meter el task dentro del prop ({}) este componente puro se le va a pasar la tarea en formato prop, es decir le vamos a pasar una tarea
    
    //useeffect para saber cuando una tarea desaparece, borra, editemos

    useEffect(() => {
        console.log('Create Task')
        return () => {
        console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);//cada modificacion de task se generara el task.name


    //agregando en clase 7, comprobando si se trata de un level u otro
    /* 
       function that return a Badge
       depending on the level of the task
     */

    function taskLevelBadge() {
      switch (task.level) {  //en caso de que task.level el case se LEVELS.NORMAL
        case LEVELS.NORMAL:
            return( <h6 className='mb-0' >
               <span className='badge bg-primary' >
                 {task.level}
               </span>
            </h6>)
            case LEVELS.URGENT:
                return( <h6 className='mb-0' >
                   <span className='badge bg-warning' >
                     {task.level}
                   </span>
                </h6>)
            case LEVELS.BLOCKING:
                return( <h6 className='mb-0' >
                   <span className='badge bg-danger' >
                     {task.level}
                   </span>
                </h6>)    
        default:
            break;
      }   
    }
    /* 
    function that return incons depending on completion of the task
    */

    function taskCompletedIcon() {
        if(task.completed) {
            return (<i className='bi-toggle-on' style={{color: 'green'}}></i>)
        }else{
            return (<i className='bi-toggle-off' style={{color: 'grey'}}></i> )
        }
    }
    
    return (

        //esta tarea representa una fila de la tabla
        <tr className='fw-normal'>
           <th>
             <span className='ms-2' >{task.name}</span>  
           </th>
           <td className='align-middle' >
             <span>{task.description}</span>
           </td>
           <td className='align-middle' >
           {/* TODO: Sustituir por un budge */}
           {/* Excecution of function to return badge element */}
             {taskLevelBadge()}
           </td>
           <td className='align-middle' >
           {/* Execution of function to return icon depending on completion */}
           {taskCompletedIcon()}

              <i className='bi-trash' style={{color: 'tomato'}}></i>
              

            {/*   <span>{task.completed ? 'Completed' : 'Pending' }</span>  */}
           </td>
        </tr>
        

        // <div>
        // <h2 className='task-name' >
        //    Nombre: { task.name }
        // </h2>
        // <h3>
        //     Descripcion: { task.description }
        // </h3>
        // <h4>
        //     Level: { task.level }
        // </h4>
        // <h5>
        //     This task is: { task.completed ? 'COMPLETED':'PENDING'} 
        // </h5>
            
        // </div>
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





