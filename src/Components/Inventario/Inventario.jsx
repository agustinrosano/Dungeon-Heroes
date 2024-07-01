import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToSlot, emptySlot, clearInventory } from '../Hooks/inventorySlice';
import './Inventario.css';

const InventoryComponent = ({ drop }) => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory.inventory);

  //console.log(inventory)

  useEffect(() => {
    if (drop) {
      dispatch(addItemToSlot({ item: drop }));
    }
  }, [drop]);

  const handleEmptySlot = (slot) => {
    dispatch(emptySlot({ slot }));
  };

  const handleClearInventory = () => {
    dispatch(clearInventory());
  };


 return (
  <div className="inventory-container">
    <div className="inventory-card">
      <h2>Inventario</h2>
      <div className="inventory-grid">
        {inventory.map((item, index) => (
          <div key={index} className="inventory-slot">
            <button className='span'>{item && item.Nombre ? item.Nombre : 'Vacío'}</button>

            {/* <button onClick={() => handleEmptySlot(`slot${index + 1}`)}>Eliminar Objeto</button> */}
          </div>
        ))}
      </div>
       <button onClick={handleClearInventory}>Clear</button> 
    </div>
  </div>
);
}

export default InventoryComponent;