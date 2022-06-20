import {
  TextInput,
  Text,
  View,
  StatusBar,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import moment from "moment";
import { styles } from "./styles";
import { Icon } from "../../common/Icon";
import { Colors } from "../../common/Colors";
import DatePicker from "react-native-date-picker";
import InputField from "../../components/InputField";
import LinearGradient from "react-native-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";
import PickupButton from "./components/PickupButton";
import { launchImageLibrary } from "react-native-image-picker";

const CreatePost = ({ navigation }) => {
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

  const [time, setTime] = React.useState();
  const [date, setDate] = React.useState(new Date());
  const [openTime, setOpenTime] = React.useState(false);

  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();

  const [image, setImage] = React.useState();

  // console.log("*******", moment(time).format("hh:mm a"));
  console.log("*******", moment(time).format("hh:mm a"));
  //   console.log("888getUTCHours.....",date.getUTCHours()); // Hours
  // console.log("getUTCMinutes.....",date.getUTCMinutes());
  // console.log("888getUTCHours88",date.getUTCSeconds())
  // let t=time

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
        <View style={styles.productTxtView}>
          <Text style={styles.title}>{"Add Product"}</Text>
        </View>
        <ScrollView>
          <View style={styles.inputView}>
            <Text style={styles.email}>{"Product Name"}</Text>
            <InputField
              placeholder="Full Variety Sweeter"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.email}>{"Product Description"}</Text>
            <View style={styles.descriptionInput}>
              <TextInput
                multiline
                value={description}
                placeholder="Lorem Ipsum"
                placeholderTextColor={Colors.white}
                onChangeText={(text) => setDescription(text)}
                style={{ color: Colors.white }}
              />
            </View>
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
                <View style={[styles.picker, { marginEnd: 10 }]}>
                  <TouchableOpacity style={styles.removeBtn}>
                    <Image source={Icon.remove} style={styles.removeIcon} />
                  </TouchableOpacity>
                  <Image
                    source={{ uri: image }}
                    resizeMode={"cover"}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                    }}
                  />
                </View>
              ) : null}
              <TouchableOpacity onPress={ImagePicker} style={styles.picker}>
                <Image source={Icon.plus} style={styles.plus} />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={[
              styles.inputView,
              {
                zIndex: -99,
                flexDirection: "row",
                justifyContent: "space-between",
              },
            ]}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={[styles.email, { marginBottom: 0 }]}>
                {"Pickup Available Time"}
              </Text>
              <Image source={Icon.clock} style={styles.clockIcon} />
            </View>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => setOpenTime(true)}
            >
              <Text style={styles.timeText}>{"Select Time"}</Text>
              <Image source={Icon.arrowRight} style={styles.arrowRight} />
            </TouchableOpacity>
          </View>
          <View style={styles.timeView}>
            <Text style={styles.timeFormat}>
              {moment(time).format("hh:mm a")}
            </Text>
          </View>

          <DatePicker
            modal
            mode="time"
            open={openTime}
            date={date}
            onConfirm={(time) => {
              setOpenTime(false);
              setTime(time);
            }}
            onCancel={() => {
              setOpenTime(false);
            }}
          />

          <View style={styles.inputView}>
            <Text style={styles.email}>{"Pickup Type"}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <PickupButton pickType={true} title={"New"} onPress={() => {}} />
              <PickupButton pickType={true} title={"Fair"} onPress={() => {}} />
            </View>
          </View>

          <View style={styles.inputView}>
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
          <View style={{ height: 150, zIndex: -99 }} />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default CreatePost;
