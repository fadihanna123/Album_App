import { AnyAction } from 'redux';

import { SET_LIST, SET_LOADING, SET_PHOTO, SET_REFRESH, SET_VIEW } from '../../utils/constants';

export const setPhoto = (payload: string): AnyAction => {
  return { type: SET_PHOTO, payload };
};

export const setList = (payload: { assets: [{}] }) => {
  return { type: SET_LIST, payload };
};

export const setLoading = (payload: boolean): AnyAction => {
  return { type: SET_LOADING, payload };
};

export const setView = (payload: boolean): AnyAction => {
  return { type: SET_VIEW, payload };
};

export const setRefresh = (payload: boolean): AnyAction => {
  return { type: SET_REFRESH, payload };
};
