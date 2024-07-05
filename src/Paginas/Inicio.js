// import React from 'react';

// const Inicio = () => {
//   return (
//     <div>
//       <h1>Bienvenido a la Carta de Menú con Videos</h1>
//       <p>Esta es la página de inicio de la aplicación. Aquí podrías incluir una breve descripción de tu aplicación.</p>
//     </div>
//   );
// }

// export default Inicio;

// src/Inicio.js
import React, { useState } from 'react';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import Categorias from '../Componentes/Categorias';
import ListaPlatos from '../Componentes/ListaPlatos'
import PlatoEspecifico from '../Componentes/PlatoEspecifico';

const Inicio = () => {
  const [view, setView] = useState('categorias'); // Estado para controlar la vista
  const [selectedCategoria, setSelectedCategoria] = useState(null); // Estado para la categoría seleccionada
  const [selectedPlato, setSelectedPlato] = useState(null); // Estado para el plato seleccionado

  const handleCategoriaClick = (categoria) => {
    setSelectedCategoria(categoria);
    setView('listaPlatos');
  };

  const handlePlatoClick = (plato) => {
    setSelectedPlato(plato);
    setView('platoEspecifico');
  };

  const renderView = () => {
    switch (view) {
      case 'listaPlatos':
        return <ListaPlatos categoria={selectedCategoria} onPlatoClick={handlePlatoClick} />;
      case 'platoEspecifico':
        return <PlatoEspecifico plato={selectedPlato} />;
      default:
        return <Categorias onCategoriaClick={handleCategoriaClick} />;
    }
  };

  return (
    <div>
      <Header />
      {renderView()}
      <Footer />
    </div>
  );
};

export default Inicio;
