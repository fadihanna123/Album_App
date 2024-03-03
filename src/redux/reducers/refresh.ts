import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app';

const initialState: boolean = false;

export const refreshSlice = createSlice({
  name: 'refresh',
  initialState,
  reducers: {
    setRefresh: (state, action: PayloadAction<boolean>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setRefresh } = refreshSlice.actions;
export default refreshSlice.reducer;
export const getRefresh = (state: RootState) => state.refresh;
