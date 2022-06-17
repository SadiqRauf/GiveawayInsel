import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ListingData } from "./components/ListingData";
import Card from "./components/Card";
import { styles } from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../common/Colors";
import HeaderComponent from "../../components/HeaderComponent";
import SearchBar from "../../components/SearchBar";

const tags = [
  {
    id: 1,
    tagName: "All",
  },
  {
    id: 2,
    tagName: "Tech",
  },
  {
    id: 3,
    tagName: "Wardrobe",
  },
  {
    id: 4,
    tagName: "Furniture",
  },
  {
    id: 5,
    tagName: "Food",
  },
  {
    id: 6,
    tagName: "All",
  },
];

const RecomendedListing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.button, Colors.middleColor]}
        start={{ x: 0.1, y: 1.5 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.linearGradient}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.middleColor}
        />
        <HeaderComponent
          listing={true}
          navigation={navigation}
          title={"Berlin, Germany"}
        />
        <View style={{ paddingHorizontal: 15 }}>
          <SearchBar placeholder={"Search giveaway insel"} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <FlatList
            horizontal
            data={tags}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.tag,
                    {backgroundColor:index == 0 ? Colors.button : Colors.backgroundColor}
                  ]}
                >
                  <Text style={styles.cardSubTitle}>{item.tagName}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.listingTextView}>
          <Text style={styles.listingTitle}>{"Recomended Listing"}</Text>
        </View>

        <FlatList
          data={ListingData}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("DetailsScreen")}
                style={{ paddingHorizontal: 15 }}
              >
                <Card />
              </TouchableOpacity>
            );
          }}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default RecomendedListing;
