import * as MediaLibrary from 'expo-media-library';
import { Alert } from 'react-native';
import { Dispatch } from 'redux';

import { setList, setLoading } from '../redux/reducers';

/**
 * Show photos album.
 *
 * @function showAlbum
 * @async
 * @param { Dispatch<any> } dispatch
 * @returns { Promise<void> } Promise.
 */
export const showAlbum = async (dispatch: Dispatch<any>): Promise<void> => {
  await MediaLibrary.requestPermissionsAsync();
  const { status } = await MediaLibrary.getPermissionsAsync();

  if (status !== 'granted') {
    Alert.alert('Your mobile should allow access to pictures!');
    return;
  }

  try {
    const results: any = await MediaLibrary.getAssetsAsync({
      first: 1000,
      mediaType: ['photo'],
      sortBy: ['creationTime'],
    });

    dispatch(setList(results));
  } catch (e) {
    Alert.alert((e as Error).message);
    return;
  } finally {
    dispatch(setLoading(false));
  }
};
