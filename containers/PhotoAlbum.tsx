import * as MediaLibrary from 'expo-media-library';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Button, Image, RefreshControl, ScrollView, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { uid } from 'react-uid';

import { showAlbum, wait } from '../functions';
import { PhotoAlbumStyles } from '../styles';
import { Props } from '../typings';
import PhotoItem from './PhotoItem';

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
  const [refreshing, setRefreshing] = React.useState(false);

  const showHomePage = (): void => {
    setView(false);
  };

  useEffect(() => {
    showAlbum(
      setLoading as (loading: boolean | undefined) => void,
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

  const onRefresh = React.useCallback(async (): Promise<void> => {
    setRefreshing(true);

    const results: any = await MediaLibrary.getAssetsAsync({
      first: 1000,
      mediaType: ["photo"],
      sortBy: ["creationTime"],
    });

    setList && setList(results);

    setLoading && setLoading(false);

    wait(500).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={PhotoAlbumStyles.scroll}
    >
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
