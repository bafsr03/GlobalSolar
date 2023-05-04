import React from 'react';
import background from '../assets/background.png'
import logoblanco from '../assets/logoblanco.png'
import Poryectomp from '../assets/projectoOMP.png'
import CasaSolar from '../assets/CasaSolar.png'
import paneles from '../assets/5.png'
import bannerini from '../assets/Bannerinicio.png'
import electricista from '../assets/electricista.png'
const Proyectos = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#F2EFE7] text-gray-300'>
      {/* Container */}
      <div className="relative">
        <img className="w-full h-full object-cover" src={Poryectomp} alt="BannerCalculadora" /> {/* Update the classes for the image */}
        <div className="w-full md:w-3/4 mx-auto p-4 md:p-10">
          <p className="text-gray-500 font-semibold text-2xl text-center mt-4 md:mt-8">OMP S.A.C. se dedica a la importación directa y distribución de productos para obtener energía renovable
            fotovoltaica, entre ellos paneles solares, inversores, controladores de carga, baterías; realizando diversas
            instalaciones y proyectos, tanto para el hogar como para empresas, que buscan aprovechar este recurso. </p>
        </div>
      </div>

      <div className='bg-[#F2EFE7]'>
      <div className="w-full sm:w-[881px] h-[256px] mx-auto relative p-4 sm:p-8">
    <div className="flex flex-col items-center">
      <img className="CasaSolar w-32 h-32 absolute" style={{ left: "49px", top: "0" }} src={CasaSolar} />
      <p className="HOGARES absolute text-2xl font-bold text-center text-gray-900" style={{ left: "50px", top: "128px" }}>HOGARES</p>
      <img className="absolute right-0 top-0 rounded-lg w-full sm:w-[576px] h-[256px]" src={paneles} />
      <div className="absolute left-0 bottom-0 text-xs text-center text-gray-500">
        <p>
          Proyectos para casas familiares, que<br />
          asiasjaiiasm aia ianian ianias ianxian<br />
          aspxaosmxao oamoaso maoxmoas oam<br />
          asxaimiaasxamxiasmxaixaixasioamxas<br />
          asxaismxiaxiasxmain ianxiasniasnxia<br />
          axiansixanasinaisnxiasnxiis.
        </p>
      </div>
    </div>
  </div>
        <div className="w-full sm:w-[881px] h-[256px] mx-auto relative">
          <div className="flex flex-col items-center">
            <img className="CasaSolar w-32 h-32 absolute" style={{ left: "49px", top: "0" }} src={CasaSolar} />
            <p className="HOGARES absolute text-2xl font-bold text-center text-gray-900" style={{ left: "50px", top: "128px" }}>HOGARES</p>
            <img className="absolute right-0 top-0 rounded-lg w-full sm:w-[576px] h-[256px]" src={paneles} />
            <p className="absolute left-0 bottom-0 text-xs text-center text-gray-500">
              Proyectos para casas familiares, que<br />
              asiasjaiiasm aia ianian ianias ianxian<br />
              aspxaosmxao oamoaso maoxmoas oam<br />
              asxaimiaasxamxiasmxaixaixasioamxas<br />
              asxaismxiaxiasxmain ianxiasniasnxia<br />
              axiansixanasinaisnxiasnxiis.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[881px] h-[256px] mx-auto relative">
          <div className="flex flex-col items-center">
            <img className="CasaSolar w-32 h-32 absolute" style={{ left: "49px", top: "0" }} src={CasaSolar} />
            <p className="HOGARES absolute text-2xl font-bold text-center text-gray-900" style={{ left: "50px", top: "128px" }}>HOGARES</p>
            <img className="absolute right-0 top-0 rounded-lg w-full sm:w-[576px] h-[256px]" src={paneles} />
            <p className="absolute left-0 bottom-0 text-xs text-center text-gray-500">
              Proyectos para casas familiares, que<br />
              asiasjaiiasm aia ianian ianias ianxian<br />
              aspxaosmxao oamoaso maoxmoas oam<br />
              asxaimiaasxamxiasmxaixaixasioamxas<br />
              asxaismxiaxiasxmain ianxiasniasnxia<br />
              axiansixanasinaisnxiasnxiis.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-80  bg-[#F2EFE7] ">
        <img className="absolute left-0 bottom-0 w-full md:h-1/2" style={{ height: "265px" }} src={bannerini} alt="Banner" />
        <p className="absolute text-3xl italic font-semibold text-[#FFFFFF] top-0 md:top-20 left-10 md:left-32 md:w-3/5 lg:w-1/2 h-20 md:h-auto leading-tight">Con ganas de armar un gran proyecto o tienes dudas sobre la energía solar?</p>
        <p className="absolute text-2xl font-semibold text-[#FFFFFF] top-16 md:top-44 left-10 md:left-32 md:w-2/5 lg:w-1/3 h-10 md:h-auto">Habla con un <em className='text-blue-900'>EXPERTO SOLAR!</em></p>
        <div className="" >
          <button className="absolute bg-gradient-to-b text-base font-extrabold text-blue-900  from-white to-gray-200 shadow rounded-full inline-flex items-center justify-center w-36 h-10  my-2 top-32 md:top-56 left-10 md:left-32">Reserva tu cita</button>
        </div>
        <img className="absolute w-1/3 md:w-1/4 lg:w-1/5 bottom-0 right-[450px]" style={{ height: "360px", width: "265px" }} src={electricista} alt="Electricista" />
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
  );
};

export default Proyectos;
