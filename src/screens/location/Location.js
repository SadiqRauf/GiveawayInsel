import {
  Image,
  Text,
  View,
  StatusBar,
  Dimensions,
  TextInput,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Colors } from "../../common/Colors";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import BottomCard from "./components/BottomCard";
import { Icon } from "../../common/Icon";

// const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const data = [
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const tags=[
  {
    id:1,
    tagName:'All'
  },
  {
    id:2,
    tagName:'Tech'
  },
  {
    id:3,
    tagName:'Wardrobe'
  },
  {
    id:4,
    tagName:'Furniture'
  },
  {
    id:5,
    tagName:'Food'
  },
  {
    id:6,
    tagName:'All'
  }
]

const Location = () => {
  // const theme = useTheme();
  const [search, setSearch] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ height: "100%" }}
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 33.684422,
          longitude: 73.047882,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      ></MapView>
      <View style={styles.searchView}>
        <View style={{ flexDirection: "row", alignItems:'center' }}>
          <Image source={Icon.search} style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setSearch(text)}
            value={search}
            placeholder="Search giveaway insel"
            placeholderTextColor={Colors.white}
            keyboardType="numeric"
          />
        </View>
        <Image source={Icon.searchLoc} style={styles.searchIcon1} />
      </View>
      
      <View style={{marginVertical:10, position:'absolute', top:100, left:10, right:10}}>
          <FlatList
          horizontal
            data={tags}
            renderItem={({item, index})=>{
              return(
                <TouchableOpacity style={{height:28, borderRadius:12, backgroundColor:index == 0 ? Colors.button : Colors.backgroundColor, paddingHorizontal:10, justifyContent:'center', alignItems:'center', margin:8, borderWidth:1.5, borderColor:Colors.button}}>
                  <Text style={styles.cardSubTitle}>{item.tagName}</Text>
                </TouchableOpacity>
              )
            }}
            keyExtractor={item=> item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>

      <View style={styles.card}>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => {
            return <BottomCard />;
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Location;
