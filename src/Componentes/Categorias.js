// src/components/Categorias.js
import React from 'react';

const categorias = [
  { titulo: 'Entradas', descripcion: 'Deliciosas entradas', video: 'link-a-video' },
  { titulo: 'Platos principales', descripcion: 'Sabrosos platos principales', video: 'link-a-video' },
  { titulo: 'Postres', descripcion: 'Irresistibles postres', video: 'link-a-video' },
  { titulo: 'Bebidas', descripcion: 'Refrescantes bebidas', video: 'link-a-video' },
];

const Categorias = ({ onCategoriaClick }) => {
  return (
    <div>
      <h2>Categorías</h2>
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index} onClick={() => onCategoriaClick(categoria)}>
            <h3>{categoria.titulo}</h3>
            <p>{categoria.descripcion}</p>
            <video src={categoria.video} controls />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categorias;
