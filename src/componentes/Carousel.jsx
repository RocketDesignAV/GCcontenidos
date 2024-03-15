//import React from 'react'
import '../../public/css/clientes.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../public/css/carousel.css';
const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '10%',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '25%',
        }
      }
    ]
  };

  return (
    <div id="clientesId" className="clientesContenedor">
      <div className='containerClientes'>
      <h1 className='text-center'>CONFÍAN EN NOSOTROS</h1>
        <div className='clientesContent flex'>
          <div className='clientesContentRow-1 flex justify-between'>
          <div className="carousel-wrapper">
        <Slider {...settings} className='flex items-center justify-center'>
          <div className='carousel-item imgRiver'>
            <img src="/img/river-logo.png" alt="Imagen 1" style={{width:'120px'}}/>
          </div>
          <div className='carousel-item imgOnu'>
            <img src="/img/onu-white.png" alt="Imagen 2"/>
          </div>
          <div className='carousel-item imgHuracan'>
            <img src="/img/huracan-logo.png" alt="Imagen 3" style={{width:'100px'}}/>
          </div>
          <div className='carousel-item imgFootgolf'>
            <img src="/img/footgolf-white.png" alt="Imagen 4"/>
          </div>
          <div className='carousel-item imgAfa'>
            <img src="/img/afa.png" alt="Imagen 5" style={{width:'120px'}}/>
          </div>
          <div className='carousel-item imgDf'>
            <img src="/img/df-white.png" alt="Imagen 6"/>
          </div>
          <div className='carousel-item imgCai'>
            <img src="/img/cai.png" alt="Imagen 7" style={{width:'120px'}}/>
          </div>
          <div className='carousel-item imgGalicia'>
            <img src="/img/galicia-edit.png" alt="Imagen 6" style={{width:'250px'}}/>
          </div>
          <div className='carousel-item imgTeamup'>
            <img src="/img/teamup.png" alt="Imagen 9" style={{width:'120px'}}/>
          </div>
        </Slider>
      </div>
        </div>
        </div>
        </div>
      </div>
  )
}

export default Carousel