import { combineReducers } from 'redux';

import { listReducer } from './list';
import { loadingReducer } from './loading';
import { photoReducer } from './photo';
import { refreshReducer } from './refresh';
import { viewReducer } from './view';

export const allReducers = combineReducers({
  listReducer,
  viewReducer,
  loadingReducer,
  photoReducer,
  refreshReducer,
});
