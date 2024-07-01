import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  equipo: {
    head: null,
    body: null,
    legs: null,
    weapon: null,
    weapon2: null,
    shield: null,
    bow: null,
  }
};

const equipoSlice = createSlice({
  name: 'equipo',
  initialState,
  reducers: {
    equipItem: (state, action) => {
      const { item } = action.payload;
      if (state.equipo.hasOwnProperty(item.Posicion)) {
        state.equipo[item.Posicion] = item.Nombre;
      } else {
        console.warn(`Unknown position: ${item.Posicion}`);
      }
    },
    unequipItem: (state, action) => {
      const { slot } = action.payload;
      if (state.equipo.hasOwnProperty(slot)) {
        state.equipo[slot] = null;
      } else {
        console.warn(`Unknown slot: ${slot}`);
      }
    },
    clearEquipo: (state) => {
      state.equipo = initialState.equipo;
    },
  }
});

export const { equipItem, unequipItem, clearEquipo } = equipoSlice.actions;
export default equipoSlice.reducer;