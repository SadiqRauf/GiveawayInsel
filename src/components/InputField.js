import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import {Icon} from '../common/Icon'
const InputField = ({
  icon,
  label,
  value,
  style,
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <View  style={styles.input}>
    <Image source={icon}
      style={style}
    />

      <TextInput
        label={label}
        value={value}
        mode="outlined"
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={"grey"}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        style={styles.textInput}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#4D4C4C",
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:17,
    borderRadius: 10,
  },
  textInput:{
    color: "#fff",
    fontSize: 18,
    height: 52,
    marginLeft:10
  }
});
