import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { Colors } from "../../common/Colors";
import { Icon } from "../../common/Icon";
import LinearGradient from "react-native-linear-gradient";
import ProfileItem from "./components/ProfileItem";
import Button from "../../components/Button";

const UserProfile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.button, Colors.black]}
        start={{ x: 0.1, y: 1.5 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.linearGradient}
      >
        <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
        <View style={{ marginBottom: 30 }}>
          <Text style={styles.title}>{"Ameen Khalil"}</Text>
          <Text style={styles.subTitle}>{"Ameenk149@gmail.com"}</Text>
        </View>

        <ProfileItem title={"Your listings"} source={Icon.listing} style={{ height: 25, width: 22 }} onPress={()=>navigation.navigate("YourListing")}/>
        <ProfileItem title={"My Details"} source={Icon.details} style={{ height: 22, width: 27 }}/>
        <ProfileItem title={"Your Address"} source={Icon.profileLocation} style={{ height: 28, width: 22 }} onPress={()=>navigation.navigate("MyAddress")}/>
        <ProfileItem title={"Payment Methods"} source={Icon.payment} style={{ height: 20, width: 26 }}/>
        <ProfileItem title={"Redeem Discounts "} source={Icon.redeem} style={{ height: 26, width: 24 }}/>
        <ProfileItem title={"Notifications"} source={Icon.bell} style={{ height: 26, width: 22 }}/>
        <ProfileItem title={"Help"} source={Icon.help} style={{ height: 26, width: 23 }} onPress={()=>navigation.navigate("Help")}/>
        <ProfileItem title={"About Us"} source={Icon.about} style={{ height: 25, width: 23 }} onPress={()=>navigation.navigate("AboutUs")}/>

        <View style={{ position: "absolute", bottom: 10, left: 0, right: 0 }}>
          <Button source={Icon.logout} title={"Log out"} iconStyle={{height:20, width:17}} backgroundColor={Colors.button} />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default UserProfile;
