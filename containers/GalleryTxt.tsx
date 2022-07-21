import { Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { showHomePage } from '../functions';
import { galleryTextStyles } from '../styles';

const GalleryTxt = () => {
  const dispatch = useDispatch();

  return (
    <Text
      style={galleryTextStyles.txtBox}
      onPress={() => showHomePage(dispatch)}
    >
      <Text>Gallery</Text>
      {'\n'}
      <Text style={galleryTextStyles.name}>
        Created by Fadi Hanna
      </Text>
    </Text>
  );
};

export default GalleryTxt;
