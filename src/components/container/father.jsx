

//llamar a la funcion rfc

import React, {useState} from 'react';
import Child from '../pure/forms/child';

const Father = () => {

    const [name, setName] = useState('Raquel');

  //metodo para que el hijo ejecute esto cuando pase algo 

  function showMessage (text) {
     alert(`Message received: ${text} `)
  }

  function upDateName(newName) {
    setName(newName)    //se le pasa un nuevo valor

  }

    return (
        <div style={ {background: 'tomato', padding: '10px'} } >
        <Child name={name} send={showMessage} upDate={upDateName}></Child> {/* metodo que se va a ejecutar cuando en el child se realize algun tipo de operacion*/}       
        </div>
    );
}

export default Father;
