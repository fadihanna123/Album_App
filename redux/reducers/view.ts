import { ActionTypes } from '../../models';
import { SET_VIEW } from '../../utils/constants';

const initialState: boolean = false;

export const viewReducer = (
  state = initialState,
  { type, payload }: ActionTypes
) => {
  switch (type) {
    case SET_VIEW:
      return payload;

    default:
      return state;
  }
};
