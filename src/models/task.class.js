//clase nombre, descripcion, si esta o no completa y nievel de urgencia

import { LEVELS } from "./levels.enum";

export class Task {
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL  //diferentes niveles q puede tomar una tarea, ej nivel informativo, normal, urgente o bloqueante

    //*ir a la carpeta models y crear levels.enum.js
    //*luego usar autoimport en level, escribir LEV + CRT + ESPACIO y se autoimporta


    //se plantea conjunto de datos que los vamos a utilizar como props, componentes de tareas. La idea es tener una lista de tareas y una tarea. Vamos a tener un componente contenedor que va a tener todo el contenido de las tareas y otro componente que va a hacer la tarea para q se pinte cant de veces
   constructor(name, description, completed, level) { //componentes de tarea y el de las tareas.list tareas
  this.name = name;
  this.description = description;
  this.completed = completed;
  this.level = level
   } 
}

//* 1-ir a carpeta container crear archivo task_list.jsx
//* 2-ir a carpeta pure crear archivo task, la idea es que task_list renderize a task. Es decir app va a renderizar a task_list y esta a su vez va a renderizar a task formando una jerarquia de 3 niveles APP -> TASK_LIST -> TASK
// ejemplo si un componente TASK dice que se tiene que borrar el mismo tendra que avisar al de la lista y pasarle un id para que lo borre y asi generar un nuevo estado y volver a pintar la lista
//* 3- ir a task.jsx
 



