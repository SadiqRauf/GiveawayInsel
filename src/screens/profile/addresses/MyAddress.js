import { Image, Text, View, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../styles";
import { Colors } from "../../../common/Colors";
import { Icon } from "../../../common/Icon";
import LinearGradient from "react-native-linear-gradient";
import HeaderComponent from "../../../components/HeaderComponent";
import AddressesButton from "../components/AddressesButton";
import Button from "../../../components/Button";

const MyAddress = ({navigation}) => {
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
          <AddressesButton title={"Home"} subTitle={"TierGarten 21, 10555, Germanyy"}/>
          <AddressesButton title={"Office 1"} subTitle={"TierGarten 21, 10555, Germanyy"}/>
          <AddressesButton title={"Office 2"} subTitle={"TierGarten 21, 10555, Germanyy"}/>
       <View style={styles.btn}>
       <Button source={Icon.circlePlus} iconStyle={{height:23, width:20}} title={"Create new address "} backgroundColor={Colors.button} onPress={()=>navigation.navigate("CreateAddress")}/>
       </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default MyAddress
