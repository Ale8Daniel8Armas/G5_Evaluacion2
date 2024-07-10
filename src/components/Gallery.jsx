import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="p-8">
      <h2 className="text-3xl font-bold mb-4">Galería</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <img key={index} src={`https://via.placeholder.com/150?text=Imagen+${index + 1}`} alt={`Imagen ${index + 1}`} className="w-full h-auto"/>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
