import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl">Evaluación Parcial 2</div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Inicio</Link></li>
          <li><Link to="/gallery" className="hover:underline">Galería</Link></li>
          <li><Link to="/contact" className="hover:underline">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
