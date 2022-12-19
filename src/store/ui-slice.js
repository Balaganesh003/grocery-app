import { createSlice } from '@reduxjs/toolkit';

const initialUiState = {
  isMenuOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
