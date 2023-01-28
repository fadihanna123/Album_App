import * as Haptics from 'expo-haptics';
import { Dispatch } from 'redux';

import { Album } from '../models';
import { setLoading, setSelectedPhoto, setView } from '../redux/reducers';

/**
 * Show the selected picture.
 *
 * @function showSelectedPic
 * @param { Dispatch<any> } dispatch - Dispatch
 * @param { void } selectedPhoto - Selected photo
 */
export const showSelectedPic = (
  dispatch: Dispatch<any>,
  selectedPhoto: Album
) => {
  dispatch(setLoading(true));
  dispatch(setSelectedPhoto(selectedPhoto));
  dispatch(setView(true));
  dispatch(setLoading(false));
};
