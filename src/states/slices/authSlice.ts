import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AppState {
  isAuth: boolean;
}

const initialState: AppState = {
  isAuth: false,
};

const setIsAuth = (state: AppState, action: PayloadAction<boolean>) => {
  state.isAuth = action.payload;
};

export const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth,
  },
});

export const selectAppVersion = (state: RootState) => state.app.version;

export { actions as authActions };
export default reducer;
