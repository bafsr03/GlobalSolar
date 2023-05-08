import React from 'react'
import background from '../assets/background.png'
import logoblanco from '../assets/logoblanco.png'
import termyCond from '../assets/TermyCond.png'

const Terminos = () => {
  return (
    <div>Terminos
      <div className="relative">
        <img className="w-full h-full object-cover" src={termyCond} alt="BannerCalculadora" /> {/* Update the classes for the image */}
      </div>

      <div class="mx-auto mt-16 max-w-2xl">
        <h2 class="text-2xl font-bold mb-4">TÉRMINOS Y CONDICIONES</h2>
        <p class="text-gray-500 leading-relaxed">
          GLOBAL SOLAR es un proyecto desarrollado por la empresa OMP S.A.C. con RUC 20992835023 todo comprobante emitido (Boleta / Factura) se realizará con dicho nombre comercial.
        </p>
        <h3 class="text-lg font-bold mt-8 mb-4">REGISTRO DE NUEVOS USUARIOS:</h3>
        <ul class="list-disc pl-8 mb-4">
          <li>Todos los datos</li>
          <li>La informacion otorgadoa</li>
          <li>askmdasd</li>
          <li>3d3,c</li>
        </ul>
        <h3 class="text-lg font-bold mt-8 mb-4">COMPRAS DENTRO DE LA WEB</h3>
        <ul class="list-disc pl-8 mb-4">
          <li>asdasdsd</li>
          <li>acascasdascas</li>
          <li>akacmamcasmasacs</li>
          <li>dokcnsdcknsdcsd</li>
        </ul>
        <h3 class="text-lg font-bold mt-8 mb-4">ENVÍOS</h3>
        <ul class="list-disc pl-8 mb-4">
          <li>asicnascancias</li>
          <li>2kacmiaasca</li>
          <li>okncisnciasc</li>
          <li>4jnsdcjsnjdncs</li>
        </ul>
        <h3 class="text-lg font-bold mt-8 mb-4">CAMBIOS - DEVOLUCIONES</h3>
        <ul class="list-disc pl-8 mb-8">
          <li>Aackaasnac</li>
          <li>caokncanas</li>
          <li>akcaasnanca</li>
          <li>ckcakcaasnasna</li>
        </ul>
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

export default Terminos