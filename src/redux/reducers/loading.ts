import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app';

const initialState: boolean = false;

export const loadingSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
export const getLoading = (state: RootState) => state.loading;
