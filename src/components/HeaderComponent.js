import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "../common/Icon";
import { Colors } from "../common/Colors";

const HeaderComponent = ({ title, onPress, navigation, listing }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backArrowView}
        onPress={() => navigation.goBack()}
      >
        <Image source={Icon.backArrow} style={styles.backArrow} />
      </TouchableOpacity>
      {listing==true ? 
      <View style={styles.titleView}>
        <Image source={Icon.location1} style={styles.locationIcon} />
      
        <Text style={styles.text}>{title}</Text>
        <View style={styles.downArrow} />
      </View>
      :
      <View style={styles.titleView}>
      
        <Text style={styles.text}>{title}</Text>
      </View>}
      <View style={{ flex: 0.1 }} />
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.backgroundColor,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth:0.4,
    borderBottomColor:Colors.input,
    marginBottom:10,
    height: 70,
  },
  text: {
    fontSize: 17,
    lineHeight: 25,
    color: Colors.white,
    marginEnd: 5,
    fontFamily: "SairaCondensed-Bold",
  },
  backArrowView: { marginEnd: 15, flex: 0.1 },
  backArrow: { height: 22, width: 12 },
  titleView: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  downArrow: {
    height: 15,
    width: 15,
    borderRadius: 9,
    backgroundColor: Colors.button,
  },
  locationIcon: { height: 23, width: 18, marginEnd: 10 },
});
