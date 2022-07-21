import { StyleSheet } from 'react-native';

export const PhotoAlbumStyles = StyleSheet.create({
  scroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  imageViewer: {
    width: '100%',
  },
  viewImage: {
    width: '100%',
    height: '85%',
    borderWidth: 1,
  },
  backButton: {
    width: '100%',
    backgroundColor: 'white',
  },
  galleryContainer: {
    margin: 4,
  },
  galleryPhoto: {
    width: 85,
    height: 100,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
