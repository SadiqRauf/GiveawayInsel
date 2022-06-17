import {
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import Card from "./components/Card";
import { Colors } from "../../common/Colors";
import SearchBar from "../../components/SearchBar";
import LinearGradient from "react-native-linear-gradient";
import Carousel from "react-native-snap-carousel";

const { width, height } = Dimensions.get("window");
const WIDTH = width * 0.33;

const data = [
  {
    id: 0,
    img: require("../../assets/image.png"),
  },
  {
    id: 1,
    img: require("../../assets/image2.png"),
  },
  {
    id: 2,
    img: require("../../assets/image3.png"),
  },
];

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.button, Colors.middleColor]}
        start={{ x: 0.1, y: 1.5 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.linearGradient}
      >
        <StatusBar barStyle="light-content" backgroundColor={Colors.middleColor} />
        <View style={{ paddingHorizontal: 15 }}>
          <SearchBar placeholder={"Search giveaway insel"}/>
        </View>
        <View style={{ padding: 15 }}>
          <Text style={styles.title}>{"Categories"}</Text>
        </View>
        <Carousel
          itemWidth={WIDTH}
          sliderWidth={width}
          inactiveSlideShift={-60}
          contentContainerCustomStyle={styles.carousel}
          // ref={(c) => { this._carousel = c; }}
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={styles.carouselCard}>
                <Image source={item.img} style={styles.carouselImage} />
                <Text style={[styles.cardSubTitle, { textAlign: "center" }]}>
                  {"Clothes"}
                </Text>
              </View>
            );
          }}
        />

        <View
          style={styles.mainContainer}
        >
          <Text style={styles.listingTitle}>{"Recomended Listing"}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RecomendedListing")}
          >
            <Text style={styles.seeMore}>{"See more"}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ paddingHorizontal: 15 }}>
            <Card />
            <Card />
            <Card />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;
