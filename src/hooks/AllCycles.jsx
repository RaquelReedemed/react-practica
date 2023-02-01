//haciendo un solo componente que tenga todo

//llamar a un componente funcional rfc. Importar useEffect

import React, {useEffect} from 'react';

const AllCycles = () => {

    //SE USA 1 SOLO USEEFFECT por cada componente, se puede poner logica como if, for 

   useEffect(() => {
    console.log('componente creado')

    //intervalo de datos, cada segundo se actualice el componente
    const intervalID = setInterval(() => {
        document.title = `${new Date()}`  //cambiara el nombre de la pesta;a 
        console.log('actualizacion del componente')
    }, 1000 )

    //cuando desaparezca el componente hagamos un clear en interval y borramos el intervalo para que no siga realizando cosas
    return () => {
        console.log('Componente va a desaparecer');
        document.title = "Tiempo detenido";
        clearInterval(intervalID);
    };
   }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;


//cuando el componente aparece se genera un intervalo aparecera(COMPONENTE CREADO) y cada vez va a ver una actualizacion