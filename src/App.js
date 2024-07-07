// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Inicio from './Paginas/Inicio';
import Categoria from './Paginas/Categorias'; // Asegúrate de importar correctamente la página Categoria
import categorias from './Componentes/Categorias';
import ListadoPlatos from './Paginas/ListadoPlatos';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio categorias={categorias} />} />
          <Route path="/listado-platos/:categoria" element={<ListadoPlatos />} />
          <Route path="/categoria/:titulo" element={<Categoria categorias={categorias} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

