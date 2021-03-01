import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import PropTypes from "prop-types";
import Spinner from "react-native-loading-spinner-overlay";
import { uid } from "react-uid";
import { StatusBar } from "expo-status-bar";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

import { Props } from "../typings/List";

const PhotoAlbum = ({
  view,
  loading,
  setLoading,
  photo,
  setPhoto,
  setView,
  setList,
  list,
}: Props) => {
  const showAlbum = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

    if (status !== "granted") {
      Alert.alert("Du kan inte komma åt detta innehåll");
      return;
    }

    try {
      setLoading(true);
      const results: any = await MediaLibrary.getAssetsAsync({
        first: 1000,
        mediaType: ["photo"],
        sortBy: ["creationTime"],
      });
      setList(results);
      setLoading(false);
    } catch (e) {
      Alert.alert(e.message);
      return;
    }
  };

  const _show = (pic: string) => {
    setLoading(true);
    setPhoto(pic);
    setView(true);
    setLoading(false);
  };

  useEffect(() => {
    showAlbum();
  }, []);

  return (
    <>
      <ScrollView contentContainerStyle={styles.scroll}>
        {view ? (
          <View style={styles.imageViewer}>
            <Spinner
              visible={loading}
              textContent={"Loading..."}
              textStyle={styles.spinnerTextStyle}
            />
            <Image
              source={{
                uri: photo,
              }}
              resizeMode="contain"
              style={styles.viewImage}
            />
            <View style={styles.backButton}>
              <Button
                color="black"
                title="Back"
                onPress={() => setView(false)}
              ></Button>
            </View>
          </View>
        ) : (
          list?.assets.map((album: any) => (
            <View key={uid(album)}>
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
          ))
        )}
        <StatusBar style="auto" />
      </ScrollView>
    </>
  );
};

PhotoAlbum.propTypes = {
  view: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired,
  setPhoto: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
};

PhotoAlbum.defaultProps = {
  view: false,
  loading: false,
  setLoading: false,
  photo: "",
  setPhoto: "",
  setView: false,
  list: {},
};

export default PhotoAlbum;

const styles = StyleSheet.create({
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
    width: 65,
    height: 100,
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
});
