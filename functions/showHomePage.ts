import { Dispatch } from 'redux';

import { setView } from '../redux/actions';

/**
 * Back to homepage.
 *
 * @param dispatch
 * @returns AnyAction.
 */

export const showHomePage = (dispatch: Dispatch<any>) =>
  dispatch(setView(false));
