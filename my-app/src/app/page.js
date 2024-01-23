'use client';
import style from './page.module.css';
import Boton from './contador/components/boton';
import Contador from './contador/components/Contador';
import { useState } from 'react'; 


function App() {
  
  const [ nroClicks, setNumClicks] = useState(0);
  const [show, setShow] = useState(true);
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
  const mostrar = () => {
    setShow(!show);
  }
  return (
    <div className={style.App}>
      <div className={style["contenedor-principal"]}>
      <Contador nroClicks={nroClicks} mostrar={show} />
        <div className={style['contendedor-botones']}>
          <Boton texto="Click" esBotonClick={true}
            funcionClick={click} />
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
          <Boton texto="Mostrar/Ocultar" esBotonClick={false} funcionClick={mostrar} />
        <div className={style["contenedor-botones2"]}>
          <Boton texto="-3" esBotonClick={true}
            funcionClick={menosTres}/>
          <Boton texto="+3" esBotonClick={true}
            funcionClick={tresMas}/>
          <Boton texto="-1" esBotonClick={true}
            funcionClick={menosUno}/>
          <Boton texto="+1" esBotonClick={true}
            funcionClick={masUno}/>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
