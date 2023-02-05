//taskform estara dentro de tasklist 

///lamar rfc

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add}) => {

    //generar una referencia para el nombre de la tarea
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    //metodo para hacer el SUBMIT
    function addTask(e){
        e.preventDefault();
        const newTask = new Task(  //crear nueva tarea con los campos ref:
            nameRef.current.value,
            descriptionRef.current.value,
            false,  //es completo o no?
            levelRef.current.value
            )
            //llamar al padre para que lo a;ada
       add(newTask);     
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
          <div className='form-outline flex-fill'>
             <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name' />
             <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task Description' />
    {/* hacer una nivelacion de diferentes niveles */}
             <label htmlFor='selectLevel' className='sr-only' >Priority</label> {/* htmlFor para colocarl el id de nustro select */}
             <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'> {/* id para que se relacione con el de arriba */}
                 <option value={LEVELS.NORMAL}>
                    Normal
                 </option>
                 <option value={LEVELS.URGENT}>
                    Urgente
                 </option>
                 <option value={LEVELS.BLOCKING}>
                    Blocking
                 </option>
             </select> 
         </div> 
            <button type='submit' className='btn btn-success btn-lg ms-2' >Add</button>
        </form>
    );
}

TaskForm.protoTypes = {  //p minisculpa
    add: PropTypes.func.isRequired  //P mayus porq se importo 
}



export default TaskForm;
