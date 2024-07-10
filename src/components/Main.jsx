import React, { useState } from 'react';

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="main-content" className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Evaluación Parcial 2</h1>
      <p className="text-lg mb-4">Programación Web Avanzada</p>
      <button onClick={handleButtonClick} className="bg-blue-500 text-white p-2 rounded">Mostrar Mensaje</button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-2xl mb-4">Mensaje Emergente</h2>
            <p>Este es un mensaje emergente.</p>
            <button onClick={closeModal} className="mt-4 bg-red-500 text-white p-2 rounded">Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Main;
