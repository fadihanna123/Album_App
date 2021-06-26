import React, { useState } from "react";
import { StatusBar, View } from "react-native";

import GalleryTxt from "./components/GalleryTxt";
import PhotoAlbum from "./components/PhotoAlbum";
import { styles } from "./styles";

const App = () => {
  const [list, setList] = useState<{ assets: [Object] }>({
    assets: [Object],
  });
  const [photo, setPhoto] = useState<string>("");
  const [view, setView] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const PhotoAlbumProps = {
    list: list,
    setList: setList,
    loading: loading,
    setLoading: setLoading,
    photo: photo,
    setPhoto: setPhoto,
    view: view,
    setView: setView,
  };

  return (
    <View style={styles.container}>
      <View>
        <GalleryTxt setView={setView} />
        <PhotoAlbum {...PhotoAlbumProps} />
      </View>
      <StatusBar />
    </View>
  );
};

export default App;
