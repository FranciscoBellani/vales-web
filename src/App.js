import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Paginas/Inicio';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} /> {/* Página de inicio */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;