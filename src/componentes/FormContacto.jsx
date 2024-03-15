import { useState, useEffect } from 'react'

const FormContacto = () => {

  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [valor, setValor] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  })


  function handleNombre(e) {
    setNombre(e.target.value)
  }
  function handleTelefono(e) {
    setTelefono(e.target.value)
  }
  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handleMensaje(e) {
    setMensaje(e.target.value)
  }

  /*
  useEffect(() => {
    console.log(valor);
  }, [valor]);
*/


  function onSubmit(e) {
    e.preventDefault()

    setValor({
      nombre: nombre,
      telefono: telefono,
      email: email,
      mensaje: mensaje
    })
    
  }


  return (

        <form className="ml-auo space-y-4" onSubmit={onSubmit}>
            <input type='text' name ="nombre" placeholder='Nombre' className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#a20909]" value={nombre} onChange={handleNombre}/>
            <input type='email' name='email' placeholder='Email' className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#a20909]" value={email} onChange={handleEmail}/>
            <input type='text' placeholder='Teléfono' name='telefono' className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#a20909]" value={telefono} onChange={handleTelefono}/>
            <textarea placeholder='Mensaje' rows="6" name='mensaje' className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#a20909]" value={mensaje} onChange={handleMensaje}></textarea>
            <button type='submit' className="text-white bg-[#a20909] hover:bg-red-700 font-semibold rounded-md text-sm px-4 py-2.5 w-full btnForm">Enviar</button>
        </form>
        
  )
}

export default FormContacto