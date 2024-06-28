import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inventory: Array(9).fill(null), // Array inicial con 9 elementos, todos null
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    emptySlot: (state, action) => {
      const { slot } = action.payload;
      if (state.inventory[slot]) {
        state.inventory[slot] = null;
      }
    },
    addItemToSlot: (state, action) => {
      const { item } = action.payload;
      const emptySlotIndex = state.inventory.findIndex(slot => slot === null);
      if (emptySlotIndex !== -1) {
        state.inventory[emptySlotIndex] = item;
      }
    },
    clearInventory: (state) => {
      state.inventory = initialState.inventory;
    },
  }
});

export const { emptySlot, addItemToSlot, clearInventory } = inventorySlice.actions;
export default inventorySlice.reducer;