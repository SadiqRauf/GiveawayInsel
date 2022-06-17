import { Dimensions } from "react-native";
import { Colors } from "../../common/Colors";
const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 150;
const CARD_WIDTH = width * 0.43;
const Sticker_WIDTH = width * 0.5;

export const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  linearGradient: {
    flex: 1,
  },
  title: {
    fontSize: 11,
    lineHeight: 17.33,
    textAlign: "center",
    color: Colors.white,
    fontFamily: "SairaCondensed-Medium",
  },
  GPtsText: {
    fontSize: 7,
    lineHeight: 17.33,
    marginLeft: 5,
    color: Colors.white,
    fontFamily: "SairaCondensed-Medium",
  },
  subTitle: {
    fontSize: 8,
    lineHeight: 13,
    // textAlign: "center",
    color: Colors.white,
    fontFamily: "SairaCondensed-Medium",
  },
  forgotText: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "right",
    color: Colors.grey,
    fontFamily: "SairaCondensed-Medium",
  },
  accountText: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.white,
    fontFamily: "SairaCondensed-Medium",
  },
  subAccountText: {
    fontSize: 14,
    lineHeight: 22,
    color: "green",
    fontFamily: "SairaCondensed-Medium",
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 25,
  },

  message: {
    height: 15,
    width: 20,
    marginEnd: 8,
  },
  icon: {
    height: 20,
    width: 17,
    marginEnd: 8,
  },
  email: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "left",
    marginBottom: 8,
    color: Colors.white,
    fontFamily: "SairaCondensed-Medium",
  },
  inputView: {
    paddingHorizontal: 15,
    marginTop: 8,
    marginBottom: 20,
  },
  orText: {
    fontSize: 14,
    lineHeight: 17,
    textAlign: "center",
    marginBottom: 8,
    color: Colors.white,
    fontFamily: "SairaCondensed-Medium",
  },
  map: {
    height: "100%",
  },
  // Callout bubble
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  // Character image
  image: {
    width: "100%",
    height: 80,
  },
  searchView: {
    backgroundColor: Colors.input,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    position: "absolute",
    height: 50,
    borderRadius: 20,
    top: 50,
    left: 15,
    right: 15,
  },
  card: {
     position: "absolute", bottom: 10, left: 2, right: 2 
    },
    cardSubTitle: {
      fontSize: 15,
      lineHeight: 23,
      textAlign: "left",
      color: Colors.white,
      fontFamily: "SairaCondensed-Medium",
    },
  cardContainer: {
    backgroundColor: Colors.locationCard,
    padding: 15,
    borderRadius: 25,
    margin: 10,
    alignItems: "center",
  },
  img: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    borderRadius: 15,
    marginTop: 7,
  },
  bottomContainer: {
    width: 120,
    paddingVertical: 10,
    paddingRight: 10,
  },
  GPtsContainer: {
    width: 50,
    height: 70,
    backgroundColor: "#252525",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.button,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  input: {
    color: Colors.white,
    fontSize: 14,
    lineHeight: 18,
  },
  searchIcon:{height:18.5, width:19, marginEnd:13},
  searchIcon1:{height:30, width:30}
};
