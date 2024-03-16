import React from 'react'
import '../../public/css/whatsapp.css'

const Whatsapp = () => {

  const mensaje = `Hola, te escribo desde la pagina de GC Contenidos. Quiero solicitar más información.`
  return (
    <div className='fixed btnWhatsapp'> 
        <a href={`https://wa.me/541132309706?text=${mensaje}`} target='_blank'>mi whatsapp</a>
      </div>
  )
}



export default Whatsapp