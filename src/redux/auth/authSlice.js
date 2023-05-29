import { createSlice } from '@reduxjs/toolkit';
import { initAuth } from 'redux/initial';
import { register, logIn, logOut, refreshUser } from './authOperations';
import {
  handleRegister,
  handleLogIn,
  handleLogOut,
  handleRefreshPending,
  handleRefreshSuccess,
  handleRefreshError,
} from './authHandlers';

const authSlice = createSlice({
  name: 'auth',
  initialState: initAuth,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegister)
      .addCase(logIn.fulfilled, handleLogIn)
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.fulfilled, handleRefreshSuccess)
      .addCase(refreshUser.rejected, handleRefreshError);
  },
});

export const authReducer = authSlice.reducer;
