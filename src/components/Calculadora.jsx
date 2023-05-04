import React from 'react';
import background from '../assets/background.png'
import logoblanco from '../assets/logoblanco.png'
import BannerCalculadora from '../assets/BannerCalculadoraSolar1.png'
import PSK from '../assets/PanelesSolaresKit.png'
import Banner from '../assets/Banner.png'
import deye from '../assets/deye.png'
import trina from '../assets/trina.webp'
import solis from '../assets/solis.png'
import victron from '../assets/victron.png'
import pro0 from '../assets/inversor.png'
import pro1 from '../assets/Bateria.png'
import pro2 from '../assets/kitsolart.png'
import pro3 from '../assets/Paneles-solares-Kit-solar-Victron-3650-wh.png'



const Calculadora = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#F2EFE7] text-gray-300'>
      <div className="flex  flex-col justify-center items-center w-full min-h-screen">
        <img className="absolute inset-0 object-cover w-full h-auto  md:h-auto" src={BannerCalculadora} alt="BannerCalculadora" /> 
        <div className='mx-auto  mt-16'>
        <p className="text-gray-500  font-semibold text-2xl text-center mb-4 md:mb-60">El primer paso para armar el KIT SOLAR ideal es conocer cuánto será tu consumo en KwH por día.<br></br>
          Usa nuestra calculadora para descubrir el KIT SOLAR que se adecue a tu proyecto.</p>
          </div>
        <p className="text-gray-500 font-semibold text-2xl text-center mb-4 md:mb-8 mt-4 md:mt-8">El resultado es un estimado del total de KwH según los artefactos ingresados, el rendimiento de los kits
          puede variar según el uso y capacidad de los mismos.</p>
        <div className="Fotocasas 3D bg-yellow-600 w-full h-48 md:h-64"></div>
        <div className="Rectangle11 flex items-center justify-center py-2 px-4 md:px-16 bg-black w-full">
          <div className="flex space-x-5">
            <div className="Ellipse1 w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full" />
            <p className="1 text-xl">1</p>
            <p className="PanelesSolares text-xl text-gray-300">Paneles<br className="hidden md:block" />Solares</p>
            <div className="Ellipse2 w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full" />
            <p className="2 text-xl">2</p>
            <p className="Controladorde carga text-xl text-gray-300">Controlador<br className="hidden md:block" />de carga</p>
            <div className="Ellipse3 w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full" />
            <p className="3 text-xl">3</p>
            <p className="InversorSolar text-xl text-gray-300">Inversor<br className="hidden md:block" />Solar</p>
            <div className="Ellipse4 w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full" />
            <p className="4 text-xl">4</p>
            <p className="BateríasSolares text-xl text-gray-300">Baterías<br className="hidden md:block" />Solares</p>
            <div className="Ellipse5 w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full" />
            <p className="5 text-xl">5</p>
            <p className="CajaEléctrica text-xl text-gray-300">Caja <br className="hidden md:block" />Eléctrica</p>
          </div>
        </div>
        <div className=' bg-[#F2EFE7]'>
          <div className='bg-[#F2EFE7] flex items-center justify-center'>
            <div className="flex flex-col sm:flex-row">
              <p className="text-2xl font-bold text-blue-900 w-60 sm:w-auto right-6 text-center mb-4 sm:mb-0">ESTOS SON LOS KIT SOLARES, RECOMENDADOS PARA TI</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 ">
            <div className="relative mb-7">
              <img className="w-40 " src={PSK} alt="Producto smart solar" />
              <p className="text-base font-semibold text-blue-900  my-2">Kit solar 1000 Kwh</p>
              <p className="text-base font-semibold text-blue-900  my-2">s/ 1500.00</p>
              <button className="bg-gradient-to-b from-blue-900 to-gray-900 shadow rounded-full inline-flex items-center justify-center w-36 h-10  my-2">
                <p className="text-xs font-semibold text-gray-100">Añadir al carrito</p>
              </button>
            </div>

            <div className="relative mb-7">
              <img className="w-40 " src={PSK} alt="Producto smart solar" />
              <p className="text-base font-semibold text-blue-900  my-2">Kit solar 2000 Kwh</p>
              <p className="text-base font-semibold text-blue-900  my-2">$2500.00</p>
              <button className="bg-gradient-to-b from-blue-900 to-gray-900 shadow rounded-full inline-flex items-center justify-center w-36 h-10  my-2">
                <p className="text-xs font-semibold text-gray-100">Añadir al carrito</p>
              </button>
            </div>
            <div className="relative mb-7">
              <img className="w-40" src={PSK} alt="Inversor" />
              <p className="text-base font-semibold text-blue-900  my-2">Kit solar 3000 Kwh</p>
              <p className="text-base font-semibold text-blue-900  my-2">$3500.00</p>
              <button className="bg-gradient-to-b from-blue-900 to-gray-900 shadow rounded-full inline-flex items-center justify-center w-36 h-10  my-2">
                <p className="text-xs font-semibold text-gray-100">Añadir al carrito</p>
              </button>
            </div>
            <div className="relative mb-7">
              <img className=" w-40 " src={PSK} alt="Inversor" />
              <p className="text-base font-semibold text-blue-900  my-2">Kit solar 4000 Kwh</p>
              <p className="text-base font-semibold text-blue-900  my-2">$4500.00</p>
              <button className="bg-gradient-to-b from-blue-900 to-gray-900 shadow rounded-full inline-flex items-center justify-center w-36 h-10  my-2">
                <p className="text-xs font-semibold text-gray-100">Añadir al carrito</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <img class="Bannerinicio2 relative w-full h-auto" src={Banner} alt="Banner Image" />
        <p class="absolute text-2xl font-bold text-gray-200 left-5 md:left-20 top-7 md:top-17">DESEAS MEJORAR EL KIT SOLAR ?</p>
        <div class="Rectangle7 absolute bg-gradient-to-b from-white to-gray-200 shadow rounded-full w-36 h-6 left-1/2 transform -translate-x-1/2 top-9 md:top-19"></div>
        <p class="Reservatu cita absolute text-base font-semibold text-blue-900 w-32 h-6 left-1/2 transform -translate-x-1/2 top-11 md:top-21">Reserva tu cita</p>
      </div>

      <div className="  bg-[#F2EFE7] flex justify-center items-center space-x-6 md:space-x-10 lg:space-x-20 mx-auto" style={{ maxWidth: "863.15px", height: "114px" }}>
        <div className="Tienda relative w-36 h-24">
          <p className="DESCUBRELA TIENDA ON LINE absolute right-0 bottom-0 text-xl font-bold text-blue-900">
            DESCUBRE<br />LA TIENDA<br />ON LINE
          </p>
          <div className="Rectangle6 absolute right-0 bottom-0 bg-gradient-to-b from-blue-900 to-gray-900 rounded-full w-32 h-7 flex items-center justify-center">
            <p className="IRA TIENDA text-base font-bold text-gray-200">IR A TIENDA</p>
          </div>
        </div>
        <img className="inversor w-20 h-28" src={pro0} />
        <img className="Batería-nimac-12v-100ah-2 w-28 h-5/6" src={pro1} />
        <img className="PRODUCTO-Smart-solar-600x600 w-20 h-16" src={pro2} />
        <img className="Paneles-solares-Kit-solar-Victron-3650-wh w-24 h-24" src={pro3} />
      </div>

      <div class=" bg-[#F2EFE7] mx-auto mt-16 max-w-screen-xl">
      <p className="text-gray-500 font-semibold text-2xl text-center mb-4 md:mb-8 mt-4 md:mt-8">REPRESENTANTES EN EL PERU</p>
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

export default Calculadora;
