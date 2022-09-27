import { configureStore } from '@reduxjs/toolkit';

import listReducer from '../reducers/list';
import loadingReducer from '../reducers/loading';
import refreshReducer from '../reducers/refresh';
import selectedPhotoReducer from '../reducers/selectedPhoto';
import viewReducer from '../reducers/view';

export const store = configureStore({
  reducer: {
    list: listReducer,
    view: viewReducer,
    loading: loadingReducer,
    refresh: refreshReducer,
    selectedPhoto: selectedPhotoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
