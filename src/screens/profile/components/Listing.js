import { StyleSheet, Text, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import ToggleSwitch from 'toggle-switch-react-native'
import { Colors } from '../../../common/Colors'

const ListingItem = ({navigation, title}) => {

    const [toggleSwitch, setToggleSwitch] = useState(false)

    if (toggleSwitch == true){
        setTimeout(() => {
            navigation.navigate("EditDetailsScreen")
        }, 1000);
      
    }

    useEffect(()=>{
        setToggleSwitch(false)
    },[navigation])
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:0.5, borderColor:Colors.input, paddingVertical:20, paddingHorizontal:15}}>
    <View>
    <Text style={styles.date}>{"29.03.2021"}</Text>
    <Text style={styles.title}>{title}</Text>
    <Text style={[styles.date, {color: toggleSwitch==true ? Colors.switchColor : Colors.offSwitch}]}>{"Active"}</Text>

    </View>
      <ToggleSwitch
  isOn={toggleSwitch}
  onColor={Colors.switchColor}
  offColor={Colors.offSwitch}
  size="medium"
  onToggle={() => {
  setToggleSwitch(!toggleSwitch)}}
/>
    </View>
  )
}

export default ListingItem;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        lineHeight: 28,
        color: Colors.white,
        fontFamily: "SairaCondensed-Medium",
      },
      date:{
        fontSize: 10,
        lineHeight: 18,
        color: Colors.offSwitch,
        fontFamily: "SairaCondensed-Light",
      }
})