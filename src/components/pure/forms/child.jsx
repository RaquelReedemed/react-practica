

//llamar funcion por rfc 
import React,  { useRef } from 'react';

const Child = ({ name, send, upDate }) => {  //send:sera usada en button como metodo funcion 

    const messageRef = useRef('') //referencia para el mensaje
    const nameRef = useRef('')   //referencia para el name

   function pressButton() {
       const text = messageRef.current.value; //se accede al contenido del campo de input
       alert(`Text in Input ${text}`);  

    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    function submitName(e) {
        e.preventDefault();   //evita que se recargue la pagina, q se envie por defecto
        upDate(nameRef.current.value) //para enviar al padre
    }

    

    return (
        <div style={ {background: 'cyan', padding: '30px'} } >
        <p  onMouseOver={() => console.log('On Mouse Over')}> 
           Hello, {name}
        </p>
        <button onClick={() => console.log('Pressed Button 1')}>{/* recibe una funcion q ejecute algo */}
            Button 1
        </button> 
        <button onClick={pressButton}>{/* recibe una funcion q ejecute algo */}
            Button 2
        </button>
        <button onClick={() => pressButtonParams('hello')}> {/* cuando queremos pasar parametros a una funcion pero queremos que se ejecute cuando el evento se lleve a cabo  */}
            Button 3
        </button>
        <input  
               placeholder = 'Send a text to your father'
               onFocus={() => console.log('Input Focused')}
               onChange={(e) => console.log('Input changed', e.target.value)} //se da cuando hay algun cambio, ej el evento
               onCopy={() => console.log('Copied text from Input')}  //para ver si hemos copiado el , es decir podemos controlar que no se pueda copiar el contenido, o si se ha copiado enviar alguna notificacion
               
               ref = {messageRef} //se asocia y en cualquier momento se accede a su valor
               ></input>
        <button onClick={() => send(messageRef.current.value)} > {/* le enviaremos un mns al padre, cuando haya un click en un componente de orden inferior se ejecute una funcion de orden superior permitiendo llevar la logica a lo niveles mas altos   */}
            Send Message
        </button>     
        <div style={{marginTop: '20px'}}>
          <form onSubmit={submitName} >  {/* ejecutar submitName */}
             <input ref={nameRef} placeholder='New Name'></input>
             <button type='submit'>Update Name</button>
          </form>

        </div>  
        
        </div>
    );
}

export default Child;
