import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import { Props } from "../typings";

const PhotoItem: React.FC<Props> = ({
  album,
  loading,
  setLoading,
  setPhoto,
  setView,
}: Props) => {
  const _show = (pic: string) => {
    setLoading && setLoading(true);

    setPhoto && setPhoto(pic);

    setView(true);

    setLoading && setLoading(false);
  };

  return (
    <View>
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
        animation="fade"
        overlayColor="black"
      />
      <TouchableOpacity
        onPress={() => _show(album.uri)}
        style={styles.galleryContainer}
      >
        <Image
          source={{
            uri: album.uri,
          }}
          style={styles.galleryPhoto}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PhotoItem;

const styles = StyleSheet.create({
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
