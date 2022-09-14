import { ActionTypes } from '../../models/redux.model';
import { SET_LIST } from '../../utils/constants';

const initialState = {} as { assets: [Record<string, never>] };

/**
 * List reducer.
 *
 * @param state
 * @param param1
 * @returns photo list.
 */

export const listReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_LIST:
      return payload;

    default:
      return state;
  }
};
