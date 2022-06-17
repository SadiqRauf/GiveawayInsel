import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import { Colors } from '../common/Colors'
import { Icon } from '../common/Icon'

const SearchBar = ({placeholder}) => {
  return (
    <View style={styles.container}>
    <Image source={Icon.search} style={styles.icon}/>
      <TextInput
      placeholder={placeholder}
      placeholderTextColor={Colors.white}
      style={{color:Colors.white}}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#4D4C4C",
        height:48,
        borderRadius:18,
        paddingHorizontal:15,
        alignItems:'center',
        flexDirection:'row',

    },
    icon:{height:18, width:18, marginEnd:10}
})