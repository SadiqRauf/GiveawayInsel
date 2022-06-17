import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "../common/Icon";

const Button = ({
  title,
  source,
  onPress,
  disabled,
  iconStyle,
  backgroundColor,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, { backgroundColor: backgroundColor }]}
    >
      <View style={{ position: "absolute", left: 20 }}>
        <Image source={source} style={iconStyle} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 15,
    height: 55,
  },
  text: {
    fontSize: 20,
    lineHeight: 22,
    color: "#fff",
    marginTop: 10,
    fontFamily: "SairaCondensed-Bold",
  },
});
