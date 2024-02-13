import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app';
import { Asset, PagedInfo } from 'expo-media-library';

const initialState = {} as PagedInfo<Asset>;

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<PagedInfo<Asset>>) => {
      return (state = action.payload);
    },
  },
});

export const { setList } = listSlice.actions;
export default listSlice.reducer;
export const getList = (state: RootState) => state.list;
