import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  WHITE,
  BACKGROUND,
  SELECTED_BUTTON,
  TEXT_INPUT,
  RED,
} from "../../../styles/colors";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: wp("80%"),
  },
  textOne: {
    color: WHITE,
    fontFamily: "PoppinsSemiBold",
    paddingBottom: 20,
    fontSize: 20,
  },
  textTwo: {
    color: WHITE,
    fontFamily: "PoppinsRegular",
    paddingBottom: 50,
  },

  textInput: {
    backgroundColor: TEXT_INPUT,
    borderRadius: 20,
    width: wp("80%"),
    paddingVertical: 15,
    paddingHorizontal: 30,
    paddingTop: 15,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    width: wp("60%"),
    color: WHITE,
    fontFamily: "PoppinsMedium",
    paddingVertical: 2,
  },
  buttonWrapper: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  buttonViewStyle: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: WHITE,
    marginHorizontal: 5,
  },
  buttonSelectedStyle: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    marginHorizontal: 5,
    backgroundColor: SELECTED_BUTTON,
  },
  textStyle: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
  },
  errorText: {
    fontFamily: "PoppinsRegular",
    color: RED,
  },
  nextButtonView: {
    backgroundColor: SELECTED_BUTTON,
    borderRadius: 15,
    width: wp("80%"),
    marginTop: 150,
  },
  nextButtonText: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    paddingVertical: 15,
  },
});

export default styles;
