import { AnyAction } from 'redux';

import { Album } from '../../models';
import {
  SET_LIST,
  SET_LOADING,
  SET_REFRESH,
  SET_SELECTED_PHOTO,
  SET_VIEW,
} from '../../utils/constants';

/**
 * List action.
 *
 * @param payload
 * @returns Object.
 */

export const setList = (payload: { assets: [Record<string, never>] }) => {
  return { type: SET_LIST, payload };
};

/**
 * Loading action.
 *
 * @param payload
 * @returns AnyAction.
 */

export const setLoading = (payload: boolean): AnyAction => {
  return { type: SET_LOADING, payload };
};

/**
 * View action.
 *
 * @param payload
 * @returns AnyAction.
 */

export const setView = (payload: boolean): AnyAction => {
  return { type: SET_VIEW, payload };
};

/**
 * Refresh action.
 *
 * @param payload
 * @returns AnyAction.
 */

export const setRefresh = (payload: boolean): AnyAction => {
  return { type: SET_REFRESH, payload };
};

/**
 * SelectedPhoto action.
 *
 * @param payload - Album object
 * @returns AnyAction
 */

export const setSelectedPhoto = (payload: Album): AnyAction => {
  return { type: SET_SELECTED_PHOTO, payload };
};
