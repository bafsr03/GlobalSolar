import React from 'react';
import background from '../assets/background.png';
import logoblanco from '../assets/logoblanco.png';
import envioInstalacion from '../assets/BannerEnvioInstal.png';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';

const Envios = () => {
  return (
    <div>
      Envios
      <div className="relative">
        <img className="w-full h-full object-cover" src={envioInstalacion} alt="BannerCalculadora" />
      </div>
      <div className="Envíos mt-16 relative w-full md:w-[895px] h-[470px] flex mx-auto">
  <div className="flex-1 ">
    <p className="Envíos w-36 h-12 absolute left-0 top-0 text-4xl font-bold text-yellow-600">Envíos</p>
    <p className="Lima absolute text-3xl font-bold text-blue-900 left-0 md:left-4 top-[108px]">Lima</p>
    <p className="Provincias absolute text-3xl font-bold text-blue-900 left-0 md:left-4 top-[300px]">Provincias</p>
    <p className="Losenvíos w-80 h-28 absolute text-sm font-bold text-gray-500 left-3 md:left-8 top-[170px]">Los envíos a Lima Metropolitana, se realizan con la empresa Olva Courier o Shalom.<br />Disponemos de local para recojo de los pedidos.</p>
    <p className="Losenvíos w-80 h-28 absolute left-0 md:left-8 bottom-0 text-sm font-bold text-gray-500">Los envíos a Lima Metropolitana, se realizan con la empresa Olva Courier o Shalom.<br />Disponemos de local para recojo de los pedidos.</p>
  </div>
  <div className="flex-none ml-auto mr-24 md:mr-8">
    <img className="26099591 my-auto shadow rounded-lg w-full h-auto max-w-[512px] max-h-[520px]" src={img1} />
  </div>
</div>
<div className="Instalación  mt-16 relative w-full md:w-[895px] h-[470px] flex mx-auto">
  <div className="flex-1">
    <p className="Instalación w-60 h-12 absolute left-0 top-0 text-4xl font-bold text-yellow-600">Instalación</p>
    <p className="Lima absolute text-3xl font-bold text-blue-900 left-0 md:left-4 top-[108px]">Lima</p>
    <p className="Provincias absolute text-3xl font-bold text-blue-900 left-0 md:left-4 top-[300px]">Provincias</p>
    <p className="Losenvíos w-80 h-28 absolute text-sm font-bold text-gray-500 left-3 md:left-8 top-[170px]">Los envíos a Lima Metropolitana, se realizan con la empresa Olva Courier o Shalom.<br />Disponemos de local para recojo de los pedidos.</p>
    <p className="Losenvíos w-80 h-28 absolute left-0 md:left-8 bottom-0 text-sm font-bold text-gray-500">Los envíos a Lima Metropolitana, se realizan con la empresa Olva Courier o Shalom.<br />Disponemos de local para recojo de los pedidos.</p>
  </div>
  <div className="flex-none ml-auto mr-24 md:mr-8">
    <img className="81 my-auto shadow rounded-2xl w-full h-auto max-w-[512px] max-h-[520px]" src={img2} />
  </div>
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

export default Envios