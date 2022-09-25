import { Album } from '../../models';
import { ActionTypes } from '../../models/redux.model';
import { SET_SELECTED_PHOTO } from '../../utils/constants';

const initialState: Album | null = null;

/**
 * Photo reducer.
 *
 * @param state
 * @param param1
 * @returns String.
 */

export const selectedPhotoReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_SELECTED_PHOTO:
      return payload;

    default:
      return state;
  }
};
