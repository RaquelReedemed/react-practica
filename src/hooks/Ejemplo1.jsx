/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo funcion y acceder a su estado privado a travez de un hook
 * y, ademas, poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {
    
    //ejemplo de tipo privado donde se van a ponder modificar los valores a traves de metodos 

    //valor inicial para un contador 

    const valorInicial = 0;

    //valor inicial para una persona

    const personaInicial = {
        nombre:  'Martin',
        email: 'martin@martin'
    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean parte del estado del componente para asi
     * poder gestionar su cambio y que este se vea reflejado en la vista del componente.
     * Estructura:
     * 
     * const [nombreVariable, funcionParaCambiar] = [useState(valorInicial)]
     */

    //llamar la siguiente constante con useState (selecciona la segunda)
    const [contador, setContador] = useState(valorInicial); 
    //set (contador) puede ser un numero, texto, objeto, lista, clase.
    //setcontador, se guarda el nombre de estado

    const [persona, setPersona] = useState(personaInicial);

    //incrementar el contador en 1 y cambiar la persona

    /**
     * funcion para actualizar el estado privado que contiene el contador
     */

    function incrementarContador() {
        setContador(contador + 1) //aumenta el contador en 1

    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */


    function actualizarPersona() {
        setPersona(
            {
                nombre: 'Raquel',
                email: 'raquel@raquel'
            }
        )
    }


    return (
        <div>
           <h1>***ejemplo de useState()***</h1> 
           <h2>CONTADOR: {contador}</h2>
           <h2>DATOS PERSONA:</h2>
           <h3>NOMBRE: {persona.nombre}</h3>
           <h4>EMAIL: {persona.email}</h4>

           {/*Bloque de botones para actualizar el estado del componente*/}
           <button onClick={incrementarContador} >incrementar contador</button>
           <button onClick={actualizarPersona} >actualizar persona</button>

        </div>
    );
}

export default Ejemplo1;
