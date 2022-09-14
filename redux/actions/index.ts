import { AnyAction } from 'redux';

import {
  SET_LIST,
  SET_LOADING,
  SET_PHOTO,
  SET_REFRESH,
  SET_VIEW,
} from '../../utils/constants';

/**
 * Photo action.
 *
 * @param payload
 * @returns AnyAction.
 */

export const setPhoto = (payload: string): AnyAction => {
  return { type: SET_PHOTO, payload };
};

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
