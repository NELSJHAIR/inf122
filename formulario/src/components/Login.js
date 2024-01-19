import React, {useState} from 'react';
import Boton from "./Boton";
import '../style/Login.css';
function Login(){
    const [usuario, setUsusario]=useState('');
    const [contraseña, setContraseña]=useState('');
    const handleButtonClick = (usuario, contraseña) =>{
        console.log('Ususario:', usuario);
        console.log('Contraseña: ',contraseña);
    }
    return(
        <div className='container-login'>
            <div className='form'>
            <input
                type='text'
                placeholder='Usuario'
                value={usuario}
                onChange={(e) => setUsusario(e.target.value)}
            />
            <input
                type='password'
                placeholder='Contraseña'
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
            />
            <br />
            <Boton onClick={handleButtonClick} usuario={usuario} contraseña={contraseña}/>
            
            </div>
            
        </div>
    );
}
export default Login;