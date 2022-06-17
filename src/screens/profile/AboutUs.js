import { Image, Text, View, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Colors } from "../../common/Colors";
import { Icon } from "../../common/Icon";
import LinearGradient from "react-native-linear-gradient";
import HeaderComponent from "../../components/HeaderComponent";

const AboutUs = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.button, Colors.black]}
        start={{ x: 0.1, y: 1.5 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.linearGradient}
      >
        <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
        <HeaderComponent navigation={navigation} title={"About Us"} />
        <View style={styles.middleContainer}>
          <Image source={Icon.logo} style={{ height: 80, width: 80 }} />
          <View style={styles.titleView}>
            <Text style={styles.ask}>{"What is Giveaway Insel?"}</Text>
          </View>
          <View style={styles.desView}>
            <Text style={styles.askDescription}>
              Giveaway Insel is one of its kind giveaway platforms where you can
              giveawa your things to those in need of them. You can also
              participate in the exchange program where you can exchange the
              stuff you have for the stuff you need.
            </Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AboutUs;
