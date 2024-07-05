// src/components/PlatoEspecifico.js
import React from 'react';

const PlatoEspecifico = ({ plato }) => {
  return (
    <div>
      <h2>{plato.nombre}</h2>
      <p>{plato.descripcion}</p>
      <video src={plato.video} controls />
    </div>
  );
};

export default PlatoEspecifico;
