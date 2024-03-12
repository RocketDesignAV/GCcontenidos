//import React from 'react'
import '../../public/css/clientes.css'

const Clientes = () => {
  return (
    <div id="clientesId" className="clientesContenedor">
      <div className='containerClientes'>
      <h1 className='text-center'>CONFÍAN EN NOSOTROS</h1>
      <div className='hr'>
          <p>d</p>
      </div>
        <div className='clientesContent flex'>
          <div className='clientesContentRow-1 flex justify-between'>
            <div className='river'>
              <picture>
                <img src="../../public/img/RIVER.png" alt="" width={'195px'}/>
              </picture>
            </div>
            <div className='huracan'>
              <picture>
                <img src="../../public/img/HURACAN.png" alt="" width={'147px'} />
              </picture>
            </div>
            <div className='cai'>
              <picture>
                <img src="../../public/img/CAI.png" alt="" width={'226px'} />
              </picture>
            </div>
          </div>
          <div className='clientesContentRow-2 flex justify-around'>
              <div className='minSalud'>
                <picture>
                  <img src="../../public/img/min-salud.png" alt="" width={'400px'} />
                </picture>
              </div>
              <div className='galicia'>
                <picture>
                  <img src="../../public/img/galicia.png" alt="" width={'400px'} />
                </picture>
              </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Clientes