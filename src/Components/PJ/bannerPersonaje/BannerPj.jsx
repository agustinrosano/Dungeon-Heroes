import React from 'react'
import { useSelector } from 'react-redux';
import './BannerPj.css';
import EquipoComponent from '../../Equipo/Equipo';
import InventoryComponent from '../../Inventario/Inventario';

export const BannerPj = () => {

    const selectedCharacter = useSelector((state) => state.character.selectedCharacter);

  if (!selectedCharacter) {
    return null; // No mostrar nada si no hay personaje seleccionado
  }

  return (
    <div className="banner-container">
      <p>{selectedCharacter.name}</p>
      <div className="abilities-container">
        {Object.entries(selectedCharacter.abilities).map(([key, ability], index) => (
          <button key={index} className="ability-button">
            {ability.NameHab}
          </button>
        ))}
      </div>
      <p>Salud: {selectedCharacter.health}</p>
      <p>Ataque: {selectedCharacter.attack}</p>
      <p>Defensa: {selectedCharacter.defense}</p>
     
    </div>
  );
};