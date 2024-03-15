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
            <p>Somos una empresa con amplia trayectoria y en constante crecimiento, dedicada a la producción de eventos y contenidos audiosvisuales.
Nos caracterizamos en brindar un producto de calidad, y un servicio de primera.</p>
          </div>
        </div>
      </div>
  )
}

export default Nosotros