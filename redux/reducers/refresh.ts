import { ActionTypes } from '../../models/redux.model';
import { SET_REFRESH } from '../../utils/constants';

const initialState: boolean = false;

/**
 * Refresh reducer.
 *
 * @param state
 * @param param1
 * @returns Boolean.
 */

export const refreshReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_REFRESH:
      return payload;

    default:
      return state;
  }
};
