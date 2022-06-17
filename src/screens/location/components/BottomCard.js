import {
  Image,
  Text,
  View,
} from "react-native";
import React from "react";
import Sticker from "./Sticker";
import { styles } from "../styles";
import { Icon } from "../../../common/Icon";
import { Images } from "../../../common/Images";

const BottomCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{"Two pairs of Nike Shirts"}</Text>
      <Image source={Images.image} style={styles.img} />
      <View style={styles.bottom}>
        <View style={styles.bottomContainer}>
          <Text style={styles.subTitle}>
            {" The products is in very good condition,  Call me or tex me "}
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Sticker
              sticker={Icon.stickerIcon}
              stickerName={"500m"}
              style={{ height: 9, width: 8, marginEnd: 2 }}
            />
            <Sticker
              sticker={Icon.badge}
              stickerName={"New"}
              style={{ height: 11, width: 8, marginEnd: 2 }}
            />
            <Sticker
              sticker={Icon.badge}
              stickerName={"Pickup"}
              style={{ height: 11, width: 8, marginEnd: 2 }}
            />
          </View>
        </View>

        <View style={styles.GPtsContainer}>
          <Text style={styles.title}>
            {"500 "}
            <Text style={styles.GPtsText}>{"GPts"}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BottomCard;
