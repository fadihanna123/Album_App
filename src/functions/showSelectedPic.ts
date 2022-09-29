import { Dispatch } from 'redux';

import { Album } from '../models';
import { setLoading, setSelectedPhoto, setView } from '../redux/reducers';

/**
 * Show the selected picture.
 *
 * @param dispatch - Dispatch
 * @param selectedPhoto - Selected photo
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
