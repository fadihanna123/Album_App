import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text } from "react-native";

import { Props } from "../typings";

const GalleryTxt = ({ setView }: Props) => {
  const showHomePage = (): void => {
    setView(false);
  };

  return (
    <Text style={styles.txtBox} onPress={showHomePage}>
      <Text>Gallery</Text>
      {"\n"}
      <Text style={styles.name}>Created by Fadi Hanna</Text>
    </Text>
  );
};

GalleryTxt.propTypes = {
  setView: PropTypes.func.isRequired,
};

GalleryTxt.defaultProps = {
  setView: false,
};

export default GalleryTxt;

const styles = StyleSheet.create({
  txtBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    fontSize: 35,
    color: "white",
    textAlign: "center",
    margin: 10,
  },
  name: {
    fontSize: 20,
  },
});
