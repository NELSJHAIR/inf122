import './App.css';
import Boton from './componentes/Boton';
import BotonB from './componentes/BotonB';
import Contador from './componentes/Contador';
import { useState } from 'react'; /* para guardarn estados */


function App() {
  
  const [ nroClicks, setNumClicks] = useState(0);
  const click = () => {
    setNumClicks(nroClicks+1);
    console.log(nroClicks);
  }
  const reiniciar = () => {
    setNumClicks(0);
    console.log("Reiniciar");
  }

  const tresMas =() => {
    setNumClicks(nroClicks+3);
  }
  const menosTres =()=>{
    setNumClicks(nroClicks-3);
  }
  const masUno =()=>{
    setNumClicks(nroClicks+1);
  }
  const menosUno =()=>{
    setNumClicks(nroClicks-1);
  }
  const [show,setShow]=useState(true);
  const borrar =()=>{
    
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="Click" esBotonClick={true}
            funcionClick={click} />
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        <div className="contenedor-botones2">
          <Boton texto="-3" esBotonClick={true}
            funcionClick={menosTres}/>
          <Boton texto="+3" esBotonClick={true}
            funcionClick={tresMas}/>
          <Boton texto="-1" esBotonClick={true}
            funcionClick={menosUno}/>
          <Boton texto="+1" esBotonClick={true}
            funcionClick={masUno}/>
        </div>
        <div className='botonDelete'>
          <BotonB texto="Borrar" esBotonClick={true}
            funcionClick={borrar}/>
        </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
