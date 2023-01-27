/**
 * Ejemlo hooks:
 * -useState()
 * -useContext()
 * 
 * son buenos para trabajar con datos, es decir poder hacer o utilizar el contexto y pasarselo a componentes inferiores
 */

import React, { useState, useContext } from 'react';
//no hace falta exportar ya que se usara internamente

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor que recide desde el padre
 */

const miContexto = React.createContext(null) //es accesible y exportable a todos los componentes de la aplicacion
 
const Componente1 = () => {  

    const state = useContext(miContexto) // va a leer esos datos. miContexto dentro del estado 
    
    //lo vamos a inicializar vacio(null) que va a rellenarse con los datos del contexto del padre
    

   //aca la idea es transmitir informacion si necesidad de eventos ni props, sino a traves del contexto

    return (
        <div>
        <h1>
        EL TOKEN es: {state.token} </h1> {/**el padre pasar el valor del token */}
        {/**pintamos el componente2 */}
        <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {
     
    const state = useContext(miContexto)

    return (
        <div>
        <h2>
          La secion es: {state.sesion}  
        </h2>
            
        </div>
    );
}

//definir un contexto para todo lo de arriba, el cual se hace un funcion que sera otro componente


export default function MiComponenteConContexto() {
  
    const estadoInicial = {
        token: '1234567',
        sesion: 1

    }

    //creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    //funcion para nuevos valores, la idea q los datos de secion los pueda obtener cualquier componente que este por debajo de este
    function actualizarSecion() {

         setSessionData( {
            token: 'JWT123456789',
            sesion : sessionData.sesion + 1 
         }
    ); 
}

//proporcionar un contexto a los datos a todos aquellos componentes que esten por debajo

  return (
   <miContexto.Provider value={sessionData} >
    {/*todo lo que esta aqui dentro puede leer los datos de secionData */}
    {/*ademas si se actualiza, los componentes de aqui, tambien lo actualiza  */}
    <h1>***EJEMPLO DE useState y useContext </h1>
    <Componente1></Componente1>
    <button onClick={actualizarSecion} > actualizar secion </button>
   </miContexto.Provider>
  )
}







