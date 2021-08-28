import { StyleSheet } from "react-native";

export const PhotoAlbumStyles = StyleSheet.create({
  scroll: {
    flexDirection: "row",
    flexWrap: "wrap",
    flexGrow: 1,
  },
  imageViewer: {
    width: "100%",
  },
  viewImage: {
    width: "100%",
    height: "85%",
    borderWidth: 1,
  },
  backButton: {
    width: "100%",
    backgroundColor: "white",
  },
  galleryContainer: {
    margin: 4,
  },
  galleryPhoto: {
    width: 85,
    height: 100,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 40,
    padding: 5,
    flexGrow: 1,
    backgroundColor: "#2EBD6B",
    paddingTop: 10,
  },
});
