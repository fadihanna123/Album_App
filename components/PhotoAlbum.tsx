import * as MediaLibrary from "expo-media-library";
import { StatusBar } from "expo-status-bar";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Alert, Button, Image, ScrollView, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { uid } from "react-uid";
import { PhotoAlbumStyles } from "../styles/";

import { Props } from "../typings";
import PhotoItem from "./PhotoItem";

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
  const showAlbum = async (): Promise<void> => {
    await MediaLibrary.requestPermissionsAsync();
    const { status } = await MediaLibrary.getPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Du kan inte komma åt detta innehåll");
      return;
    }

    try {
      setLoading && setLoading(true);

      const results: any = await MediaLibrary.getAssetsAsync({
        first: 1000,
        mediaType: ["photo"],
        sortBy: ["creationTime"],
      });

      setList && setList(results);

      setLoading && setLoading(false);
    } catch (e) {
      Alert.alert(e.message);

      return;
    }
  };

  useEffect(() => {
    showAlbum();
  }, []);

  const props = {
    loading: loading,
    setLoading: setLoading,
    setPhoto: setPhoto,
    setView: setView,
  };

  return (
    <>
      <ScrollView contentContainerStyle={PhotoAlbumStyles.scroll}>
        {view ? (
          <View style={PhotoAlbumStyles.imageViewer}>
            <Spinner
              visible={loading}
              textContent={"Loading..."}
              textStyle={PhotoAlbumStyles.spinnerTextStyle}
            />
            <Image
              source={{
                uri: photo,
              }}
              resizeMode="contain"
              style={PhotoAlbumStyles.viewImage}
            />
            <View style={PhotoAlbumStyles.backButton}>
              <Button
                color="black"
                title="Back"
                onPress={() => setView(false)}
              ></Button>
            </View>
          </View>
        ) : (
          list?.assets.map((album: any) => (
            <PhotoItem album={album} key={uid(album)} {...props} />
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
