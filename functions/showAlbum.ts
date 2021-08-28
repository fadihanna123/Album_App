import * as MediaLibrary from "expo-media-library";
import { Alert } from "react-native";

const showAlbum = async (
  setLoading: (loading: boolean | undefined) => {},
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
  } finally {
    setLoading && setLoading(false);
  }
};

export { showAlbum };
