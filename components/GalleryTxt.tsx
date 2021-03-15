import React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { Props } from "../typings";

const GalleryTxt = ({ setView }: Props) => {
  return (
    <>
      <Text
        style={styles.txtBox}
        onPress={() => {
          setView(false);
        }}
      >
        <Text>Gallery</Text>
        {"\n"}
        <Text style={styles.name}>Created by Fadi Hanna</Text>
      </Text>
    </>
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
    fontFamily: "Courier New",
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
