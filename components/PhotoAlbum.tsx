import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, Image, ScrollView, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { uid } from "react-uid";

import { showAlbum } from "../functions";
import { PhotoAlbumStyles } from "../styles/";
import { Props } from "../typings";
import PhotoItem from "./PhotoItem";

const PhotoAlbum: React.FC<Props> = ({
  view,
  loading,
  setLoading,
  photo,
  setPhoto,
  setView,
  setList,
  list,
}: Props) => {
  const showHomePage = (): void => {
    setView(false);
  };

  useEffect(() => {
    showAlbum(
      setLoading as (loading: boolean | undefined) => {},
      setList as (
        list:
          | {
              assets: [{}];
            }
          | undefined
      ) => void | undefined
    );
  }, []);

  const props = {
    loading: loading,
    setLoading: setLoading,
    setPhoto: setPhoto,
    setView: setView,
  };

  return (
    <ScrollView contentContainerStyle={PhotoAlbumStyles.scroll}>
      {view && !loading ? (
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
            <Button color="black" title="Back" onPress={showHomePage}></Button>
          </View>
        </View>
      ) : (
        list?.assets.map((album: any) => (
          <PhotoItem album={album} key={uid(album)} {...props} />
        ))
      )}
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default PhotoAlbum;
