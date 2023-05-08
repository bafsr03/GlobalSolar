import React from 'react';
import banner from '../assets/portadaInicio.png';
import enerdraw from '../assets/enerdraw1.png';
import casdraw from '../assets/casdraw.png';
import ahorrodraw from '../assets/ahorrodraw.png';
import propacalculadora from '../assets/propacalculadora.jpeg';
import proyectoomp from '../assets/12.jpeg';
import pro0 from '../assets/inversor.png'
import pro1 from '../assets/Bateria.png'
import pro2 from '../assets/kitsolart.png'
import pro3 from '../assets/Paneles-solares-Kit-solar-Victron-3650-wh.png'
import bannerini from '../assets/Bannerinicio.png'
import electricista from '../assets/electricista.png'
import deye from '../assets/deye.png'
import trina from '../assets/trina.webp'
import solis from '../assets/solis.png'
import victron from '../assets/victron.png'
import background from '../assets/background.png'
import logoblanco from '../assets/logoblanco.png'
const Inicio = () => {
  return (
    <div class="relative bg-[#F2EFE7]">
      <div class="relative w-full h-80">
        <img class="absolute inset-0 object-cover w-full h-256" src={banner} alt="Banner de inicio" />
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button class="bg-gradient-to-r from-yellow-500 to-red-500 shadow-md px-8 py-2 rounded-full text-white font-bold sm:inline-block sm:mt-4">
            Cotiza tu proyecto
          </button>
        </div>
      </div>

      <div class="relative bg-[#F2EFE7]">
        <div class="container mx-auto py-8 px-4 lg:px-0">
          <div class="grid gri  d-cols-1 md:grid-cols-3 gap-4">
            <div class="text-center">
              <img class="w-20 h-24 mx-auto mb-4" src={ahorrodraw} alt="Placeholder" />
              <p class="text-gray-500 mb-2 text-lg font-bold">Ahorro Mensual</p>
              <p class="text-gray-500 text-sm">Reduce significativamente los recibos de luz en tu hogar o negocio.</p>
            </div>
            <div class="text-center">
              <img class="w-36 h-24 mx-auto mb-4" src={casdraw} alt="Placeholder" />
              <p class="text-gray-500 mb-2 text-lg font-bold">Inversión Prolongada</p>
              <p class="text-gray-500 text-sm">Los paneles están diseñados para durar décadas, con vida útil de 25 años.</p>
            </div>
            <div class="text-center">
              <img class="w-24 h-24 mx-auto mb-4" src={enerdraw} alt="Placeholder" />
              <p class="text-gray-500 mb-2 text-lg font-bold">Energía Renovable</p>
              <p class="text-gray-500 text-sm">Responsable con el medio ambiente no emite gases de CO2.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center bg-gradient-to-b from-gray-900 to-blue-900 sm:px-5 md:flex-row">
        <div class="flex flex-col items-start justify-center w-full h-full pt-6 pb-6 mb-6 md:mb-0 md:w-1/2 md:pr-6 lg:w-1/2 lg:pr-0">
          <div class="relative w-full h-full lg:h-full flex flex-col justify-center items-center">
            <p class="text-3xl font-medium text-center text-gray-200 mb-20 ">Calcula tu consumo KwH <br /> y encuentra el <br /><br />ideal para tu hogar</p>
            <div class="absolute bottom-0 bg-gradient-to-b from-white to-gray-200 shadow rounded-3xl w-44 h-12 flex justify-center items-center">
              <button class="text-base font-bold text-center text-blue-900 w-20 lg:w-40">CALCULADORA SOLAR</button>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="block">
            <img src={propacalculadora} class="object-cover max-h-120 sm:max-h-96 w-full h-full" />
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center bg-gradient-to-b from-orange-600 to-amber-600 sm:px-5 md:flex-row">
        <div class="w-full md:w-1/2">
          <div class="block">
            <img src={proyectoomp} class="object-cover max-h-120 sm:max-h-96 w-full h-full" />
          </div>
        </div>
        <div class="flex flex-col items-start justify-center w-full h-full pt-6 pb-6 mb-6 md:mb-0 md:w-1/2  lg:w-1/2 lg:pr-0">
          <div class="relative w-full h-full lg:h-full flex flex-col justify-center items-center">
            <p class="text-3xl font-medium text-center text-gray-200 mb-20 ">Hogares y empresas<br />confiaron en nuestros equipo<br /><br />innova con nosotros</p>
            <div class="absolute bottom-0 bg-gradient-to-b from-white to-gray-200 shadow rounded-3xl w-44 h-12 flex justify-center items-center">
              <button class="text-base font-bold text-center text-orange-700 w-20 lg:w-40">PROYECTOS<br /> OMP</button>
            </div>
          </div>
        </div>
      </div>
      <div className=' bg-[#F2EFE7]'>
        <div className='bg-[#F2EFE7] flex items-center justify-center'>
          <div className="flex flex-col sm:flex-row">
            <p className="text-2xl font-bold text-blue-900 w-60 sm:w-auto right-6 text-center mb-4 sm:mb-0">DESCUBRE TODOS NUESTROS PRODUCTOS</p>
            <button className="bg-gradient-to-b from-blue-900 to-gray-900 rounded-full flex items-center justify-center w-36 h-10 sm:h-8">
              <p className="text-xl font-bold text-gray-200">IR A TIENDA</p>
            </button>
          </div>
        </div>



        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 ">
          <div className="relative mb-7">
            <img className="w-40 " src={pro0} alt="Producto smart solar" />
            <p className="text-base font-semibold text-blue-900  my-2">Inversor solar 1000 Kwh</p>
            <p className="text-base font-semibold text-blue-900  my-2">s/ 1500.00</p>
            <button className="bg-gradient-to-b from-blue-900 to-gray-900 shadow rounded-full inline-flex items-center justify-center w-36 h-10  my-2">
              <p className="text-xs font-semibold text-gray-100">Añadir al carrito</p>
            </button>
          </div>

          <div className="relative mb-7">
            <img className="w-40 " src={pro1} alt="Producto smart solar" />
            <p className="text-base font-semibold text-blue-900  my-2">Kit solar 2000 Kwh</p>
            <p className="text-base font-semibold text-blue-900  my-2">$2500.00</p>
            <button className="bg-gradient-to-b from-blue-900 to-gray-900 shadow rounded-full inline-flex items-center justify-center w-36 h-10  my-2">
              <p className="text-xs font-semibold text-gray-100">Añadir al carrito</p>
            </button>
          </div>
          <div className="relative mb-7">
            <img className="w-40" src={pro2} alt="Inversor" />
            <p className="text-base font-semibold text-blue-900  my-2">Kit solar 3000 Kwh</p>
            <p className="text-base font-semibold text-blue-900  my-2">$3500.00</p>
            <button className="bg-gradient-to-b from-blue-900 to-gray-900 shadow rounded-full inline-flex items-center justify-center w-36 h-10  my-2">
              <p className="text-xs font-semibold text-gray-100">Añadir al carrito</p>
            </button>
          </div>
          <div className="relative mb-7">
            <img className=" w-40 " src={pro3} alt="Inversor" />
            <p className="text-base font-semibold text-blue-900  my-2">Kit solar 3000 Kwh</p>
            <p className="text-base font-semibold text-blue-900  my-2">$3500.00</p>
            <button className="bg-gradient-to-b from-blue-900 to-gray-900 shadow rounded-full inline-flex items-center justify-center w-36 h-10  my-2">
              <p className="text-xs font-semibold text-gray-100">Añadir al carrito</p>
            </button>
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


      <p class="absolute  text-base font-bold text-gray-500 transform -translate-x-1/2 left-1/2 top-1/6 md:text-lg lg:text-xl">REPRESENTANTES EN EL PERU</p>
      <div class=" mx-auto mt-16 max-w-screen-xl">
        <div class="grid grid-cols-2 gap-28 md:grid-cols-4 lg:grid-cols-4 ">
          <div class="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
            <img class="" src={deye} />
          </div>

          <div class="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
            <img class="" src={trina} />
          </div>

          <div class="col-span-1 flex items-center justify-center md:col-span-2 lg:col-span-1">
            <img class="" src={solis} />
          </div>

          <div class="col-span-1 flex items-center justify-center md:col-span-3 lg:col-span-1">
            <img class="" src={victron} />
          </div>
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


  );
};
export default Inicio;