
import React, { useEffect, useState  } from 'react'


export const ComponenteEstado = () => {
  
    const [puntos, setPuntos] = useState(0);

    //para ver consola cuando se ejecuta el cambio de estado
    useEffect(() => {
        console.log('Actualizacopm de puntos')
    }, [puntos]);

  

    //funcion para actualizar el estado
    const sumarPuntos = () => {
        setPuntos(puntos + 1)
    }

  return (
    <div>
        <h2>
            Puntuacion: { puntos }
        </h2>
        <button onClick={sumarPuntos} >
             Sumar Puntos
        </button>
    </div>
  )
}
