// componente tipo funcion

import React, {useState} from 'react'; //llamar al hus ,{useState}
import PropTypes from 'prop-types';


const GreetingF = (props) => {

   //breve introduccion a useState
   //[variable, funcion que va a generar nuevos valores]//useState(donde inicia)
   const [age, setage] = useState(29);

   const birthday = () => {  //esta sera llamada desde el boton
    //actualizar el state
    setage(age + 1)//genera un nuevo valor para age
   }

    return (
        <div>
                <h1>
                   HOLA {props.name} desde componente funcional
                </h1>
                 <h2>
                    Tu edad es de: {age}
                </h2> 
                <div>
                    <button onClick={birthday}> {/*sin () el birtday para q no se ejecute inmediato */}
                        Cumplir años
                    </button>
                </div>
               
        </div>
            
    );
};


GreetingF.propTypes = {
    name: PropTypes.string

};


export default GreetingF;
