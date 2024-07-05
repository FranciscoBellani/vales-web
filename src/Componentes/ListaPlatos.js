// src/components/ListaPlatos.js
import React from 'react';

const platos = {
  'Entradas': [
    { nombre: 'Ensalada', descripcion: 'Fresca y deliciosa', video: 'link-a-video' },
    // Agrega más platos
  ],
  // Agrega más categorías
};

const ListaPlatos = ({ categoria, onPlatoClick }) => {
  return (
    <div>
      <h2>{categoria.titulo}</h2>
      <ul>
        {platos[categoria.titulo]?.map((plato, index) => (
          <li key={index} onClick={() => onPlatoClick(plato)}>
            <h3>{plato.nombre}</h3>
            <p>{plato.descripcion}</p>
            <video src={plato.video} controls />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPlatos;

