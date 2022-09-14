import { Dispatch } from 'redux';

import { setLoading, setPhoto, setView } from '../redux/actions';

/**
 * Show the selected picture.
 *
 * @param dispatch
 * @param pic
 */

export const showSelectedPic = (dispatch: Dispatch<any>, pic: string) => {
  dispatch(setLoading(true));
  dispatch(setPhoto(pic));
  dispatch(setView(true));
  dispatch(setLoading(false));
};
