import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import { styles } from "../styles";
import { Icon } from "../../common/Icon";

const ProfileItem = ({source, onPress, title, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemCate}>
      <View style={styles.iconView}>
        <Image source={source} style={style} />
      </View>
      <View style={styles.itemView}>
        <Text style={styles.name}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileItem;
