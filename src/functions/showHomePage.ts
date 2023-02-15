import { Dispatch } from 'redux';

import { setView } from '../redux/reducers';

/**
 * Back to homepage.
 *
 * @function showHomePage
 * @param { Dispatch<any> } dispatch
 * @returns { object } AnyAction.
 * @example showHomePage(dispatch);
 */
export const showHomePage = (dispatch: Dispatch<any>): object =>
  dispatch(setView(false));
