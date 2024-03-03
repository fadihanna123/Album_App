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

// Components
import PhotoItem from './PhotoItem';
import { Asset } from 'expo-media-library';

const PhotoAlbum: React.FC = () => {
  const list = useAppSelector(getList);

  const view = useAppSelector(getView);

  const loading = useAppSelector(getLoading);

  const refresh = useAppSelector(getRefresh);

  const selectedPhoto = useAppSelector(getSelectedPhoto)!;

  const dispatch = useAppDispatch();

  /**
   * Handle refresh images list.
   *
   * @async
   * @returns { Promise<void> } Promise
   */
  const onRefresh = React.useCallback(async (): Promise<void> => {
    dispatch(setRefresh(true));

    const results: MediaLibrary.PagedInfo<MediaLibrary.Asset> =
      await MediaLibrary.getAssetsAsync({
        first: 1000,
        mediaType: ['photo'],
        sortBy: ['creationTime'],
      });

    dispatch(setList(results));

    dispatch(setLoading(false));

    wait(500)
      .then(() => dispatch(setRefresh(false)))
      // eslint-disable-next-line no-console
      .catch((err: Error) => console.log(err));
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
            />
          </View>
          <Text style={selectedPhotoInfoStyles.textContainer}>
            <Text style={selectedPhotoInfoStyles.fileInfoHeading}>
              File Info: {'\n'}
            </Text>
            Created at:
            {' ' + convertUnixToTime(selectedPhoto.creationTime)}
            {'\n'}
            Filename: {selectedPhoto.filename} {'\n'}
            Height: {selectedPhoto.height} {'\n'}
            Id: {selectedPhoto.id} {'\n'}
            MediaType:{' '}
            {selectedPhoto.mediaType.charAt(0).toUpperCase() +
              selectedPhoto.mediaType.slice(1)}{' '}
            {'\n'}
            ModificationTime:{' '}
            {convertUnixToTime(selectedPhoto.modificationTime)} {'\n'}
            Url: {selectedPhoto.uri} {'\n'}
            Width: {selectedPhoto.width} {'\n'}
          </Text>
        </View>
      ) : (
        list?.assets?.map((album: Asset) => (
          <PhotoItem album={album} key={album.id} />
        ))
      )}
      <StatusBar style='auto' />
    </ScrollView>
  );
};

export default PhotoAlbum;
