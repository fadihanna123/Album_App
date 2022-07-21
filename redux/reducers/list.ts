import { ActionTypes } from '../../models/redux.model';
import { SET_LIST } from '../../utils/constants';

const initialState = {} as { assets: [{}] };

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
