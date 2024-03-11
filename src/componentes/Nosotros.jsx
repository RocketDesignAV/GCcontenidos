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
          <div className='nosotrosTextDiv'>
            <p>Nos dedicamos a la produccion de eventos y contenidos audiovisuales. Somos una empresa con amplia trayectoria y en constante crecimiento. Nos esmeramos en brindar un producto de calidad, y un servicio de primera.</p>
          </div>
          <div className='nosotrosImgDiv flex justify-between'>
            <div>
              <picture>
                <img src="../../public/img/fondo-header.png" alt="" width={'550px'} height={'230px'}/>
              </picture>
            </div>
            <div>
              <picture>
                <img src="../../public/img/fondo-header.png" alt="" width={'550px'} height={'230px'}/>
              </picture>
            </div>
            </div>
        </div>
      </div>
  )
}

export default Nosotros