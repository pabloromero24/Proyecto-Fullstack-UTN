import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useState } from 'react';

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./components/pages/HomePage";
import NosotrosPage from "./components/pages/NosotrosPage";
import ProductosPage from "./components/pages/ProductosPage";
import ContactoPage from "./components/pages/ContactoPage";

// import './App.css';

function App() {

  const [categoria, setCategoria] = useState('');

  const handleCategoriaChange = (nuevaCategoria) => {
    setCategoria(nuevaCategoria);
  };

  return (
    <div className="App"> 
    <Header/> 
     <BrowserRouter> 
        <Nav/>                                
        <Routes>
          <Route path="/" element={<HomePage/>} />                
          <Route path="/Nosotros" element={<NosotrosPage/>} />
          <Route path="/Productos" element={<ProductosPage handleCategoriaChange={handleCategoriaChange} categoria={categoria}  />} />          
          <Route path="/Contacto" element={<ContactoPage/>} />
        </Routes>                 
     </BrowserRouter>
    <Footer/>                   
    </div>
  );
}

export default App;
