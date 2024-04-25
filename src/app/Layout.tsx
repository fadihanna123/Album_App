import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import { appStyles } from '../styles';

// Components
import PhotoAlbum from '../containers/PhotoAlbum';
import { Header } from 'src/inc';

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
        <Header />
        <PhotoAlbum />
      </View>
      <StatusBar />
    </View>
  );
};

export default Layout;
