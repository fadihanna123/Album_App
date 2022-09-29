import { Text } from 'react-native';

import { showHomePage } from '../functions';
import { useAppDispatch } from '../redux/app';
import { galleryTextStyles } from '../styles';

const GalleryTxt = () => {
  const dispatch = useAppDispatch();

  return (
    <Text
      style={galleryTextStyles.txtBox}
      onPress={() => showHomePage(dispatch)}
    >
      <Text>Gallery</Text>
      {'\n'}
      <Text style={galleryTextStyles.name}>Created by Fadi Hanna</Text>
    </Text>
  );
};

export default GalleryTxt;
