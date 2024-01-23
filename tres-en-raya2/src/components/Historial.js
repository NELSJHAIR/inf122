import React from 'react';
import "../style/Historial.css";

function Historial({ historial, saltarA }) {
    const movimientos = historial.map((paso, movimiento) => {
        const descripcion = movimiento ?
            <span>
                Ir al movimiento:{movimiento}
            </span>:
            <span>
                Ir al inicio del juego
            </span>
        return (
            <li key={movimiento}>
                <button onClick={() => saltarA(movimiento)}>{descripcion}</button>
            </li>
        );
    });

    return (
        <div className="informacion-juego">
            <ol>{movimientos}</ol>
        </div>
    );
}

export default Historial;