import * as MediaLibrary from 'expo-media-library';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {
  Button,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { uid } from 'react-uid';

import { convertUnixToTime, showAlbum, showHomePage, wait } from '../functions';
import { useAppDispatch, useAppSelector } from '../redux/app';
import {
  getList,
  getLoading,
  getRefresh,
  getSelectedPhoto,
  getView,
  setList,
  setLoading,
  setRefresh,
} from '../redux/reducers';
import { PhotoAlbumStyles, selectedPhotoInfoStyles } from '../styles';
import PhotoItem from './PhotoItem';

const PhotoAlbum: React.FC = () => {
  const list = useAppSelector(getList);

  const view = useAppSelector(getView);

  const loading = useAppSelector(getLoading);

  const refresh = useAppSelector(getRefresh);

  const selectedPhoto = useAppSelector(getSelectedPhoto);

  const dispatch = useAppDispatch();

  /**
   * Handle refresh images list.
   *
   * @returns Promise
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
              uri: selectedPhoto?.uri,
            }}
            resizeMode='stretch'
            style={PhotoAlbumStyles.viewImage}
          />
          <View style={PhotoAlbumStyles.backButton}>
            <Button
              color='#000'
              title='Back'
              onPress={() => showHomePage(dispatch)}
            ></Button>
          </View>
          <Text style={selectedPhotoInfoStyles.textContainer}>
            <Text style={selectedPhotoInfoStyles.fileInfoHeading}>
              File Info: {'\n'}
            </Text>
            Created at:
            {' ' + convertUnixToTime(selectedPhoto!.creationTime)}
            {'\n'}
            Filename: {selectedPhoto!.filename} {'\n'}
            Height: {selectedPhoto!.height} {'\n'}
            Id: {selectedPhoto!.id} {'\n'}
            MediaType:{' '}
            {selectedPhoto!.mediaType.charAt(0).toUpperCase() +
              selectedPhoto!.mediaType.slice(1)}{' '}
            {'\n'}
            ModificationTime:{' '}
            {convertUnixToTime(selectedPhoto!.modificationTime)} {'\n'}
            Url: {selectedPhoto!.uri} {'\n'}
            Width: {selectedPhoto!.width} {'\n'}
          </Text>
        </View>
      ) : (
        list?.assets?.map((album: any) => (
          <PhotoItem album={album} key={uid(album)} />
        ))
      )}
      <StatusBar style='auto' />
    </ScrollView>
  );
};

export default PhotoAlbum;