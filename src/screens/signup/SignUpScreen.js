import {
  Text,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { Icon } from "../../common/Icon";
import Button from "../../components/Button";
import { Colors } from "../../common/Colors";
import InputField from "../../components/InputField";
import SocialButton from "../../components/SocialButton";
import auth,{firebase} from '@react-native-firebase/auth';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const SignUpUser = async()=>{
    try {
      console.log("#######")
       const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        alert('Congratulations you are Successfully Registered!');
        console.log('jkjl', user);
      }catch(err ) {
        console.log("ERROE", err)
      }
  }

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.backgroundColor}
      />
      <ScrollView style={{ marginBottom:10}}>
      <View style={{ paddingVertical:10 }}>
        <Text style={styles.title}>{"Sign up"}</Text>
        <Text style={styles.subTitle}>{"Create New Account"}</Text>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.email}>{"Full Name"}</Text>
        <InputField
          icon={Icon.user}
          style={styles.user}
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
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
      <View style={styles.inputView}>
        <Text style={styles.email}>{"Confirm Password"}</Text>
        <InputField
          icon={Icon.tikLock}
          style={styles.icon}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={{ paddingTop: 30 }}>
      <Button title={"Sign up"} 
        backgroundColor={Colors.button}
        onPress={()=>SignUpUser()}
      />

      </View>


      <View style={{ paddingVertical: 20 }}>
        <Text style={styles.orText}>{"Or"}</Text>
      </View>

      <View style={styles.socialContainer}>
        <SocialButton source={Icon.google} style={styles.google} />
        <SocialButton source={Icon.twitter} style={styles.twitter} />
        <SocialButton source={Icon.facebook} style={styles.facebook} />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.accountText}>
          {"Already have account? "}
          
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("StartedScreen")}>
        <Text style={styles.subAccountText}>{"Log In"}</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
