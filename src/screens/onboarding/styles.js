import { Colors } from "../../common/Colors";

export const styles = {
  container: {
    // flex:1,
    backgroundColor: Colors.backgroundColor,
  },
  linearGradient: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bgImg: {
    height: 690,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnView: {
    position: "absolute",
    bottom: 30,
    left: 10,
    right: 10,
  },
  img: {
    height: 340,
    width: 390,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 18,
    lineHeight: 28.33,
    textAlign: "center",
    color: Colors.white,
    fontFamily: "SairaCondensed-Bold",
  },
  subTitle: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    color: Colors.grey,
    fontFamily: "SairaCondensed-Light",
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
};
