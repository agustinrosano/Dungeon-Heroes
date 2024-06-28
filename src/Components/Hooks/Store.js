import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import inventoryReducer from './inventorySlice';
import EquipoSlice from './EquipoSlice';

const store = configureStore({
  reducer: {
    character: characterReducer,
    inventory: inventoryReducer, 
    equipo: EquipoSlice,
  }
});

export default store;