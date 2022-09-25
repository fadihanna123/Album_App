import { combineReducers } from 'redux';

import { listReducer } from './list';
import { loadingReducer } from './loading';
import { refreshReducer } from './refresh';
import { selectedPhotoReducer } from './selectedPhoto';
import { viewReducer } from './view';

export const allReducers = combineReducers({
  listReducer,
  viewReducer,
  loadingReducer,
  refreshReducer,
  selectedPhotoReducer,
});
