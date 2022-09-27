import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Album } from '../../models';
import { RootState } from '../app';

const initialState = {} as Album | null;

export const selectedPhotoSlice = createSlice({
  name: 'selectedPhoto',
  initialState,
  reducers: {
    setSelectedPhoto: (state, action: PayloadAction<Album | null>) => {
      return (state = action.payload);
    },
  },
});

export const { setSelectedPhoto } = selectedPhotoSlice.actions;
export default selectedPhotoSlice.reducer;
export const getSelectedPhoto = (state: RootState) => state.selectedPhoto;
