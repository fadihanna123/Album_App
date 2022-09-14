import * as MediaLibrary from 'expo-media-library';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Button, Image, RefreshControl, ScrollView, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';
import { uid } from 'react-uid';

import { showAlbum, showHomePage, wait } from '../functions';
import {
  ListReducerTypes,
  LoadingReducerTypes,
  PhotoReducerTypes,
  RefreshReducerTypes,
  ViewReducerTypes,
} from '../models';
import { setList, setLoading, setRefresh } from '../redux/actions';
import { PhotoAlbumStyles } from '../styles';
import PhotoItem from './PhotoItem';

const PhotoAlbum: React.FC = () => {
  const list = useSelector((state: ListReducerTypes) => state.listReducer);

  const photo = useSelector((state: PhotoReducerTypes) => state.photoReducer);

  const view = useSelector((state: ViewReducerTypes) => state.viewReducer);

  const loading = useSelector(
    (state: LoadingReducerTypes) => state.loadingReducer
  );

  const refresh = useSelector(
    (state: RefreshReducerTypes) => state.refreshReducer
  );

  const dispatch = useDispatch();

  /**
   * Handle refresh images list.
   */

  const onRefresh = React.useCallback(async (): Promise<void> => {
    dispatch(setRefresh(true));

    const results = await MediaLibrary.getAssetsAsync({
      first: 1000,
      mediaType: ['photo'],
      sortBy: ['creationTime'],
    });

    dispatch(setList(results as any));

    dispatch(setLoading(false));

    wait(500).then(() => dispatch(setRefresh(false)));
  }, []);

  useEffect(() => {
    showAlbum(dispatch);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
      contentContainerStyle={PhotoAlbumStyles.scroll}
    >
      {view && !loading ? (
        <View style={PhotoAlbumStyles.imageViewer}>
          <Spinner
            visible={loading}
            textContent={'Loading...'}
            textStyle={PhotoAlbumStyles.spinnerTextStyle}
          />
          <Image
            source={{
              uri: photo,
            }}
            resizeMode='contain'
            style={PhotoAlbumStyles.viewImage}
          />
          <View style={PhotoAlbumStyles.backButton}>
            <Button
              color='black'
              title='Back'
              onPress={() => showHomePage(dispatch)}
            ></Button>
          </View>
        </View>
      ) : (
        list?.assets?.map((album: any) => {
          return <PhotoItem album={album} key={uid(album)} />;
        })
      )}
      <StatusBar style='auto' />
    </ScrollView>
  );
};

export default PhotoAlbum;
