import { Image, Text, View, StatusBar, SafeAreaView,StyleSheet } from "react-native";
import React,{useEffect} from "react";
import { Icon } from "../common/Icon";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../common/Colors";

const SplashScreen = ({navigation}) => {

    useEffect(() => {
       
          setTimeout(() => {
            // navigation.navigate(value==="true"?"tab" :"login")
            navigation.navigate("StartedScreen");
          }, 1000);
      }, []);
  return (
    <LinearGradient
    colors={[Colors.button, Colors.middleColor, Colors.button]}
    start={{ x: 1.2, y: 0.9 }}
        end={{ x: 0.5, y: 0 }}
    style={styles.linearGradient}
  >
    <StatusBar barStyle="light-content" backgroundColor={Colors.button} />
    <View style={{}}>
        <Image source={Icon.logo} style={{height:85, width:85}}/>
    </View>
    <View style={styles.bottomView}>
        <Text style={styles.title}>{"Copyrights @ All right reserved"}</Text>
        <Text style={styles.subTitle}>{"Giveaway Insel"}</Text>
    </View>
    </LinearGradient>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    linearGradient:{
        flex:1,
        justifyContent:'center', 
        alignItems:"center"
    },
    title:{
        fontSize: 14,
        lineHeight: 22,
        textAlign:'center',
        color: Colors.white,
        fontFamily: "SairaCondensed-Light",
    },
    subTitle:{
        fontSize: 14,
        lineHeight: 22,
        textAlign:'center',
        color: Colors.white,
        fontFamily: "SairaCondensed-Medium",
    },
    bottomView:{
        position:'absolute',
        bottom:30
    }
})