import React, {useState} from 'react';
import NotaBasic from './NotaBasic';
import "../style/ListaNotas.css";
function ListaNota(){
    const [notas, setNotas] = useState([]);
    const[texto, setTexto]=useState("");
  
    const addNota= ()=>{
      setNotas([...notas,texto])
      console.log(notas);
    }
    const onDelete = () => {
      
      console.log("Eliminar");
    }
    const onEdit = () => {
      console.log("Editar");
    }
    const [nuevaNota, setNuevaNota] = useState('');
 
  return (
    <div className="ListaNota">
      <div className ="contenedor-principal">
        <input 
          className= "input"
          type="text"
          value={texto}
          onChange={(e)=>setTexto(e.target.value)}
        />
        <button addNota={addNota}>Agregar nota</button>
        <NotaBasic key={nota.id} nota={"hola"} onDelete={onDelete} onEdit={onEdit}/>
      </div>
    </div>
  );
}
export default ListaNota;