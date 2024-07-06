import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Imagenes/logo-vales.png'; 

const Header = () => {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-2 text-start">
            <FaBars size={24} />
          </div>
          <div className="col-8 text-center">
            <img src={logo} alt="Vales" style={{ maxHeight: '50px' }} /> {/* Ajusta el tamaño según sea necesario */}
          </div>
          <div className="col-2 text-end">
            <FaSearch size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
