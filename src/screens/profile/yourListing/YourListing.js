import { Image, Text, View, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../styles";
import { Colors } from "../../../common/Colors";
import { Icon } from "../../../common/Icon";
import LinearGradient from "react-native-linear-gradient";
import HeaderComponent from "../../../components/HeaderComponent";
import AddressesButton from "../components/AddressesButton";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListingItem from "../components/Listing";

const YourListing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.button, Colors.black]}
        start={{ x: 0.1, y: 1.5 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.linearGradient}
      >
        <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
        <HeaderComponent navigation={navigation} title={"My Addresses"} />
        <ListingItem title={"Two new coats"} navigation={navigation}/>
        <ListingItem title={"Three sofa set"} navigation={navigation}/>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default YourListing;
