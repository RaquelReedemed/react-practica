import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
 //props, son propiedades o atributos de html que puede recibir un componente 
    //que datos le puedo pasar a este componente para que pinte algo, info que le paso al componente
    constructor(props) {
     //info que paso por atributos   
    super(props);   //para trabajar con las props que vengan del componente
    //info que tiene el componente que puede modificarse y q cuando se modifique actualiza la vista,ej hacer logica, INFO PRIVADA EL COMPONENTE para gestion interna. Estatica e inmutable
    this.state = {   
      age : 29
    }
}

    render() {
        return (
            <div>
                <h1>
                   HOLA {this.props.name} 
                </h1>
                <h2>
                    Tu edad es de: {this.state.age}
                </h2>
                <div>
                    <button onClick={this.bithday}> {/*sin () el birtday para q no se ejecute inmediato */}
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }
/*funcion para modificar la edad, */
    bithday = () => {  //se usa flecha para poder usar .this
        this.setState((prevState) =>  ( //metodo setState genera un nuevo estado y actualiza la vista
                {
                    age: prevState.age + 1
                }
            ))     
    }
}
//concatenar codigo , de las propiedades que voy a recibir, voy a recibir un .name. Quien este pintando este componente app.js le tiene  q pasar un dato


Greeting.propTypes = {
    name: PropTypes.string,

};


export default Greeting;


