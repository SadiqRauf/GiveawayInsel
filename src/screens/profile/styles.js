import { Colors } from "../../common/Colors";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  linearGradient: {
    flex: 1,
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
  name: {
    fontSize: 18,
    lineHeight: 28.33,
    color: Colors.white,
    fontFamily: "SairaCondensed-Bold",
  },
  itemCate: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconView: { 
    flex: 0.22, 
    alignItems: "center" 
  },
  itemView: {
    flex: 0.78,
    paddingVertical: 18,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: Colors.input,
  },
  middleContainer: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
  },
  ask: {
    fontSize: 20,
    lineHeight: 24.33,
    alignSelf: "center",
    color: Colors.white,
    fontFamily: "SairaCondensed-Medium",
  },
  askDescription: {
    fontSize: 16,
    lineHeight: 24.33,
    alignSelf: "center",
    color: Colors.white,
    fontFamily: "SairaCondensed-Light",
  },
  titleView: { 
    paddingVertical: 20 
  },
  desView: { 
    paddingHorizontal: 20 
  },
  btnContainer: { 
    width: "100%", 
    marginTop: 20, 
    paddingVertical: 20 
  },
  btn: { 
    left: 0,
    right: 0,
    bottom: 50,
    position: "absolute",    
  },
  inputView: {
    marginTop: 8,
    marginBottom: 13,
    paddingHorizontal: 15,
  },
  headSticker: {
    backgroundColor: Colors.button,
    justifyContent: "center",
    paddingHorizontal: 15,
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 7,
    width: 80,
    margin: 5,
  },
  stickerText: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.white,
    fontFamily: "SairaCondensed-Medium",
  },
  email: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "left",
    marginBottom: 8,
    color: Colors.white,
    fontFamily: "SairaCondensed-Medium",
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
  clockIcon:{ height: 14, width: 14, marginLeft: 12 },
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
  locationBtn: {
    height: 55,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal:20,
    marginHorizontal: 20,
    justifyContent: "space-between",
    flexDirection:'row',
    backgroundColor: Colors.middleColor,

  },
};
