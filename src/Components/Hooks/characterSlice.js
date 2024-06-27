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
    }
  }
});

export const { selectCharacter } = characterSlice.actions;
export default characterSlice.reducer;