import React from 'react';
import { GalleryTxt } from 'src/containers';
import { Text, useColorScheme } from 'react-native';
import { galleryTextStyles } from 'src/styles';

const Header: React.FC = () => {
  const scheme = useColorScheme();

  return (
    <>
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
    </>
  );
};

export default Header;
