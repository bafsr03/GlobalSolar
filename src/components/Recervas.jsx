import React from 'react'
import background from '../assets/background.png'
import logoblanco from '../assets/logoblanco.png'
import RecervaCita from '../assets/bannerRecerva.png'
import fondocotizar from '../assets/fondocotizar.png'
import electricista from '../assets/electricista_.png'
const Recervas = () => {
  return (
    <div>Recervas
      <div className="relative">
        <img className="w-full h-full object-cover" src={RecervaCita} alt="BannerCalculadora" /> {/* Update the classes for the image */}
      </div>

      <p class="text-3xl mt-16 mb-16 text-center text-gray-500">
        Nos importa darte una asesoría personalizada<br class="hidden sm:inline" />para guiarte mejor en tu proyecto solar.
      </p>
      <div class="relative  flex items-center justify-center">
        <div class="relative bg-white bg-opacity-75 p-20 rounded " style={{ backgroundImage: `url(${fondocotizar})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <div>
            <p className=" text-3xl font-semibold text-gray-200 text-center">Un <em className='text-blue-900'>EXPERTO SOLAR</em>, espera para asesorarte!</p>
          </div>
          <p class="Nombre text-xl font-semibold text-blue-900">Nombre *</p>
          <div class="Rectangle25 w-80 h-8 bg-gray-200 rounded"></div>
          <p class="Empresa font-semibold text-blue-900">Empresa (opcional)</p>
          <div class="Rectangle26 w-80 h-8 bg-gray-200 rounded"></div>
          <p class="Celular text-xl font-semibold text-blue-900">Celular *</p>
          <div class="Rectangle27 w-80 h-8 bg-gray-200 rounded"></div>
          <p class="Correo text-xl font-semibold text-blue-900">Correo *</p>
          <div class="Rectangle28 w-80 h-8 bg-gray-200 rounded"></div>
          <p class="Asunto text-xl font-semibold text-blue-900">Asunto</p>
          <div class="Rectangle29 w-80 h-8 bg-gray-200 rounded"></div>
          <p class="Cuéntanossobre text-xl font-semibold text-blue-900">Cuéntanos sobre tu proyecto:</p>
          <div class="Rectangle30 bg-gray-200 rounded"></div>
          <div>
            <img className="w-full h-full" scr={electricista}></img>
          </div>
        </div>
      </div>





      <p class="text-3xl mt-16 mb-16 text-center">Un EXPERTO SOLAR, espera para asesorarte!</p>

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

export default Recervas