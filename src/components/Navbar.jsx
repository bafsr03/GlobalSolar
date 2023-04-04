import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';

import Logo from '../assets/logo.png';
//import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed top-0 left-0 z-10  w-full h-[80px] font-weight-700  flex justify-between items-center px-1 bg-[#F2EFE7] text-lg  font-semibold text-blue-800 shadow-md shadow-[#040c164d]'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '300px', paddingLeft: '25px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
            <a href='/' className=' hover:text-orange-600'>Inicio</a>
        </li>
        <li>
        <a href='/calculadora' className=' hover:text-orange-600'>Calculadora</a>
        </li>
        <li>
        <a href='/proyectos' className=' hover:text-orange-600'>Proyectos</a>
        </li>
        <li>
        <a href='/tienda' className=' hover:text-orange-600'>Tienda</a>
        </li>
        <li>
        <a href='/contactos' className=' hover:text-orange-600'>Contactos</a>
        </li>
        <li>
        <a href='/envios' className=' hover:text-orange-600'>Envios</a>
        </li>
        <li>
        <a href='/terminos' className=' hover:text-orange-600'>Terminos</a>
        </li>
        <li>
        <a href='/recervas' className=' hover:text-orange-600'>Recervas</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen   bg-[#F2EFE7] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
        <a href='/' className=' hover:text-orange-600'>Inicio</a>
        </li>
        <li className='py-6 text-4xl '>
          {' '}
          <a href='/calculadora' className=' hover:text-orange-600'>Calculadora</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href='/proyectos' className=' hover:text-orange-600'>Proyectos</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href='/tienda'className=' hover:text-orange-600'>Tienda</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href='/contactos' className=' hover:text-orange-600'>Contactos</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href='/envios' className=' hover:text-orange-600'>Envios</a>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a href='/terminos' className=' hover:text-orange-600'>Terminos</a>
        </li>
        <li className='py-6 text-4x1'>
          {' '}
          <a href='/recervas' className=' hover:text-orange-600'>Recervas</a>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;
