import React from 'react';
import '../../public/css/servicios.css';

const Servicios = () => {
  return (
    <>
      <div id='serviciosId' className="serviciosContenedor">
        <h1 className='serviciosClass'>SERVICIOS</h1>
        <div className='serviciosImgDiv'>
          <div className='cctv'>
            <picture>
              <img src="/img/CCTV.png" alt="" />
            </picture>
            <p className='text-white'>CCTV</p>
            <div className='cctvP'>
              <ul>
                <li className='firstLi'>Registro audiovisual profesional</li>
                <li>Circuito cerrado de TV</li>
                <li>Transmisiones</li>
                <li>Broadcasting</li>
              </ul>
            </div>
          </div>
          <div className='sonido'>
            <picture>
              <img src="/img/sonido.png" alt="" />
            </picture>
            <p className='text-white'>SONIDO</p>
            <div className='sonidoP'>
              <ul>
                <li className='firstLi'>Equipamiento y personal profesional</li>
                <li>Sonido para estadios</li>
                <li>Refuerzo de palabra</li>
                <li>Música en vivo</li>
              </ul>
            </div>
          </div>
          <div className='video'>
            <picture>
              <img src="/img/video.png" alt="" />
            </picture>
            <p className='text-white'>VIDEO</p>
            <div className='videoP'>
              <ul>
                <li className='firstLi'>Recursos audiovisuales de todo tipo</li>
                <li>Pantallas LED</li>
                <li>Proyecciones</li>
                <li>Podios interactivos</li>
              </ul>
            </div>
          </div>
          <div className='contenido'>
            <picture>
              <img src="/img/contenido.png" alt="" />
            </picture>
            <p className='text-white'>CONTENIDO</p>
            <div className='contenidoP'>
              <ul>
                <li className='firstLi'>Contamos con diseñadores especializados</li>
                <li>Diseño grafico</li>
                <li>Contenido audiovisual</li>
                <li>Redes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Servicios;
