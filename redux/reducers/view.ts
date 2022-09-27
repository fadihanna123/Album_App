import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app';

const initialState: boolean = false;

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    },
  },
});

export const { setView } = viewSlice.actions;
export default viewSlice.reducer;
export const getView = (state: RootState) => state.view;
