/**
 * Ejemplo de componente tipo clase que dispone de los metodos de ciclo de vida 
 */

//llamar la funcion con rcc , 

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class componentName extends Component {
    constructor(props) {  //el constructor sirve para inicializar una variable
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente') 

    }

    componentWillMount() {
        console.log('WillMount: Antes del montaje del componente')

    }
     //se trabajar el tipo de peticiones, necesitamos los datos antes de pintarlos
    componentDidMount() {
        console.log('DidMount: Justo antes de acabar el montaje del componente, antes de pintarlo')

    }

    componentWillReceiveProps(nextProps) {
        console.log('Si va a recibir nuevas props')

    }

    shouldComponentUpdate(nextProps, nextState) {
         /**
         * Controlar si el componente debe o no actualizarse
         */
        //return true o false

    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: justo antes de actualizarse')
       

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: justo despues de actualizarse')

    }

    componentWillUnmount() {
        console.log('justo antes de desaparecer')
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

componentName.propTypes = {

}

export default componentName
