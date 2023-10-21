import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../app';
import { Asset } from 'expo-media-library';

const initialState = {} as Asset | null;

export const selectedPhotoSlice = createSlice({
  name: 'selectedPhoto',
  initialState,
  reducers: {
    setSelectedPhoto: (state, action: PayloadAction<Asset | null>) => {
      return (state = action.payload);
    },
  },
});

export const { setSelectedPhoto } = selectedPhotoSlice.actions;
export default selectedPhotoSlice.reducer;
export const getSelectedPhoto = (state: RootState) => state.selectedPhoto;
