//llamar rfc, elegir el segundo

import React, { useState } from 'react';

const RegisterForm = () => {

    const initialData = [
        {
            user: '',
            name: '',
            email: '',
            password: ''
        }
    ];

//para contar con las credenciales, actualizar
    const [data, setData] = useState(initialData);



    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
