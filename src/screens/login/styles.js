import { Colors } from "../../common/Colors";

export const styles = {
  container: {
    flex: 1,
    borderRadius:40,
    backgroundColor: Colors.backgroundColor,
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
  forgotText:{
    fontSize: 14,
    lineHeight: 22,
    textAlign: "right",
    color: Colors.grey,
    fontFamily: "SairaCondensed-Medium",
  },
  accountText:{
    fontSize: 14,
    lineHeight: 22,
    color: Colors.white,
    fontFamily: "SairaCondensed-Medium",
  },
  subAccountText:{
    fontSize: 14,
    lineHeight: 22,
    color: Colors.switchColor,
    fontFamily: "SairaCondensed-Medium",
  },
  bottomView:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop: 25
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
  socialContainer:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
  },
  google:{
    height:18, 
    width:18.2
  },
  twitter:{
    height:18, 
    width:21
  },
  facebook:{
    height:21,
    width:12
  }
};
