import React, { useState, useRef, useEffect } from 'react';
import '../../public/css/portfolio.css';

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const handleImageClick = (event, imageSrc) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del evento click
    openModal(imageSrc);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="p-5 portfolioContenedor" id="portfolioId">
      <h1>PORTFOLIO</h1>
      <div className='hr'>
        <p>d</p>
      </div>
      <div className="container mx-auto py-2 lg:pt-12 portfolioContent">
        <div className="-m-1 flex flex-wrap md:-m-2 justify-center">
          {/* Aquí se agregan las imágenes */}
          <div className="w-full md:w-1/3 p-1 md:p-2">
            <a href="#" onClick={(e) => handleImageClick(e, '../../public/img/taylor.jpg')}>
              <img className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-300" src='../../public/img/taylor.jpg' alt='Taylor Swift'/>
            </a>
          </div>
          <div className="w-full md:w-1/3 p-1 md:p-2">
            <a href="#" onClick={(e) => handleImageClick(e, '../../public/img/salud-mental.jpg')}>
              <img className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-300" src='../../public/img/salud-mental.jpg' alt='Salud Mental'/>
            </a>
          </div>
          <div className="w-full md:w-1/3 p-1 md:p-2">
            <a href="#" onClick={(e) => handleImageClick(e, '../../public/img/riverport2.jpg')}>
              <img className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-300" src='../../public/img/riverport2.jpg' alt='Riverport 2'/>
            </a>
          </div>
          <div className="w-full md:w-1/3 p-1 md:p-2">
            <a href="#" onClick={(e) => handleImageClick(e, '../../public/img/coldplay.jpg')}>
              <img className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-300" src='../../public/img/coldplay.jpg' alt='Coldplay'/>
            </a>
          </div>
          <div className="w-full md:w-1/3 p-1 md:p-2">
            <a href="#" onClick={(e) => handleImageClick(e, '../../public/img/riverport3.jpg')}>
              <img className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-300" src='../../public/img/riverport3.jpg' alt='Riverport 3'/>
            </a>
          </div>
          <div className="w-full md:w-1/3 p-1 md:p-2">
            <a href="#" onClick={(e) => handleImageClick(e, '../../public/img/cai-2.jpg')}>
              <img className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-300" src='../../public/img/cai-2.jpg' alt='CAI 2'/>
            </a>
          </div>
          <div className="w-full md:w-1/3 p-1 md:p-2">
            <a href="#" onClick={(e) => handleImageClick(e, '../../public/img/riverport4.webp')}>
              <img className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-300" src='../../public/img/riverport4.webp' alt='Riverport 4'/>
            </a>
          </div>
          <div className="w-full md:w-1/3 p-1 md:p-2">
            <a href="#" onClick={(e) => handleImageClick(e, '../../public/img/huracan-conferencia.jpg')}>
              <img className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-300" src='../../public/img/huracan-conferencia.jpg' alt='Huracán Conferencia'/>
            </a>
          </div>
          <div className="w-full md:w-1/3 p-1 md:p-2">
            <a href="#" onClick={(e) => handleImageClick(e, '../../public/img/cai-campeones.jpg')}>
              <img className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-300" src='../../public/img/cai-campeones.jpg' alt='CAI Campeones'/>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div ref={modalRef} className="max-w-xl w-fullbg-white rounded-md flex justify-center items-center">
            <button className="absolute top-2 right-2 text-gray-600" onClick={closeModal}>X</button>
            <img src={selectedImage} alt="Large Image" className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
