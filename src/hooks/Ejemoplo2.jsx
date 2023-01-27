/**
 * Ejemplo de uso de:
 * - useSate()
 * -useRef(), referenciar valores dentro de la vista
 * -useEffect(), sirve para controlar los cambios en la vista
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemoplo2 = () => {

    //vamos  acrer dos contadores distintos
    //cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //vamos a crear una referencia para asociar una variable 
    //con un elemento del DOM del componente (vista HTML), osea en vez de usar getElementById() el 
    // useRef() simplifica todo esto

    const miRef = useRef()
    
    //incrementar el contador1
    function incrementar1() {
      setContador1(contador1 + 1)    
    }

    //incrementar el contador2

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    /**
     * Trabajando con useEffect()
     */

    
    /**
     * 
     * ? Caso 1: EJECUTAR SIEMPRE un snippe de codigo 
     * Cada vez que hay un cambio en el estado del componente se ejecuta aquello que este dentro del useEfe(). es decir, si se cambia el contador1 se ejecuta
     */

    /* useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando Referencia a elemento del DOM:')
        console.log(miRef); //nos devolvera todos los datos del elemento del DOM
        
    }); */

    /**
     * ? caso2: Ejecutar solo cuando se cambie el contador1 o contador2
     * cada vez que haya un cambio en contador1 se ejecuta lo q diga el useEffect
     * cada vez que haya un cambio en contador2 se ejecuta lo q diga el useEffect
     *   (en caso de q cambie contador2 no abra ejecucion. SOLO EN CASO QUE COLOQUEMOS contador1)
     */

    //usesEffec recibe como primer parametro un callback que se va a ejecutar luego y ademas las dependencias que son una lista ,[input]
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR1 / CONTADOR2');
        console.log('Mostrando Referencia a elemento del DOM:')
        console.log(miRef); //imprime los datos del elemento referenciado
    }, [contador1, contador2]); //colocar valores que sufran algun cambio, se van a controlar los cambios del contador1

    return (
        <div>
        <h1>***ejemplo de useState(), useRef(), useEffect()***</h1> 
        <h2> CONTADOR 1: {contador1} </h2>
        <h2> CONTADOR 2: {contador2} </h2>
        {/*Elemento referenciado, para saber su contenido que al imprimirlo se van a imprimir por consol.log(miRef) todas las caracteristicas del elemento*/}
        <h4 ref={miRef}> 
        Ejemplo de elemento referenciado 
        </h4>
        {/*botones para cambiar los contadores */}
        <div>
        <button onClick={incrementar1}>incrementar contador1</button>
        <button onClick={incrementar2}>incrementar Contador2</button>

        </div>
            
        </div>
    );
}

export default Ejemoplo2;
