import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SeleccionDeClasse from './Components/PJ/mostrarClases/seleccionDeClass';
import { Map } from './Components/Mapa/Map';
import  Inventario  from './Components/Inventario/Inventario';
import  Combate  from './Components/PJ/Combate/Combate';
import Dungeon1 from './Components/Mapa/Dungeons/d1/dungeon1';
import Dungeon2 from './Components/Mapa/Dungeons/d2/dungeon2';
import Dungeon3 from './Components/Mapa/Dungeons/d3/dungeon3';
import { BannerPj } from './Components/PJ/bannerPersonaje/BannerPj';

function App() {
  return (
    <div className='contenedor-padre'>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<SeleccionDeClasse />} />
            <Route path="/mapa" element={<Map />} />
            <Route path="/combate" element={<Combate/>} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/dungeon/1" element={<Dungeon1 />} />
            <Route path="/dungeon/2" element={<Dungeon2 />} />
            <Route path="/dungeon/3" element={<Dungeon3 />} />
          </Routes>
          {/* <BannerPj/> */}
        </div>
    </Router>
  </div>
  );
}

export default App;
