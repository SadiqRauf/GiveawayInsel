import {
  Text,
  View,
  Image,
  FlatList,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "../styles";
import { Colors } from "../../../common/Colors";
import { Icon } from "../../../common/Icon";
import LinearGradient from "react-native-linear-gradient";
import HeaderComponent from "../../../components/HeaderComponent";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import DropDownPicker from "react-native-dropdown-picker";
import { launchImageLibrary } from "react-native-image-picker";
import PickupButton from "../../post/components/PickupButton";

export const availableTiming = [
  {
    id: 1,
    time: "09:00 am",
  },
  {
    id: 2,
    time: "10:00 am",
  },
  {
    id: 3,
    time: "11:00 am",
  },
  {
    id: 4,
    time: "12:00 am",
  },
  {
    id: 5,
    time: "01:00 pm",
  },

];

const EditProduct = ({ navigation }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: "Lorem Ipsum", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const [openAddress, setOpenAddress] = React.useState(false);
  const [addressValue, setAddressValue] = React.useState(null);
  const [addressItems, setAddressItems] = React.useState([
    { label: "Lorem Ipsum", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const [openPickup, setOpenPickup] = React.useState(false);
  const [pickupValue, setPickupValue] = React.useState(null);
  const [pickupItems, setPickupItems] = React.useState([
    { label: "Lorem Ipsum", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  const [image, setImage] = React.useState();

  const ImagePicker = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    launchImageLibrary(options, (res) => {
      console.log("********", res);
      if (res.didCancel) {
        console.log("User cancelled image picker");
      } else if (res.error) {
        console.log("ImagePicker Error: ", res.error);
      } else if (res.customButton) {
        console.log("User tapped custom button: ", res.customButton);
        alert(res.customButton);
      } else {
        // let source = res;
        const source = res.assets[0].uri;
        let img = JSON.stringify(source)?.replace(/"/g, "");
        setImage(img);
        console.log("//////", image);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.button, Colors.black]}
        start={{ x: 0.1, y: 1.5 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.linearGradient}
      >
        <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
        <HeaderComponent navigation={navigation} title={"Edit Product"} />

        <ScrollView nestedScrollEnabled={false}>
          <View style={styles.inputView}>
            <Text style={styles.email}>{"Product Name"}</Text>
            <InputField
              placeholder="Full Variety Sweeter"
              //   value={name}
              //   onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.email}>{"Pickup Description"}</Text>
            <InputField
              placeholder="Lorem Ipsum"
              //   value={name}
              //   onChangeText={(text) => setName(text)}
            />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.email}>{"Product Category"}</Text>
            <DropDownPicker
              placeholder="Lorem Ipsum"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              itemSeparator={true}
              showArrowIcon={true}
              showTickIcon={false}
              style={styles.dropDown}
              textStyle={styles.dropDownText}
              itemSeparatorStyle={styles.itemSeparator}
              dropDownContainerStyle={styles.dropDownContainer}
            />
          </View>

          <View style={[styles.inputView, { zIndex: -99 }]}>
            <Text style={styles.email}>{"Pickup Type"}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <PickupButton title={"Delivery"} onPress={() => {}} />
              <PickupButton title={"Pickup by self"} onPress={() => {}} />
            </View>
          </View>

          <View style={styles.inputView}>
            <Text style={styles.email}>{"Address"}</Text>
            <DropDownPicker
              placeholder="Home"
              open={openAddress}
              value={addressValue}
              items={addressItems}
              setOpen={setOpenAddress}
              setValue={setAddressValue}
              setItems={setAddressItems}
              itemSeparator={true}
              showArrowIcon={true}
              showTickIcon={false}
              style={styles.dropDown}
              textStyle={styles.dropDownText}
              placeholderStyle={styles.placeholder}
              itemSeparatorStyle={styles.itemSeparator}
              dropDownContainerStyle={styles.dropDownContainer}
            />
          </View>

          <View style={[styles.inputView, { zIndex: -99 }]}>
            <Text style={styles.email}>{"Upload Images"}</Text>
            <View style={{ flexDirection: "row" }}>
              {image ? (
                <TouchableOpacity style={styles.picker}>
                  <Image
                    source={{ uri: image }}
                    resizeMode={"cover"}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                    }}
                  />
                </TouchableOpacity>
              ) : null}
              <TouchableOpacity onPress={ImagePicker} style={styles.picker}>
                <Image source={Icon.plus} style={styles.plus} />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
            }}
          >
            <Text style={[styles.email, { marginBottom: 0 }]}>
              {"Pickup Available Time"}
            </Text>
            <Image source={Icon.clock} style={styles.clockIcon} />
          </View>
          <View style={{paddingHorizontal:12}}>
          <FlatList
              data={availableTiming}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity style={[styles.headSticker, {backgroundColor: index ?  Colors.button : Colors.input}]}>
                    <Text style={styles.stickerText}>{item.time}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.id}
              numColumns={3}
            />
            </View>
          <View style={styles.inputView}>
            <Text style={styles.email}>{"Product Condition"}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <PickupButton pickType={true} title={"New"} onPress={() => {}} />
              <PickupButton pickType={true} title={"Fair"} onPress={() => {}} />
            </View>
          </View>

          <View style={[styles.inputView,{ zIndex: 99 }]}>
            <Text style={styles.email}>{"Pickup Location"}</Text>
            <DropDownPicker
              placeholder="Home"
              open={openPickup}
              value={pickupValue}
              items={pickupItems}
              setOpen={setOpenPickup}
              setValue={setPickupValue}
              setItems={setPickupItems}
              itemSeparator={true}
              showArrowIcon={true}
              showTickIcon={false}
              style={styles.dropDown}
              textStyle={styles.dropDownText}
              itemSeparatorStyle={styles.itemSeparator}
              dropDownContainerStyle={styles.dropDownContainer}
            />
          </View>
          <View style={{paddingVertical:20}}>
              <Button title={"Product Givenaway"} backgroundColor={Colors.button}/>
          </View>
          <View style={{height:70}}/>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default EditProduct;
