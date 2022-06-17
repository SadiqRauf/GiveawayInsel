import {
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import InputField from "../../components/InputField";
import { Icon } from "../../common/Icon";
import { styles } from "./styles";
import Modal from "react-native-modal";
import Button from "../../components/Button";
import { Colors } from "../../common/Colors";
import SocialButton from "../../components/SocialButton";
import RBSheet from "react-native-raw-bottom-sheet";
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height * 0.3;
const CARD_WIDTH = width;

const LoginScreen = ({ navigation, props, isModalVisible, toggleModal }) => {
 
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Modal
      isVisible={isModalVisible}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      deviceHeight={height}
      backdropOpacity={0}
      style={{
        top:height <= 750 ? "15%" : "25%",
        margin:0,
      }}
    >
      <TouchableOpacity onPress={toggleModal} style={styles.container}>
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
          toggleModal()
          navigation.navigate("BottomTabs")}} />

        <View style={{ paddingVertical: 20 }}>
          <Text style={styles.orText}>{"Or"}</Text>
        </View>

        <View style={styles.socialContainer}>
          <SocialButton source={Icon.google} style={styles.google} />
          <SocialButton source={Icon.twitter} style={styles.twitter} />
          <SocialButton source={Icon.facebook} style={styles.facebook} />
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
      </TouchableOpacity>
    </Modal>
  );
};

export default LoginScreen;
