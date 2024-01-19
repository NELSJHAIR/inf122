import React, {useState} from 'react';
import '../style/Login.css';
function Registrar(){
    const [usuario, setUsusario]=useState('');
    const [apellido, setApellido]=useState('');
    const [contraseña, setContraseña]=useState('');
    const handleButtonClick = (usuario, contraseña) =>{
        console.log('Ususario:', usuario);
        console.log('Apellido: ',apellido);
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
                type='text'
                placeholder='Apellido'
                value={contraseña}
                onChange={(e) => setApellido(e.target.value)}
            />
            <input
                type='password'
                placeholder='Contraseña'
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
            />
            <br />
            <button onClick={handleButtonClick}>Registrar</button>
            
            </div>
            
        </div>
    );
}
export default Registrar;