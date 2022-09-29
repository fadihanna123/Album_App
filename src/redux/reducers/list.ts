import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app';

const initialState = {} as { assets: [Record<string, never>] };

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (
      state,
      action: PayloadAction<{ assets: [Record<string, never>] }>
    ) => {
      return (state = action.payload);
    },
  },
});

export const { setList } = listSlice.actions;
export default listSlice.reducer;
export const getList = (state: RootState) => state.list;
