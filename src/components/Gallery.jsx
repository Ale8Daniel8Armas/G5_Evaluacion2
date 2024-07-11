import React from 'react';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
const images = [image1, image2, image3, image4, image5, image6];


const Gallery = () => {
  return (
    <section id="gallery" className="p-8">
      <h2 className="text-3xl font-bold mb-4">Galería</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index + 1}`} className="w-full h-auto"/>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
