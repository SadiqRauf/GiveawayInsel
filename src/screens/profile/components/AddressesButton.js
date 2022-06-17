import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "../../../common/Icon";
import { Colors } from "../../../common/Colors";

const AddressesButton = ({title, subTitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <View style={{}}>
        <Text style={styles.title}>{title}</Text>
        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.subTitle}>
            {subTitle}
          </Text>
        </View>
      </View>

      <Image source={Icon.arrowRight} style={{ height: 16, width: 10 }} />
    </TouchableOpacity>
  );
};

export default AddressesButton;

const styles = StyleSheet.create({
  btnContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    justifyContent: "space-between",
    borderBottomColor: Colors.input,
  },
  title: {
    fontSize: 18,
    lineHeight: 28,
    color: Colors.white,
    fontFamily: "SairaCondensed-Medium",
  },
  subTitle: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.white,
    fontFamily: "SairaCondensed-Light",
  },
});
