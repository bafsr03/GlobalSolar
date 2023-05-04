import React from 'react'
import background from '../assets/background.png'
import logoblanco from '../assets/logoblanco.png'
import BannerContactos from '../assets/BannerContactanos.png'
import maos from '../assets/maos.png'
import Maps from '../assets/Maps.png'
import correo from '../assets/Correo.png'
import Cel from '../assets/Cel.png'
import LogoCon from '../assets/LogoCon.png'
import panel2 from '../assets/2.jpeg'
const Contactos = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-full h-full object-cover bg-[#F2EFE7]" src={BannerContactos} alt="BannerCalculadora" /> {/* Update the classes for the image */}
      </div>

      <div class="Informacion bg-[#F2EFE7] relative w-full flex items-center justify-center ">
        <div class="p-4 text-center">
          <p class="text-3xl font-semibold text-gray-900">Contáctanos</p>
          <p class="text-xl font-semibold text-blue-900 mt-6">+51 987 654 321</p>
          <p class="text-xl font-semibold text-blue-900 mt-2">globalsolar.tech@gmail.com</p>
          <p class="text-xl font-semibold text-blue-900 mt-2">Jirón Cotabamba 265,<br />Cercado de Lima</p>
          <div class="flex mt-4">
            <img class="w-4 h-4 mr-2" src={correo} alt="Correo Icon" />
            <p class="text-blue-900">globalsolar.tech@gmail.com</p>
          </div>
          <div class="flex mt-2">
            <img class="w-4 h-4 mr-2" src={Maps} alt="Maps Icon" />
            <p class="text-blue-900">Jirón Cotabamba 265,<br />Cercado de Lima</p>
          </div>
          <div class="flex mt-2">
            <img class="w-3 h-5 mr-2" src={Cel} alt="Cel Icon" />
            <p class="text-blue-900">+51 987 654 321</p>
          </div>
        </div>
        <img class="maos1 absolute right-0 top-0 shadow-lg w-full h-full md:w-auto" src={maos} alt="Placeholder Image" />
      </div>

      <div class="GlobalSolar bg-[#F2EFE7] flex flex-col items-center justify-end max-w-full p-24">
        <img class="Logo1 max-h-72" src={LogoCon} alt="Global Solar Logo" />
        <p class="GlobalSolarText text-base font-semibold text-center text-gray-500 max-w-full p-6">
          Global Solar es un proyecto desarrollado por la empresa OMP SOLAR S.A.C. Somos una tienda virtual especializada en ofrecer todo lo esencial en sistemas fotovoltaicos para hogares y empresas. Tenemos por objetivo que nuestros usuarios tengan una experiencia eficaz y sencilla para encontrar un KIT SOLAR ideal para satisfacer el consumo eléctrico con energía renovable. Contamos con un equipo de ingenieros y expertos en energía solar, listos para asesorarte en cada proyecto que tengas en mente.
        </p>
        <div class="Line1 border-t-2 border-gray-900 w-full max-w-full"></div>
      </div>

      <div className=" bg-[#F2EFE7] p-24">
  <p className=" left-0 top-0 text-4xl font-semibold text-center text-gray-500">OMP SOLAR S.A.C.</p>
  <p className=" left-0 bottom-0 font-semibold text-gray-500 w-64 break-words text-center">Es una empresa con X años de experiencia en el rubro de energía solar, cuenta con un amplio portafolio de proyectos realizados en pequeña y gran escala, tanto para hogares como para importantes empresas a nivel nacional.<br /><br />www.ompsac.com</p>
  <img className=" right-0 top-0 w-80 h-48 rounded" src={panel2} alt="Placeholder Image" />
</div>


      <div class="relative bg-gray-900 py-8 md:py-12">
        <div class="absolute inset-0 overflow-hidden">
          <img class="w-full h-full object-cover" src={background} alt="placeholder image" />
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between relative z-10">
          <div class="flex flex-col md:flex-row">
            <a href="/" class="text-gray-200  font-bold text-base mb-3 md:mb-0 md:mr-6">Inicio</a>
            <a href="/calculadora" class="text-gray-200 font-bold text-base mb-3 md:mb-0 md:mr-6">Calculadora</a>
            <a href="/tienda" class="text-gray-200  font-bold text-base mb-3 md:mb-0 md:mr-6">Tienda</a>
            <a href="/proyectos" class="text-gray-200 font-bold text-base mb-3 md:mb-0 md:mr-6">Proyectos</a>
            <a href="/nosotros" class="text-gray-200  font-semibold text-base mb-3 md:mb-0">Nosotros</a>
          </div>
          <div class="flex justify-center md:justify-end">
            <img class="w-48 h-auto md:w-72 mb-4 md:mb-0" src={logoblanco} alt="logo" />
          </div>
          <div class="flex flex-col md:flex-row">
            <a href="/recervas" class="text-gray-200 font-bold text-base mb-3 md:mb-0 md:mr-6">Reserva una cita</a>
            <a href="/envios" class="text-gray-200 font-bold text-base mb-3 md:mb-0 md:mr-6">Envíos</a>
            <a href="/nosotros" class="text-gray-200 font-bold text-base mb-3 md:mb-0 md:mr-6">Instalación</a>
            <a href="/blog" class="text-gray-200 font-bold text-base mb-3 md:mb-0 md:mr-6">Blog</a>
            <a href="/terminos" class="text-gray-200 font-bold text-base mb-3 md:mb-0">Términos y Condiciones</a>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center relative z-10">
          <p class="text-gray-200 font-medium text-center text-base mb-2 md:mb-0 md:mr-6">Jr. Cotabamba 265, Cercado de Lima</p>
          <p class="text-gray-200 font-medium text-center text-base mb-2 md:mb-0">+51 987 654 321</p>
        </div>
      </div>

    </div>
  )
}

export default Contactos