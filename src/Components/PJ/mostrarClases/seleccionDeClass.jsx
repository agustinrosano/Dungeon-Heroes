import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import playerClass from '../../Class/PlayersClass';
import { selectCharacter } from '../../Hooks/characterSlice';
import { useNavigate } from 'react-router-dom';
import '../mostrarClases/seleccionDeClass.css';

const SeleccionDeClasse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleSelect = (character) => {
    setSelected(character);
  };

  const handleConfirm = () => {
    if (selected) {
      dispatch(selectCharacter(selected));
      navigate('/mapa');
    }
  };

  return (
    <>
      <div className='contenedor-selector'>
        <h1>Clases de Personajes</h1>
        <div className='card-selector'>
          {playerClass.map((playerClass, index) => (
            <div
              className={`card ${selected === playerClass ? 'selected' : ''}`}
              key={index}
              onClick={() => handleSelect(playerClass)}
            >
              <img src={playerClass.img} alt="" srcset="" />
              <h2>{playerClass.name}</h2>
              <div>
                <h3>Habilidades:</h3>
                <ul>
                  {Object.entries(playerClass.abilities).map(([key, ability], index) => (
                    <li key={index}>
                       <p> {ability.NameHab}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <p>Salud: {playerClass.health}</p>
              <p>Mana: {playerClass.mana}</p>
              <p>Ataque: {playerClass.attack}</p>
              <p>Defensa: {playerClass.defense}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='container-button-select'>
        {selected && (
          <button className='confirm-button' onClick={handleConfirm}>
            Confirmar Selección
          </button>
        )}
      </div>
    </>
  );
};

export default SeleccionDeClasse;