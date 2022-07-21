import { ActionTypes } from '../../models/redux.model';
import { SET_PHOTO } from '../../utils/constants';

const initialState: string = '';

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
