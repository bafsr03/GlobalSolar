import React, { useState } from 'react';
import background from '../assets/background.png';
import logoblanco from '../assets/logoblanco.png';
import bannerTienda from '../assets/BannerTienda.png';
import Banner from '../assets/Banner.png'
import deye from '../assets/deye.png'
import trina from '../assets/trina.webp'
import solis from '../assets/solis.png'
import victron from '../assets/victron.png'

const Tienda = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 150,
      image: 'https://via.placeholder.com/150',
      category: 'Categoria1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 450,
      image: 'https://via.placeholder.com/150',
      category: 'Categoria2',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 700,
      image: 'https://via.placeholder.com/150',
      category: 'Categoria3',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 950,
      image: 'https://via.placeholder.com/150',
      category: 'Categoria4',
    },
  ];
  const categories = Array.from(new Set(products.map((product) => product.category)));
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [productMark, setProductMark] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceRange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter products based on the selected product mark as well
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price <= priceRange &&
        (productMark === '' || product.mark === productMark)
    );
    setFilteredProducts(filtered);
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterProducts(searchTerm, priceRange, category);
  };

  const filterProducts = (search, price, category) => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        product.price <= price &&
        (category === 'All' || product.category === category)
    );
    setFilteredProducts(filtered);
  };
  const handleProductMarkChange = (e) => {
    setProductMark(e.target.value);
  };
  return (
    
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#F2EFE7]'>
      <div className="relative">
        <img className="w-full h-full object-cover" src={bannerTienda} alt="BannerCalculadora" /> {/* Update the classes for the image */}
        
      </div>
      <div className="Productodestacado relative w-full md:w-auto md:h-auto md:max-w-screen-md lg:max-w-screen-xl">
  <p class="KITMAS PEDIDO absolute w-72 h-10 top-0 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-center text-blue-900 md:static md:w-auto md:h-auto md:text-4xl">KIT MAS PEDIDO</p>
  <p class="s/1200 absolute w-36 h-9 text-3xl font-bold text-center text-blue-900 md:static md:w-auto md:h-auto md:text-4xl md:mt-4 md:ml-2">S/ 1200</p>
  <p class="KITDEYE 1000 KwH absolute w-full h-12 text-4xl font-medium text-center text-blue-900 md:static md:w-auto md:h-auto md:text-5xl md:mt-8">KIT DEYE 1000 KwH</p>
  <p class="4Paneles Deye + Inversor + Controlador de carga + 4 Baterías absolute w-full h-10 text-base font-medium text-center text-blue-900 md:static md:w-auto md:h-auto md:text-lg md:mt-16">4 Paneles Deye + Inversor + Controlador de carga + 4 Baterías</p>
  <img class="Paneles-solares-Kit-solar-Victron-3650-wh absolute w-48 h-48 right-0 bottom-0 md:static md:w-auto md:h-auto md:mt-4 md:ml-4" src="https://via.placeholder.com/192x192"/>
  <div class="Rectangle8 absolute w-32 h-6 bg-gradient-to-b from-white to-gray-200 shadow rounded-full md:static md:w-auto md:h-auto md:mt-8 md:ml-2"></div>
  <p class="Añadira carrito absolute w-28 h-6 text-sm font-semibold text-blue-900 md:static md:w-auto md:h-auto md:text-base md:mt-8 md:ml-4">Añadir a carrito</p>
  <div class="Rectangle9 absolute inline-flex items-center justify-center w-32 h-6 pl-5 pr-4 pt-0.5 pb-1 bg-gradient-to-b from-white to-gray-200 shadow rounded-full md:static md:w-auto md:h-auto md:ml-8">
    <p class="Vermás Kits flex-1 h-full text-sm font-semibold text-blue-900">Ver más Kits</p>
  </div>
</div>
 
<div className="container mx-auto px-4 mt-16">
    <h1 className="text-3xl font-bold my-4">Lista de Productos</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="col-span-4 md:col-span-1">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Categorias</h2>
          <ul className="flex flex-wrap">
            {['All', ...categories].map((category) => (
              <li key={category} className="mr-2 mb-2">
                <button
                  onClick={() => handleCategorySelect(category)}
                  className={`px-4 py-2 rounded ${
                    selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Place the search box inside the category section */}
        <div className="bg-white rounded p-4 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Buscar Producto</h2>
        <form onSubmit={handleSubmit}>
          {/* Your existing search box */}
          {/* Add the price range bar */}
          <div className="mb-4">
            <label htmlFor="priceRange" className="block text-gray-700 mb-2">
              Por Precio: S/.{priceRange}
            </label>
            <input
              type="range"
              id="priceRange"
              name="priceRange"
              min="0"
              max="1000"
              value={priceRange}
              onChange={handlePriceRange}
              className="w-full"
            />
          </div>
          {/* Add the dropdown for product mark */}
          <div className="mb-4">
            <label htmlFor="mark" className="block text-gray-700 mb-2">
              Marca:
            </label>
            <select
              id="mark"
              name="mark"
              value={productMark}
              onChange={handleProductMarkChange}
              className="w-full bg-white border border-gray-300 rounded py-2 px-3 text-gray-700"
            >
              <option value="">Todos</option>
              {/* Add your product marks as options here */}
              <option value="Mark 1">Marca 1</option>
              <option value="Mark 2">Marca 2</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded">
            Buscar
          </button>
        </form>
      </div>
    </div>
      <div className="col-span-4 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded p-4 shadow-md">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-500">Precio: s/.{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="relative mx-auto mt-16">
  <img
    className="w-full h-full object-cover"
    src={Banner}
    alt="Banner"
  />
  <p className="absolute left-[172px] top-0 text-2xl font-semibold text-gray-200 whitespace-pre-line">
    Te asesoramos para que encuentres
    <br />
    el producto ideal para tu proyecto solar.
  </p>
  <div className="absolute left-[674px] top-[19px] w-36 h-6 bg-gradient-to-b from-white to-gray-200 shadow rounded-full" />
  <p className="absolute left-[684px] top-[21px] w-32 h-6 text-base font-semibold text-blue-900">
    Reserva tu cita
  </p>
</div>

<div class=" mx-auto mt-16 max-w-screen-xl">
<p class="absolute  text-base font-bold text-gray-500 transform -translate-x-1/2 left-1/2 top-1/6 md:text-lg lg:text-xl">REPRESENTANTES EN EL PERU</p>
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

<div class=' mx-auto  mt-16'>
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
    </div>
  );
};

export default Tienda;
