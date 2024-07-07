import React from 'react';
import { useParams } from 'react-router-dom';
import categorias from '../Componentes/Categorias';

const Categoria = () => {
  const { titulo } = useParams(); // Obtener el parámetro de la URL

  // Encontrar la categoría correspondiente según el parámetro de la URL
  const categoria = categorias.find(cat => cat.titulo.toLowerCase() === titulo);

  if (!categoria) {
    return <div>Categoría no encontrada</div>;
  }

  return (
    <div>
      <h2>{categoria.titulo}</h2>
      <p>{categoria.descripcion}</p>
      <ul>
        {categoria.platos.map((plato, index) => (
          <li key={index}>
            <h3>{plato.nombre}</h3>
            <p>{plato.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categoria;
