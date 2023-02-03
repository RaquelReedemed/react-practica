//contendra los datos que le va a pasar a los hijos o la logica. Sacar los propTypes
import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// importamos la hoja de estilos de task.scss
import '../../styles/task.scss';

const TaskListComponent = () => {
 //definir un estad inicial

//cuando haya una declaracion de este componente se ejecute esta funcion y devolver algo
   //LEVELS.NORMARL, hara una tarea por defecto
   const defaultTask1 = new Task('Example1', 'Descripcion1', true, LEVELS.NORMAL);
   const defaultTask2 = new Task('Example2', 'Descripcion2', false, LEVELS.URGENT);
   const defaultTask3 = new Task('Example3', 'Descripcion3', false, LEVELS.BLOCKING);


  
  // estado del componente 
   const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
   //estado para ver si esta cargando o no, esta login o no. Se traer la tarea de un http
   const [loading, setLoading] = useState(false); //cada vez q entre carga por defecto, controla la peticion

  //control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified');
    setLoading(false);//cuando ya esta lista, ya no esta cargando
    return () => {
    console.log('TaskList component is going to unmount') //para cuando desaparezca el componente
    };
  }, [tasks]); //queremos q algo se ejecute cuando haya modificacion de las tareas

    const changeCompleted = (id) => {
    console.log('TODO: Cambiar estado de una tarea')

   } 

   //configurar q el componente de task_list devuelva un componente de tipo tarea 

    return (
      <div>
        <div className="col-12">
          <div className="card">
            {/* Card Header (title) */}
            <div className="card-header p-3">
              <h5>Your Tasks:</h5>
            </div>
            {/* Card body (content) */}
            <div
              className="card-body"
              data-mdb-perfect-scrollbar="true"
              style={{ position: "relative", height: "400px" }}
            >
              <table>
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody> {/* iteramos como un foreach, obtenemos cada una de las tareas y cada uno de los indices y los utilizo para darle una clave y darle una tarea al prop  */}
                    { tasks.map((task, index) => {
                      return(      
                   <TaskComponent 
                      key={index} 
                      task={task}>
                   </TaskComponent>
                      )
                    }
                    )}    



                   {/* Iterar sobre una lista de tareas */}
                   
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/*HACER: Aplicar un for/map para renderizar una lista de tareas */}
       {/*  <TaskComponent task={defaultTask}></TaskComponent>{" "} */}
        {/*se va a pintar lo que hayamos dicho en task.jsx que se devuelva */}
      </div>
    );
};

//* ir a APP.JS


export default TaskListComponent;



