import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    username: '',
  },
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload.username;
    },
    logout: (state) => {
      state.user = {
        username: '',
      };
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
