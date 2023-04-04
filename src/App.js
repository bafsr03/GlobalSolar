import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Calculadora from "./components/Calculadora";
import Proyectos from "./components/Proyectos";
import Tienda from "./components/Tienda";
import Contactos from "./components/Contactos";
import Envios from "./components/Envios";
import Terminos from "./components/Terminos";
import Recervas from "./components/Recervas";
import Inicio from "./components/Inicio";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/calculadora" element={<Calculadora/>}/>
        <Route path="/proyectos" element={<Proyectos/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
        <Route path="/contactos" element={<Contactos/>}/>
        <Route path="/envios" element={<Envios/>}/>
        <Route path="/terminos" element={<Terminos/>}/>
        <Route path="/recervas" element={<Recervas/>}/>
      </Routes>
    </>
  );
}

export default App;
