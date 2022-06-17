import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Colors } from '../../common/Colors'
import LinearGradient from "react-native-linear-gradient";

const UserChat = () => {
  return (
    <SafeAreaView style={styles.container}>
    <LinearGradient
     colors={[Colors.button, Colors.backgroundColor]}
     start={{ x: 2, y: 1}} end={{ x: 1, y: 0 }}
     style={styles.linearGradient}
   >
   <StatusBar
       barStyle="light-content"
       backgroundColor={Colors.backgroundColor}
     />
     <Text>Home</Text>
     </LinearGradient>
   </SafeAreaView>
  )
}

export default UserChat
