import React from 'react';

const Galeria = () => {
  const lenguajes = [
    { nombre: 'Python', imagen: 'https://ruta_de_la_imagen_python.png' },
    { nombre: 'JavaScript', imagen: 'https://ruta_de_la_imagen_javascript.png' },
    // Agrega más lenguajes y sus imágenes aquí
  ];

  return (
    <div>
      {lenguajes.map((lenguaje) => (
        <div key={lenguaje.nombre}>
          <h3>{lenguaje.nombre}</h3>
          <img src={lenguaje.imagen} alt={lenguaje.nombre} />
        </div>
      ))}
    </div>
  );
};

export default Galeria;