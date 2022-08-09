import { Dispatch } from 'redux';

import { setView } from '../redux/actions';

export const showHomePage = (dispatch: Dispatch<any>) =>
  dispatch(setView(false));
