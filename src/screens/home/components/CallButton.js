import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "../styles";
import { Icon } from "../../../common/Icon";

const CallButton = ({title}) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Image source={Icon.msg} style={styles.btnIcon} />
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CallButton;
