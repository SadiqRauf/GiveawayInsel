import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../../common/Colors";
import { Icon } from "../../../common/Icon";

const PickupButton = ({ onPress, title, pickType }) => {
  return (
    <TouchableOpacity style={pickType == true ? styles.button : styles.pickupTypeBtn} onPress={onPress }>
      {pickType == true && <Image source={Icon.star} style={styles.icon} />}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PickupButton;

const styles = StyleSheet.create({
  pickupTypeBtn: {
    flex: 0.45,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent:"center",
    paddingHorizontal: 10,
    backgroundColor: Colors.input,
  },
  button: {
    flex: 0.45,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: Colors.input,
  },
  icon: {
    height: 20,
    width: 20,
    marginEnd: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 25,
    // marginLeft: 10,
    color: Colors.white,
    fontFamily: "SairaCondensed-Medium",
  },
});
