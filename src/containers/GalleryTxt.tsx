import { Text, useColorScheme } from 'react-native';

import { showHomePage } from '../functions';
import { useAppDispatch } from '../redux/app';
import { galleryTextStyles } from '../styles';

const GalleryTxt = () => {
  const dispatch = useAppDispatch();
  const scheme = useColorScheme();

  return (
    <Text
      style={[
        galleryTextStyles.txtBox,
        {
          color: scheme === 'dark' ? '#fff' : '#000',
          borderColor: scheme === 'dark' ? '#fff' : '#000',
        },
      ]}
      onPress={() => showHomePage(dispatch)}
    >
      <Text>Gallery</Text>
    </Text>
  );
};

export default GalleryTxt;
