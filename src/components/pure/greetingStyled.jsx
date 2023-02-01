//llamar a un componente funcional rfc

import React, { useState } from 'react';

//definiendo estilos en constantes, crear un estilo para cuando el usuario esta logueado o no

//estilos para usuario logueado
const loggedStyle = {
     color: 'blue'
};

//esrilos para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}


const GreetingStyled = (props) => {

   //generamos un estado para el componente
   //y asi controlar si el usuario esta o no logueado

   const [logged,setLogged] = useState(false);//el usuario empezara sin estar logueado

   /* const greetingUser = () => (<p>Hola, {props.name}</p>);
   const pleaseLogin = () => (<p>Please loging</p>); */

    return (  //debe devolver siempre un elemento html
        <div style={logged ? loggedStyle : unloggedStyle} >
       {logged ?
        <p>Hola, {props.name}</p>  
        : 
        <p>Please loging</p> 
        }     
           <button onClick={() => {  //cuando se haga click se ejecutara esta funcion
            console.log('Boton pulsado')
            setLogged(!logged);
           }} >
              { logged ? 'logout' : 'login' }
           </button>

        </div>
    );
}

export default GreetingStyled;
