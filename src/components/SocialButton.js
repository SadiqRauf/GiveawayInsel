import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Colors } from "../common/Colors";

const SocialButton = ({ onPress, source, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      <Image source={source} style={style}/>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    height: 50,
    width:50
  },
  text: {
    fontSize: 20,
    lineHeight: 22,
    color: "#fff",
    fontWeight: "700",
  },
});
