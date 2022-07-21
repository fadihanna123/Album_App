import React from 'react';
import { StatusBar, View } from 'react-native';

import GalleryTxt from '../containers/GalleryTxt';
import PhotoAlbum from '../containers/PhotoAlbum';
import { appStyles } from '../styles';

const Layout: React.FC = () => {
  return (
    <View style={appStyles.container}>
      <View>
        <GalleryTxt />
        <PhotoAlbum />
      </View>
      <StatusBar />
    </View>
  );
};

export default Layout;
