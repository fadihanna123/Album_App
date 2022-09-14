import { ActionTypes } from '../../models/redux.model';
import { SET_PHOTO } from '../../utils/constants';

const initialState: string = '';

/**
 * Photo reducer.
 *
 * @param state
 * @param param1
 * @returns String.
 */

export const photoReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_PHOTO:
      return payload;

    default:
      return state;
  }
};
