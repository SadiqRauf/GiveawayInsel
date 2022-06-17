import { View, Text, StatusBar, Image,Dimensions, ImageBackground } from "react-native";
import React,{useState} from "react";
import { styles } from "./styles";
import { Colors } from "../../common/Colors";
import Button from "../../components/Button";
import { Images } from "../../common/Images";
import LinearGradient from "react-native-linear-gradient";
import LoginScreen from '../login/LoginScreen'

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height * 0.8;
const CARD_WIDTH = width;

const StartedScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <LinearGradient
      colors={[Colors.button, Colors.middleColor, Colors.button]}
      style={styles.linearGradient}
    >
      <StatusBar barStyle="light-content" backgroundColor={Colors.button} />

      <View style={{marginBottom:10}}>
        <Text style={styles.title}>{"Giveaway Insel"}</Text>
        <Text style={styles.subTitle}>{"Let’s giveaway"}</Text>
      </View>

      <ImageBackground source={Images.cloud} style={{height:CARD_HEIGHT, width:CARD_WIDTH,}}>
        <Image style={styles.img} source={Images.shadow} />
      </ImageBackground>
      <View style={styles.btnView}>
        <Button
        backgroundColor={Colors.button}
          title={"Get Started"}
          onPress={toggleModal}
        />
      </View>
      {isModalVisible && (
        <LoginScreen navigation={navigation} isModalVisible={isModalVisible} toggleModal={toggleModal} />
      )}
    </LinearGradient>
  );
};
export default StartedScreen;
