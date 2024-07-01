import React from 'react';
import { useSelector } from 'react-redux';
import './CardPj.css'; // Asegúrate de crear y definir los estilos en este archivo

const CardPj = () => {
  const selectedCharacter = useSelector((state) => state.character.selectedCharacter);

  if (!selectedCharacter) {
    return <div>No character selected</div>;
  }

  return (
    <div className="card-pj">
      <img src={selectedCharacter.img} alt={selectedCharacter.name} className="character-img" />
      <h2>{selectedCharacter.name}</h2>
      <p>Salud: {selectedCharacter.health}</p>
      <p>Mana: {selectedCharacter.mana}</p>
      <p>Ataque: {selectedCharacter.attack}</p>
      <p>Defensa: {selectedCharacter.defense}</p>
      <div className="abilities-container">
        {/* <h3>Habilidades:</h3>  */}
        {Object.keys(selectedCharacter.abilities).map((key) => (
          <div key={key} className="ability">
            <p><strong>{selectedCharacter.abilities[key].NameHab}</strong></p>
            {selectedCharacter.abilities[key].attack && <p>Ataque: {selectedCharacter.abilities[key].attack}</p>}
            {selectedCharacter.abilities[key].defense && <p>Defensa: {selectedCharacter.abilities[key].defense}</p>}
            {selectedCharacter.abilities[key].curar && <p>Curación: {selectedCharacter.abilities[key].curar}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPj;