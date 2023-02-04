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
    height: '50%',
    borderWidth: 1,
    padding: 10,
  },
  backButton: {
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 10,
  },
  galleryContainer: {
    margin: 4,
  },
  galleryPhoto: {
    width: 85,
    height: 100,
  },
  spinnerTextStyle: {
    color: '#fff',
  },
});
