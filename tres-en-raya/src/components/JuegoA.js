import React from 'react';
import '../style/Juego.css';
import Historial from './Historial';
import Tablero from './Tablero';
import { useState } from 'react';

function Juego() {
    const [historial, setHistorial] = useState([
        {
            cuadros: Array(9).fill(null)
        },
    ]);
    const [nroMovimiento, setNroMovimiento] = useState(0);
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("X");
    const [ganador, setGanador] = useState(null);
    const xIsNext = nroMovimiento % 2 === 0;

    const click = (i) => {
        const nuevoMovimiento = historial.slice(0, nroMovimiento + 1);
        const movimientoActual = nuevoMovimiento[nuevoMovimiento.length - 1];
        const cuadros = movimientoActual.cuadros.slice();
        if (cuadros[i] === null) {
            cuadros[i] = jugador;
            setCuadros(cuadros);
            setJugador(jugador === "X" ? "O" : "X");
            setHistorial(nuevoMovimiento.concat([{ cuadros }]));
            setNroMovimiento(nuevoMovimiento.length);
            setGanador(null);
        }
        if (calcularGanador(cuadros) !== null) {
            setGanador(calcularGanador(cuadros));
        }
        
    }
    const saltarA = (movimiento) => {
        if(movimiento===0){
            setHistorial([
                {
                cuadros: Array(9).fill(null)
                }
            ])
        }
        if (movimiento % 2 === 0) {
            setJugador("X");
        } else {
            setJugador("O");
        }
        setNroMovimiento(movimiento);
        setGanador(null);
    }
    const movimientoActual = historial[nroMovimiento];
    return (
        <div className="juego">
            <div className="juego-tablero">
                <h2>{ganador ? `Ganador: ${ganador}`: `Ganador: --`}</h2>
                <h2>{!ganador ? `Próximo jugador: ${jugador}`: `Próximo jugador: --`}</h2>
                <Tablero xIsNext={xIsNext} cuadros={movimientoActual.cuadros} onClick={(i) => click(i) } ganador={ganador}/>
            </div>
            <Historial historial={historial} saltarA={saltarA} />
        </div>
    );
    
}


function calcularGanador(cuadros) {
    const lineas = [
        [0, 1, 2], // primera fila
        [3, 4, 5], // segunda fila
        [6, 7, 8], // tercera fila
        [0, 3, 6], // primera columna
        [1, 4, 7], // segunda columna
        [2, 5, 8], // tercera columna
        [0, 4, 8], // diagonal
        [2, 4, 6] // diagonal
    ];
    for (let i = 0; i < lineas.length; i++) {
        const [a, b, c] = lineas[i];
        if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
            return cuadros[a];
        }
    }
    return null;
}
export default Juego;