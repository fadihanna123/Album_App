import React from 'react';
import { StatusBar, Text, useColorScheme, View } from 'react-native';
import { appStyles, galleryTextStyles } from '../styles';

// Components
import GalleryTxt from '../containers/GalleryTxt';
import PhotoAlbum from '../containers/PhotoAlbum';

const Layout: React.FC = () => {
  const scheme = useColorScheme();

  return (
    <View
      style={[
        appStyles.container,
        {
          backgroundColor: scheme === 'dark' ? '#000' : '#ADD8E6',
        },
      ]}
    >
      <View>
        <GalleryTxt />
        <Text
          style={[
            galleryTextStyles.name,
            {
              color: scheme === 'dark' ? '#fff' : '#000',
            },
          ]}
        >
          Created by Fadi Hanna
        </Text>

        <PhotoAlbum />
      </View>
      <StatusBar />
    </View>
  );
};

export default Layout;
