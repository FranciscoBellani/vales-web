import React from 'react';
import { useParams } from 'react-router-dom';

const ListadoPlatos = () => {
  const { categoria } = useParams();

  // Aquí iría la lógica para obtener los platos según la categoría
  const platos = [
    { nombre: 'Plato 1', descripcion: 'Descripción del plato 1', precio: 10 },
    { nombre: 'Plato 2', descripcion: 'Descripción del plato 2', precio: 20 },
    // Agrega más platos según sea necesario
  ];

  return (
    <div className="listado-platos">
      <h1>{categoria}</h1>
      <ul>
        {platos.map((plato, index) => (
          <li key={index}>
            <h2>{plato.nombre}</h2>
            <p>{plato.descripcion}</p>
            <p>Precio: ${plato.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListadoPlatos;
