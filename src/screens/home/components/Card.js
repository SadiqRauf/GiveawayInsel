import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "../../../common/Colors";
import { Icon } from "../../../common/Icon";
import { Images } from "../../../common/Images";

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.iconView}>
        <Image source={Icon.cloth} style={styles.icon} />
      </View>
      <View style={styles.headStickerView}>
        <View style={styles.headSticker}>
          <Text style={styles.stickerText}>
            {"500"}
            <Text style={styles.Text}> {"GPts"}</Text>
          </Text>
        </View>
        <View style={{ paddingVertical: 5 }}>
          <Text style={styles.midTitle}>{"Two pairs of Nike Shirts"}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.sticker}>
            <Image source={Icon.sticker2} style={styles.img1} />
            <Text style={styles.stickerText}>{"New"}</Text>
          </View>
          <View style={styles.sticker}>
            <Image source={Icon.sticker1} style={styles.img2} />
            <Text style={styles.stickerText}>{"500m"}</Text>
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={Images.image} style={styles.firstImg} />
        <Image source={Images.image} style={styles.firstImg} />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.input,
    borderRadius: 25,
    marginBottom: 10,
    flexDirection: "row",
  },
  sticker: {
    backgroundColor: Colors.backgroundColor,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 0.8,
    borderColor: Colors.white,
    width: "45%",
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginEnd: 3,
  },
  headSticker: {
    backgroundColor: Colors.middleColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.switchColor,
    width: "53%",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  stickerText: {
    color: Colors.white,
    fontSize: 10,
    lineHeight: 15,
    fontFamily: "SairaCondensed-Medium",
  },
  Text: {
    color: Colors.white,
    fontSize: 6,
    lineHeight: 15,
  },
  iconView: {
    flex: 0.1,
    padding: 15,
    backgroundColor: Colors.button,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  headStickerView: {
    flex: 0.5,
    padding: 10,
  },
  icon: {
    height: 40,
    width: 38,
  },
  midTitle: {
    color: Colors.white,
    fontSize: 12,
    lineHeight: 17,
    fontFamily: "SairaCondensed-Medium",
  },
  img1: {
    height: 12,
    width: 10,
  },
  img2: {
    height: 10,
    width: 12,
  },
  imageContainer: {
    flex: 0.4,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  firstImg: {
    height: 55,
    width: 55,
    borderRadius: 8,
  },
});
