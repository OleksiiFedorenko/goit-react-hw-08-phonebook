import { createSlice } from '@reduxjs/toolkit';
import { initAuth } from 'redux/initial';
import { register, logIn, logOut, refreshUser } from './authOperations';

const handleRegister = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleLogIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshPending = state => {
  state.isRefreshing = true;
};

const handleRefreshSuccess = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRefreshError = state => {
  state.isRefreshing = false;
};

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
    //   .addMatcher(isAnyOf(...thunksStatuses('pending')), handlePending)
    //   .addMatcher(isAnyOf(...thunksStatuses('fulfilled')), handleSuccess)
    //   .addMatcher(isAnyOf(...thunksStatuses('rejected')), handleError);
  },
});

export const authReducer = authSlice.reducer;
