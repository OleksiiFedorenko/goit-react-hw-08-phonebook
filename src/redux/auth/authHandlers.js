export const handleRegister = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLogIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const handleRefreshPending = state => {
  state.isRefreshing = true;
};

export const handleRefreshSuccess = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleRefreshError = state => {
  state.isRefreshing = false;
};
