/**
 * Componente que va a contener un componente para autentificacion de usuarios, se usara como pagina inicial con login paga y tendra un form internamente 
 */

//llamar rfc

//este useState nos mantendra controlado un usuario incial
import React, { useState } from 'react';

const LoginForm = () => {

    const initialCredencials = [
        {
            user: '',
            password: ''
        }
    ];

//para contar con las credenciales, actualizar
    const [credentials, setCredentials] = useState(initialCredencials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;

