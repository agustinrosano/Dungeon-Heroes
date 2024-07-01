import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { equipItem, unequipItem, clearEquipo } from '../Hooks/EquipoSlice'
import './Equipo.css';

const EquipoComponent = () => {
  const dispatch = useDispatch();
  const equipo = useSelector((state) => state.equipo.equipo);
  const [displayedEquipo, setDisplayedEquipo] = useState(equipo);
  //console.log(equipo)

  useEffect(() => {
    setDisplayedEquipo(equipo);
  }, [equipo]);

  //console.log(displayedEquipo)
  const handleEquipItem = (slot, item) => {
    dispatch(equipItem({ slot, item }));
  };

  const handleUnequipItem = (slot) => {
    dispatch(unequipItem({ slot }));
  };

  const handleClearEquipo = () => {
    dispatch(clearEquipo());
  };

  
  return (
    <div className="equipo-container">
      <div className="equipo-card">
        <h2>Equipo</h2>
        <div className="equipo-grid">
          {Object.keys(displayedEquipo).map((slot) => (
            <div key={slot} className="equipo-slot">
              <p>{slot}</p>
              <span>
                  <button> - </button>
                {displayedEquipo[slot] || 'Vacío'}
              </span>
              {/* <button onClick={() => handleEquipItem(slot, { name: 'Nuevo objeto' })}>Equipar</button>
              <button onClick={() => handleUnequipItem(slot)}>Desequipar</button> */}
            </div>
          ))}
        </div>
        {/* <button onClick={handleClearEquipo}>Desequipar todo</button> */}
      </div>
    </div>
  );
};

export default EquipoComponent;