import { StyleSheet, Text, View, StatusBar } from "react-native";
import React, { useEffect } from "react";
import Navigator from "./navigation/Navigations";
import { Colors } from "./common/Colors";
import { NavigationContainer } from "@react-navigation/native";

const App = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.backgroundColor}
      />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
