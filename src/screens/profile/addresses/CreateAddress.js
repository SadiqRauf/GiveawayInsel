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

const CreateAddress = ({navigation}) => {
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
        <View style={styles.inputView}>
        <Text style={styles.email}>{"Address Name"}</Text>
        <InputField
          placeholder="Address Name"
        //   value={name}
        //   onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.email}>{"Street Name"}</Text>
        <InputField
          placeholder="Street Name"
        //   value={name}
        //   onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.email}>{"Address line 2"}</Text>
        <InputField
          placeholder="Address line 2"
        //   value={name}
        //   onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.email}>{"Zip code"}</Text>
        <InputField
          placeholder="Zip code"
        //   value={name}
        //   onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.email}>{"Country"}</Text>
        <InputField
          placeholder="Country"
        //   value={name}
        //   onChangeText={(text) => setName(text)}
        />
      </View>
        
        <TouchableOpacity style={styles.locationBtn}>
        <Image source={Icon.greenLoc} style={{height:23, width:20}}/> 
            <Text style={{fontSize:18, lineHeight:28, color:'#9BD186',marginRight:25, fontFamily: "SairaCondensed-Bold",}}>{"Set this address as default address"}</Text>
        </TouchableOpacity>

      <Button source={Icon.addressIcon} iconStyle={{height:20, width:28}} title={"Add address"} backgroundColor={Colors.button}/>
    </LinearGradient></SafeAreaView>
  )
}

export default CreateAddress
