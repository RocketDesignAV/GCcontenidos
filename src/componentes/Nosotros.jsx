//import React from 'react'
import '../../public/css/nosotros.css'

const Nosotros = () => {
  return (
    <div id="nosotrosId" className="nosotrosContenedor">
      <h1>QUIENES SOMOS</h1>
      <div className='hr'>
        <p>d</p>
      </div>
      <div className='flex justify-center items-center nosotrosContent'>
          <div className='nosotrosImgDiv flex justify-between'>
              <picture>
                <img src="/img/quienes-somos.jpeg" alt="" width={'800px'}/>
              </picture>
            </div>
          <div className='nosotrosTextDiv'>
<<<<<<< HEAD
            <p>Somos una empresa con amplia trayectoria y en constante crecimiento, dedicada a la producción de eventos y contenidos audiosvisuales.
Nos caracterizamos en brindar un producto de calidad, y un servicio de primera.</p>
=======
            <p>Nos dedicamos a la produccion de eventos y contenidos audiovisuales. Somos una empresa con amplia trayectoria y en constante crecimiento. Nos esmeramos en brindar un producto de calidad, y un servicio de primera.</p>
>>>>>>> 0382bc54c948040ba7432bf18b6cf54c1f57b31b
          </div>
        </div>
      </div>
  )
}

export default Nosotros