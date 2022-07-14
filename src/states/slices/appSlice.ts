import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AppState {
  version: number;
}

const initialState: AppState = {
  version: 1,
};

const setVersion = (state: AppState, action: PayloadAction<number>) => {
  state.version = action.payload;
};

export const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setVersion,
  },
});

export const selectAppVersion = (state: RootState) => state.app.version;

export { actions as appActions };
export default reducer;
