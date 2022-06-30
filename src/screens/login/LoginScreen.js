import {
  Text,
  View,
  Pressable,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import Modal from "react-native-modal";
import React, { useState } from "react";
import { Icon } from "../../common/Icon";
const { height } = Dimensions.get("window");
import Button from "../../components/Button";
import { Colors } from "../../common/Colors";
import InputField from "../../components/InputField";
import SocialButton from "../../components/SocialButton";
import auth,{firebase} from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:"457836844240-5a8g7cv8qatamcc4dllludl8hjkknqvh.apps.googleusercontent.com",
});
const LoginScreen = ({ navigation, props, isModalVisible, toggleModal }) => {
 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loginUser = async()=>{
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      if(user){ 
        toggleModal()
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'BottomTabs',
            },
          ],});
      }} catch (error) {
      console.log(error)
    }
  }

  const facebookLogin = async()=>{
    // try {
    //   const fbLogin = await LoginManager.logInWithPermissions(['public_profile', 'email'])
    //   console.log("888888888", fbLogin)
    //   if (fbLogin.isCancelled) {
    //     throw 'User cancelled the login process';
    //   }
    //   const data = await AccessToken.getCurrentAccessToken()
    //   if (!data) {
    //     throw 'Something went wrong obtaining access token';
    //   }
    //   const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken)
    //   // return auth().signInWithCredential(facebookCredential)

    // } catch (error) {
      
    // }

  }

  const googleSignIn = async()=>{

    const { idToken } = await GoogleSignin.signIn();
    console.log("IDTOKEN.",idToken)
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log("googleCredential.",googleCredential)
    const googleLogin= auth().signInWithCredential(googleCredential);
    googleLogin.then((_date)=>{
    console.log("User..//",_date)
     }).catch(error=>{
        console.log("Error..//",error)
     })

  }

  return (
    <Modal
      isVisible={isModalVisible}
      backdropOpacity={0}
      deviceHeight={height}
      swipeDirection={"down"}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      onSwipeComplete={() => toggleModal()}
      style={{
        top:height <= 750 ? "15%" : "25%",
        margin:0,
      }}
    >
      <Pressable style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.button} />
        <View style={{ paddingVertical: 10, marginTop:10 }}>
          <Text style={styles.title}>{"Welcome to Giveaway Island"}</Text>
          <Text style={styles.subTitle}>{"Sign In to Continue"}</Text>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.email}>{"Email"}</Text>
          <InputField
            icon={Icon.message}
            style={styles.message}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.email}>{"Password"}</Text>
          <InputField
            icon={Icon.lock}
            style={styles.icon}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={{ paddingBottom: 30, marginRight: 17 }}>
          <Text style={styles.forgotText}>{"Forgot Password?"}</Text>
        </TouchableOpacity>

        <Button backgroundColor={Colors.button} title={"Login"} onPress={()=> {
          loginUser()}} />

        <View style={{ paddingVertical: 20 }}>
          <Text style={styles.orText}>{"Or"}</Text>
        </View>

        <View style={styles.socialContainer}>
          <SocialButton source={Icon.google} style={styles.google} onPress={()=>googleSignIn()}/>
          <SocialButton source={Icon.twitter} style={styles.twitter} />
          <SocialButton onPress={()=> facebookLogin()} source={Icon.facebook} style={styles.facebook} />
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.accountText}>{"Don’t have an account? "}</Text>
          <TouchableOpacity
            onPress={() => {
              toggleModal()
              navigation.navigate("SignUpScreen");
            }}
          >
            <Text style={styles.subAccountText}>{"Create New Account"}</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

export default LoginScreen;
