//import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'



import './App.css'
import Menu from './componentes/Menu'
//import Clientes from './componentes/Clientes'
import Contacto from './componentes/Contacto'
import Nosotros from './componentes/Nosotros'
import Servicios from './componentes/Servicios'
import Portfolio from './componentes/Portfolio'
import Carousel from './componentes/Carousel'


function App() {


  return (
    <BrowserRouter>
      <Menu/>
      <main className='contenedorMain'>
        <Nosotros/>
        <Servicios/>
        <Portfolio/> 
       {/* <Clientes/>*/}
        <Carousel/>
        <Contacto/>
      </main>
    </BrowserRouter>
  )
}

export default App
