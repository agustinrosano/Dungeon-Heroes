import React from 'react';
import { useNavigate } from 'react-router-dom';
import map1 from '../assets/map1.jpg'
import './Map.css'
import { useSelector } from 'react-redux';
import { BannerPj } from '../PJ/bannerPersonaje/BannerPj';
import InventoryComponent from '../Inventario/Inventario';
import EquipoComponent from '../Equipo/Equipo';
import CardPj from '../PJ/cardPj/CardPj';

export const Map = () => {
    const navigate = useNavigate();

    const irADungeon = (dungeonNumber) => {
      navigate(`/dungeon/${dungeonNumber}`);
    };
  
    const selectedCharacter = useSelector((state) => state.character.selectedCharacter);
    //console.log(selectedCharacter)
    return (
      <>
        <div className="map-container">
          <h1>Mapa</h1>
          <div className="dungeon-cards">
            <div className="dungeon-card" onClick={() => irADungeon(1)}>
              <h2>Dungeon 1</h2>
            </div>
            <div className="dungeon-card" onClick={() => irADungeon(2)}>
              <h2>Dungeon 2</h2>
            </div>
            <div className="dungeon-card" onClick={() => irADungeon(3)}>
              <h2>Dungeon 3</h2>
            </div>
          </div>
        </div>
      <div className='container-bag'> 
        <CardPj/> 
        <EquipoComponent/> 
        <InventoryComponent/>
      </div>
      </>
    );
  };
  