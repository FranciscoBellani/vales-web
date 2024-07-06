import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Inicio from './Paginas/Inicio';
import ListadoPlatos from './Paginas/ListadoPlatos';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/listado-platos/:categoria" element={<ListadoPlatos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
