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
  console.log(inventory)

  useEffect(() => {
    if (drop) {
      console.log('test',drop)
      dispatch(addItemToSlot({ item: drop }));
    }
  },[drop]);

  // Vaciar el slot 
  const handleEmptySlot = (slot) => {
    console.log('test')
    dispatch(emptySlot({ slot }));
  }; 

  const handleClearInventory = () => {
    dispatch(clearInventory());
  };


  const handleEquipItem = (item,index) => {

    console.log('test')

      if (!item) {
          console.log('No hay ningún item en esta posición');
          return; // Salir de la función si no hay item
        }

    if(item.tipo === 'Consumible'){
        //console.log(item)
        if(item.Posicion === 'salud'){
            //console.log('salud')
            dispatch(modifyAttribute({ attribute: 'health', value: item.mas }));
            console.log(index)
            handleEmptySlot(index)

        }else{
            //console.log('mana')
            //console.log(selectedCharacter)
            dispatch(modifyAttribute({ attribute: 'mana', value: item.mas }));
            handleEmptySlot(index)
        }
    } else {
      
     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///-------- Agregamos los Items Equipables al personaje Modificando las stats una vez equipo el item ---------///
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      if (item.Posicion === 'body') {
        
        dispatch(modifyAttribute({ attribute: 'defense', value: item.mas}));
        dispatch(equipItem({item}))
        handleEmptySlot(index)
      } else if (item.Posicion === 'weapon') {
     
        dispatch(modifyAttribute({ attribute: 'attack', value: item.mas }));
        dispatch(equipItem({item}))
        handleEmptySlot(index)

      } else if (item.Posicion === 'weapon2') {
     
        dispatch(modifyAttribute({ attribute: 'attack', value: item.mas }));
        dispatch(equipItem({item}))
        handleEmptySlot(index)

      }else if (item.Posicion === 'head') {

        dispatch(modifyAttribute({ attribute: 'defense', value: item.mas }));
        dispatch(equipItem({item}))
        handleEmptySlot(index)

      }else if (item.Posicion === 'legs') {
      
        dispatch(modifyAttribute({ attribute: 'attack', value: item.mas }));
        dispatch(equipItem({item}))
        handleEmptySlot(index)

      }else if (item.Posicion === 'shield') {
     
        dispatch(modifyAttribute({ attribute: 'attack', value: item.mas }));
        dispatch(equipItem({item}))
        handleEmptySlot(index)

      }else if (item.Posicion === 'bow') {
          dispatch(modifyAttribute({ attribute: 'attack', value: item.mas }));
          dispatch(equipItem({item}))
          handleEmptySlot(index)
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
            <button onClick={()=>handleEquipItem(item, index)} className='span'>
                  {/* {item && item.Nombre? item.Nombre : 'Vacío'} */}
              {item && item.image ? (
                <img src={item.image} alt={item.Nombre} style={{ width: '50px', height: '50px' }} />
              ) : ( 
               
                item && item.Nombre?  <p>{item.Nombre}</p>:<p>'Vacío'</p> )
               
               }
            </button>
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


// return (
//   <div className="inventory-container">
//     <div className="inventory-card">
//       <h2>Inventario</h2>
//       <div className="inventory-grid">
//         {inventory.map((item, index) => (
//           <div key={index} className="inventory-slot">
//             <button onClick={() => handleEquipItem(item, index)} className='span'>
//               {item && item.img ? (
//                 <img src={item.image.img} alt={item.Nombre} style={{ width: '50px', height: '50px' }} />
//               ) : (
//                 'Vacío'
//               )}
//             </button>
//             {/* <button onClick={() => handleEmptySlot(`slot${index + 1}`)}>Eliminar Objeto</button> */}
//           </div>
//         ))}
//       </div>
//       <button onClick={handleClearInventory}>Clear</button>
//     </div>
//   </div>
// );
// };

// export default InventoryComponent;