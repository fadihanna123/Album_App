import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { showSelectedPic } from '../functions';
import { useAppDispatch, useAppSelector } from '../redux/app';
import { getLoading } from '../redux/reducers';
import { photoItemStyles } from '../styles';
import { Asset } from 'expo-media-library';

const PhotoItem: React.FC<{ album: Asset }> = ({ album }: { album: Asset }) => {
  const loading = useAppSelector(getLoading);

  const dispatch = useAppDispatch();

  return (
    <View>
      <Spinner
        visible={loading}
        textContent='Loading...'
        textStyle={photoItemStyles.spinnerTextStyle}
        animation='fade'
        overlayColor='black'
      />
      <TouchableOpacity
        onPress={() => showSelectedPic(dispatch, album)}
        style={photoItemStyles.galleryContainer}
      >
        <Image
          source={{
            uri: album.uri,
          }}
          style={photoItemStyles.galleryPhoto}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PhotoItem;
