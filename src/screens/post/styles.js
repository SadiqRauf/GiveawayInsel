import { Colors } from "../../common/Colors";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.black
  },
  linearGradient: {
    flex: 1,
  },
  productTxtView:{ 
    paddingVertical: 10, 
    marginTop: 10 
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
    color: "green",
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
  itemSeparator:{
    backgroundColor: Colors.white,
  },
  dropDown:{
    backgroundColor: Colors.input,
    borderWidth: 0,
  },
  dropDownText:{
    color: Colors.white,
    fontFamily: "SairaCondensed-Medium",
  },
  dropDownContainer:{
    backgroundColor: Colors.input,
    borderWidth: 0,
    zIndex:999
  },
  placeholder:{
    fontSize: 16,
    lineHeight: 25,
     color: Colors.white,
    fontFamily:"SairaCondensed-Bold"
    
  },
  picker:{
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: 50,
    width: 50,
    marginEnd:5,
    justifyContent: "center",
    alignItems: "center",
  },
  plus:{ height: 25, width: 25 },
  timeText:{
    fontSize: 14,
    lineHeight: 22,
    color: "lightgreen",
    fontFamily: "SairaCondensed-Medium",
  },
  descriptionInput:{
    backgroundColor: Colors.input,
    height: 150,
    borderRadius: 15,
    padding: 15,
  },
  clockIcon:{ height: 14, width: 14, marginLeft: 12 },
  arrowRight:{ height: 14, width: 9, marginLeft: 12 }
};
