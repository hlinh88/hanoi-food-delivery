import { StyleSheet } from "react-native";
import {
  DARK_BLUE_PURPLE,
  GREY,
  PURPLE_BLUE,
  WHITE,
  YELLOW,
} from "../../../styles/colors";
import { scaleSize } from "../../../styles/scale";

const styles = StyleSheet.create({
  card: {
    backgroundColor: DARK_BLUE_PURPLE,
    borderRadius: 20,
    marginBottom: scaleSize(30),
  },
  backgroundImg: {
    width: "100%",
    height: scaleSize(300),
  },
  backgroundImgShopping: {
    width: "100%",
    height: scaleSize(300),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  overlay: {
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0, 0.32)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  rating: {
    color: YELLOW,
    fontSize: 30,
    margin: scaleSize(10),
    fontFamily: "PoppinsSemiBold",
  },
  info: {
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(7),
    paddingBottom: 15,
  },
  text: {
    color: WHITE,
    marginTop: scaleSize(5),
    marginBottom: 10,
  },
  name: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 20,
  },
  modeContainer: {
    borderColor: WHITE,
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: "flex-start",
    backgroundColor: PURPLE_BLUE,
  },
  distanceContainer: {
    marginBottom: 20,
    flexDirection: "row",
  },
  distance: {
    color: WHITE,
    fontSize: 18,
    fontFamily: "PoppinsRegular",
  },
  distanceText: {
    marginLeft: 10,
  },
  clickMore: {
    fontSize: 16,
    color: YELLOW,
    textDecorationLine: "underline",
    marginBottom: scaleSize(15),
    textAlign: "center",
  },
  price: {
    fontFamily: "PoppinsExtraBold",
    fontSize: 26,
    marginBottom: scaleSize(5),
  },
  location: {
    fontSize: 16,
    marginBottom: scaleSize(20),
    fontFamily: "PoppinsRegular",
  },
  extraOuterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  extraContainer: {
    alignItems: "center",
  },
  extra: {
    fontSize: 14,
    color: GREY,
    textAlign: "center",
  },
});

export default styles;
