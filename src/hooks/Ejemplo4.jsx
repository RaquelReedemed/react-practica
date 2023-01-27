/**
 * Ejemplo para entender el uso de props.children. Se pueden pasar elementos html 
 */

//este componente pueda pintar aquellos elementos que se le pasen desde el padre
import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>***Ejemplo de CHILDREN PROPS</h1>
            <h2>
              Nombre: { props.nombre }
             </h2>
             {/* props.children pintara por defecto aquello que se encuentre entre las etiquetas de
             apertura de este componente desde el componente de orden superior */}
             {props.children}
        </div>
    );
}

export default Ejemplo4;
