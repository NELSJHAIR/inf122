 /*
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
    /*
    function renderizarCuadro(i) {
        return (
            <Cuadro
                valor={cuadros[i]}
                funcion={() => click(i)}
            />
        );
    }*/
    
    /*
    function For(cuadrosTemp){
        for (let j=0; j<cuadrosTemp.lenght; j++){
            return(cuadros[j]()=>click(j));
            
        }
    
    }*/ 