import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../common/Colors";
import HeaderComponent from "../../components/HeaderComponent";
import { Images } from "../../common/Images";
import { Icon } from "../../common/Icon";
import { Rating, AirbnbRating } from "react-native-ratings";
import { availableTiming, ImagesData } from "./components/ListingData";
import CallButton from "./components/CallButton";
// import { useNavigationParam } from 'react-navigation-hooks'

const DetailsScreen = ({ route, navigation }) => {

  // const profileSide = useNavigationParam('profileSide')
  // const profileSide  = route.params.profileSide

  // console.log("&&&&&&&&", profileSide)

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.button, Colors.middleColor]}
        start={{ x: 0.1, y: 1.5 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.linearGradient}
      >
        <HeaderComponent navigation={navigation} title={"Details"} />
        <ScrollView style={styles.scrollView}>
          <View style={styles.cardImage}>
            <Image source={Images.image} style={styles.img} />
            <View style={{ height: 120 }} />
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{"Two Nike shirts"}</Text>
              <Text style={styles.description}>
                The products is in very good condition, Call me or tex tme. Its
                only two months old but totally unsued{" "}
              </Text>
            </View>
            {ImagesData.length <= 3 ? (
              <>
                <View style={styles.threeImages}>
                  <Image source={Images.image1} style={styles.positionImage} />
                  <Image source={Images.image3} style={styles.positionImage} />
                </View>
                <View style={styles.twoImages}>
                  <Image source={Images.image2} style={styles.positionImage} />
                </View>
              </>
            ) : ImagesData.length <= 2 ? (
              <View style={styles.threeImages}>
                <Image source={Images.image1} style={styles.positionImage} />
                <Image source={Images.image3} style={styles.positionImage} />
              </View>
            ) : (
              <View style={styles.twoImages}>
                <Image source={Images.image2} style={styles.oneImage} />
              </View>
            )}
          </View>
          <View style={styles.card}>
            <Text style={styles.cardSubTitle}>{"Additional Details"}</Text>
            <Text style={styles.description}>
              The products is in very good condition, Call me or tex tme. Its
              only two months old but totally unsued, The products is in very
              good condition, Call me or tex tme. Its only two months old but
              totally unsued
            </Text>
          </View>
          <View style={styles.dateCard}>
            <Text style={styles.cardSubTitle}>{"Posting Date"}</Text>
            <Text style={styles.dateText}>{"29.09.2022"}</Text>
          </View>
          <View style={styles.dateCard}>
            <Text style={styles.cardSubTitle}>{"Condition"}</Text>
            <Rating
              type="custom"
              ratingColor={Colors.switchColor}
              tintColor={Colors.input}
              ratingCount={5}
              imageSize={18}
            />
          </View>
          <View style={styles.card}>
            <View style={styles.deliveryCard}>
              <Text style={styles.cardSubTitle}>{"Delivery Type"}</Text>
              <Text style={styles.dateText}>{"Pickup"}</Text>
            </View>
            <Text style={styles.available}>{"Available Timings"}</Text>

            <FlatList
              data={availableTiming}
              renderItem={({ item }) => {
                return (
                  <View style={styles.headSticker}>
                    <Text style={styles.stickerText}>{item.time}</Text>
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
              numColumns={4}
            />
          </View>
          <View style={styles.btnContainer}>
            <CallButton title={"Inquire"} />
            <CallButton title={"Call"} />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default DetailsScreen;
