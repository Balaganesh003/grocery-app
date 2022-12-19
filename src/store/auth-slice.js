import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      console.log(state.user);
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
