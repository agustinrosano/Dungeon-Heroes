import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCharacter: null
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    selectCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
    },
    modifyAttribute: (state, action) => {
      console.log(state, action)
      const { attribute, value } = action.payload;
      if (state.selectedCharacter && state.selectedCharacter[attribute] !== undefined) {
        state.selectedCharacter[attribute] += value;
        
      }
    }
  }
});

export const { selectCharacter, modifyAttribute } = characterSlice.actions;
export default characterSlice.reducer;