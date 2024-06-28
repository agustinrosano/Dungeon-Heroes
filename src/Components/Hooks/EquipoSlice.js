import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  equipo: {
    head: null,
    body: null,
    legs: null,
    weapon: null,
    weapon2: null,
    shield: null,
    bow:null,
  }
};

const equipoSlice = createSlice({
  name: 'equipo',
  initialState,
  reducers: {
    equipItem: (state, action) => {
      const { slot, item } = action.payload;
      state.equipo[slot] = item;
    },
    unequipItem: (state, action) => {
      const { slot } = action.payload;
      state.equipo[slot] = null;
    },
    clearEquipo: (state) => {
      state.equipo = initialState.equipo;
    },
  }
});

export const { equipItem, unequipItem, clearEquipo } = equipoSlice.actions;
export default equipoSlice.reducer;