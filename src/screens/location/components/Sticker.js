import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "../../../common/Colors";

const Sticker = ({ sticker, stickerName, style }) => {
  return (
    <View style={styles.container}>
      <Image source={sticker} style={style} />
      <Text style={styles.stickerName}>{stickerName}</Text>
    </View>
  );
};

export default Sticker;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    borderColor: Colors.white,
    backgroundColor: "#252525",
    paddingHorizontal: 3,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    borderWidth: 0.5,
    borderRadius: 6,
    marginTop: 10,
    width: "31%",
    marginEnd: 4,
    height: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  stickerName: {
    fontSize: 7,
    lineHeight: 12,
    color: Colors.white,
    fontFamily: "SairaCondensed-Medium",
  },
});
