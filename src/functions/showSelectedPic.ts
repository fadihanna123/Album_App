import { Dispatch } from 'redux';

import { setLoading, setSelectedPhoto, setView } from '../redux/reducers';
import { Asset } from 'expo-media-library';

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
  selectedPhoto: Asset
): void => {
  dispatch(setLoading(true));
  dispatch(setSelectedPhoto(selectedPhoto));
  dispatch(setView(true));
  dispatch(setLoading(false));
};
