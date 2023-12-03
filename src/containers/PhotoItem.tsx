import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { showSelectedPic } from '../functions';
import { useAppDispatch } from '../redux/app';
import { photoItemStyles } from '../styles';
import { Asset } from 'expo-media-library';

const PhotoItem: React.FC<{ album: Asset }> = ({ album }: { album: Asset }) => {
  const dispatch = useAppDispatch();

  return (
    <View>
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
