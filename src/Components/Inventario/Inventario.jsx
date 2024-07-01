import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToSlot, emptySlot, clearInventory } from '../Hooks/inventorySlice';
import { equipItem, unequipItem, clearEquipo } from '../Hooks/EquipoSlice'
import {modifyAttribute} from '../Hooks/characterSlice'
import './Inventario.css';


const InventoryComponent = ({ drop }) => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory.inventory);
  const equipo = useSelector((state) => state.equipo.equipo);
  const selectedCharacter = useSelector((state) => state.character.selectedCharacter);
  //console.log(inventory)

  useEffect(() => {
    if (drop) {
      dispatch(addItemToSlot({ item: drop }));
    }
  },[drop]);

  // Vaciar el slot 
  const handleEmptySlot = (slot) => {
    dispatch(emptySlot({ slot }));
  }; 

  const handleClearInventory = () => {
    dispatch(clearInventory());
  };


  const handleEquipItem = (item) => {
    console.log(item)
    if(item.tipo === 'Consumible'){
        //console.log(item)
        if(item.Posicion === 'salud'){
            console.log('salud')
            dispatch(modifyAttribute({ attribute: 'health', value: item.mas }));
            handleEmptySlot(item)

        }else{
            console.log('mana')
            console.log(selectedCharacter)
            dispatch(modifyAttribute({ attribute: 'mana', value: item.mas }));
        }
    } else {
      
     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///-------- Agregamos los Items Equipables al personaje Modificando las stats una vez equipo el item ---------///
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      if (item.Posicion === 'body') {
        console.log('test body')
        console.log(item)
        dispatch(modifyAttribute({ attribute: 'defense', value: item.mas}));
        dispatch(equipItem({item}))
      } else if (item.Posicion === 'weapon') {
      console.log('weapon')
        dispatch(modifyAttribute({ attribute: 'attack', value: item.mas }));
        dispatch(equipItem({item}))

      } else if (item.Posicion === 'weapon2') {
     
        dispatch(modifyAttribute({ attribute: 'attack', value: item.mas }));
        dispatch(equipItem({item}))

      }else if (item.Posicion === 'head') {

        dispatch(modifyAttribute({ attribute: 'defense', value: item.mas }));
        dispatch(equipItem({item}))

      }else if (item.Posicion === 'legs') {
      
        dispatch(modifyAttribute({ attribute: 'attack', value: item.mas }));
        dispatch(equipItem({item}))

      }else if (item.Posicion === 'shield') {
     
        dispatch(modifyAttribute({ attribute: 'attack', value: item.mas }));
        dispatch(equipItem({item}))

      }else if (item.Posicion === 'bow') {
     
          dispatch(modifyAttribute({ attribute: 'attack', value: item.mas }));
          dispatch(equipItem({item}))
        }
    }
  };


  


 return (
  <div className="inventory-container">
    <div className="inventory-card">
      <h2>Inventario</h2>
      <div className="inventory-grid">
        {inventory.map((item, index) => (
          <div key={index} className="inventory-slot">
            <button onClick={()=>handleEquipItem(item)} className='span'>{item && item.Nombre ? item.Nombre : 'Vacío'}</button>
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