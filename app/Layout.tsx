import React, { useState } from "react";
import { StatusBar, View } from "react-native";
import GalleryTxt from "../containers/GalleryTxt";
import PhotoAlbum from "../containers/PhotoAlbum";
import { appStyles } from "../styles";

const Layout: React.FC = () => {
  const [list, setList] = useState<{ assets: [{}] }>({
    assets: [{}],
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
    <View style={appStyles.container}>
      <View>
        <GalleryTxt setView={setView} />
        <PhotoAlbum {...PhotoAlbumProps} />
      </View>
      <StatusBar />
    </View>
  );
};

export default Layout;
