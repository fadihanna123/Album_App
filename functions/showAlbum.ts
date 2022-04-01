import * as MediaLibrary from 'expo-media-library';
import { Alert } from 'react-native';

const showAlbum = async (
  setLoading: (loading: boolean | undefined) => void,
  setList: (
    list:
      | {
          assets: [Object];
        }
      | undefined
  ) => void | undefined
): Promise<void> => {
  await MediaLibrary.requestPermissionsAsync();
  const { status } = await MediaLibrary.getPermissionsAsync();

  if (status !== "granted") {
    Alert.alert("Your mobile should allow access to pictures!");
    return;
  }

  try {
    const results: any = await MediaLibrary.getAssetsAsync({
      first: 1000,
      mediaType: ["photo"],
      sortBy: ["creationTime"],
    });

    setList && setList(results);
  } catch (e) {
    Alert.alert((e as Error).message);
    return;
  } finally {
    setLoading && setLoading(false);
  }
};

export { showAlbum };
