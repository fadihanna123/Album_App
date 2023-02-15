import { Dispatch } from 'redux';

import { Album } from '../models';
import { setLoading, setSelectedPhoto, setView } from '../redux/reducers';

/**
 * Show the selected picture.
 *
 * @function showSelectedPic
 * @param { Dispatch<any> } dispatch - Dispatch
 * @param { void } selectedPhoto - Selected photo
 * @returns { void }
 * @example showSelectedPic(dispatch, {})
 */
export const showSelectedPic = (
  dispatch: Dispatch<any>,
  selectedPhoto: Album
): void => {
  dispatch(setLoading(true));
  dispatch(setSelectedPhoto(selectedPhoto));
  dispatch(setView(true));
  dispatch(setLoading(false));
};
