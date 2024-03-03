import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app';
import { Asset, PagedInfo } from 'expo-media-library';

const initialState: PagedInfo<Asset> = {
  assets: [],
  endCursor: '',
  hasNextPage: false,
  totalCount: 0,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<PagedInfo<Asset>>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setList } = listSlice.actions;
export default listSlice.reducer;
export const getList = (state: RootState) => state.list;
