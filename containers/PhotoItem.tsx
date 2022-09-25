import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { showSelectedPic } from '../functions';
import { Album, LoadingReducerTypes } from '../models';
import { photoItemStyles } from '../styles';

const PhotoItem: React.FC<{ album: Album }> = ({ album }: { album: Album }) => {
  const loading = useSelector(
    (state: LoadingReducerTypes) => state.loadingReducer
  );

  const dispatch = useDispatch();

  return (
    <View>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
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
