import React, {useEffect, useState} from 'react'
import '../../public/css/menu.css'
import { FiMenu } from 'react-icons/fi';
const Menu = () => {

  const [claseBg, setClaseBg] = useState('claseBgStart');
  const [claseTex, setClaseText] = useState('claseTextStart');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 1300 && offset < 2500 || offset > 3400) {
        setClaseBg('claseBgChange');
        setClaseText('claseTextChange');
      } else {
        setClaseBg('claseBgStart');
        setClaseText('claseTextStart');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
     <header className="bg-white border-gray-200 dark:bg-gray-900">
     <div className={`fixed navDivi flex items-center justify-between xl:max-w-10xl xl:mx-auto max-w-full lg:p-5 flex-wrap w-full back p-5 ${claseBg}`}>
            <div className='divImg'>
                <img src="../public/img/logo-gc.png" alt="" />
            </div>

          <FiMenu className='lg:hidden block h-8 w-8 cursor-pointer text-white' onClick={() => setOpen(!open)} />

          <nav className={`${open ? 'block' : 'hidden'} lg:flex lg:justify-between items-center py-2 lg:w-auto w-full lg:bg-transparent`}>
            <ul className='lg:flex px-3 text-white lg:justify-between'>
              <li className='mx-3 hover:text-red-600'><a className={`block p-3 lg:p-0 ${claseTex}`} href="#nosotrosId" onClick={() => setOpen(!open)}>Nosotros</a></li>
              <li className='mx-3 hover:text-red-600'><a className={`block p-3 lg:p-0 ${claseTex}`} href="#serviciosId" onClick={() => setOpen(!open)}>Servicios</a></li>
              <li className='mx-3 hover:text-red-600'><a className={`block p-3 lg:p-0 ${claseTex}`} href="#portfolioId" onClick={() => setOpen(!open)}>Portfolio</a></li>
              <li className='mx-3 hover:text-red-600'><a className={`block p-3 lg:p-0 ${claseTex}`} href="#clientesId" onClick={() => setOpen(!open)}>Clientes</a></li>
              <li className='mx-3 hover:text-red-600'><a className={`block p-3 lg:p-0 ${claseTex}`} href="#contactoId" onClick={() => setOpen(!open)}>Contacto</a></li>
            </ul>
          </nav>
          </div>
          <div className='banner'>
        <img src="../public/img/logo-gc.png" alt="" />
    </div>
    <div className='ola'>
        <img src="../public/img/ola-main.png" alt="" />
    </div>
        </header>  
    {/*
    <div className="bg-white border-gray-200 dark:bg-gray-900">
        <div className={`mainNav fixed w-full flex justify-between items-center p-5 ${claseBg}`}>
            <div className='divImg'>
                <img src="../public/img/logo-gc.png" alt="" />
            </div>
            <FiMenu className='lg:hidden block h-8 w-8 cursor-pointer text-white' onClick={() => setOpen(!open)} />
            <nav className={`hidden w-full md:block md:w-auto ${open ? 'block' : 'hidden'} lg:flex lg:justify-between items-center py-2 lg:w-auto w-full lg:bg-transparent`}>
                <ul className={`flex ${claseTex}`}>
                    <li className='p-2'><a href="#nosotrosId" className={`${claseTex}`}>Nosotros</a></li>
                    <li className='p-2'><a href="#serviciosId" className={`${claseTex}`}>Servicios</a></li>
                    <li className='p-2'><a href="#portfolioId" className={`${claseTex}`}>Portfolio</a></li>
                    <li className='p-2'><a href="#clientesId" className={`${claseTex}`}>Clientes</a></li>
                    <li className='p-2'><a href="#contactoId" className={`${claseTex}`}>Contacto</a></li>
                </ul>
            </nav>
        </div>
    </div>
    <div className='banner'>
        <img src="../public/img/logo-gc.png" alt="" />
    </div>
    <div className='ola'>
        <img src="../public/img/ola-main.png" alt="" />
    </div>
    */}
    </>
  )
}

export default Menu