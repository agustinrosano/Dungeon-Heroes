import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { equipItem, unequipItem, clearEquipo } from '../Hooks/EquipoSlice'
import './Equipo.css';

const EquipoComponent = () => {
  const dispatch = useDispatch();
  const equipo = useSelector((state) => state.equipo.equipo);

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
          {Object.keys(equipo).map((slot) => (
            <div key={slot} className="equipo-slot">
              <span>{slot}: {equipo[slot]?.name || 'Vacío'}</span>
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