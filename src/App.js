import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting'; //para renderizar
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemoplo2 from './hooks/Ejemoplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import { ComponenteEstado } from './hooks/ComponenteEstado';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';




function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio Greeting.jsx */}   
        {/* <Greeting name={"Martin"}></Greeting>  */}

        {/*componente ejemplo funcional */}
       {/*<GreetingF name={"Martin"}></GreetingF> */} 

       {/*componente de lista de tareas */}
      {/*<TaskListComponent></TaskListComponent>*/}    

      {/*Ejemplos de uso de HOOKS  */}
      {/*<Ejemplo1></Ejemplo1> */} 
      {/*<Ejemoplo2></Ejemoplo2> */} 
      {/*<MiComponenteConContexto></MiComponenteConContexto> */}
      

      {/*
      <Ejemplo4 nombre="Raquel">
      {/*todo lo q hay aqui adentro, es tratado como props.children 
      <h3>
          Contenido del props.children
        </h3>
      </Ejemplo4>
    
       */}

       {/* EJEMPLO DEL AFTER CLASS */}
      {/* <ComponenteEstado></ComponenteEstado>*/} 

     {/*  <GreetingStyled name="Raquel" ></GreetingStyled> {/*se le pasa por props name */} 
     {/*  </header> */}

     {/* Gestion de Eventos */}
{/*      <Father></Father> */}
     
     
      <TaskListComponent></TaskListComponent> 



    </div>
  );
}

export default App;
