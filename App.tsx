import "normalize.css";

import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import GalleryTxt from "./components/GalleryTxt";
import PhotoAlbum from "./components/PhotoAlbum";

const App = () => {
  const [list, setList] = useState<{ assets: [Object] }>({
    assets: [Object],
  });
  const [photo, setPhoto] = useState<string>("");
  const [view, setView] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View>
        <GalleryTxt setView={setView} />
        <PhotoAlbum
          list={list}
          setList={setList}
          loading={loading}
          setLoading={setLoading}
          photo={photo}
          setPhoto={setPhoto}
          view={view}
          setView={setView}
        />
      </View>
      <StatusBar />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
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
