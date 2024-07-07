// Footer.js
import React from 'react';
import categorias from '../Componentes/Categorias';
import '../Estilos/styles.css';

const Footer = ({ onCategoriaClick }) => {
  return (
    <footer>
      <div className="categorias-footer">
        {categorias.map((categoria, index) => (
          <div key={index} className="categoria-footer" onClick={() => onCategoriaClick(categoria)}>
            {categoria.titulo}
          </div>
        ))}
      </div>
      <p>&copy; 2024 Vales. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
