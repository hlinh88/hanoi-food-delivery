import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  WHITE,
  BACKGROUND,
  SELECTED_BUTTON,
  TEXT_INPUT,
  RED,
} from "../../../styles/colors";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height
console.log(width, height);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
  },
  wrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: wp("80%"),
    marginTop: 120,
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
    flexWrap: "wrap",
    paddingVertical: 20,
  },
  buttonViewStyle: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: WHITE,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  buttonSelectedStyle: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    marginHorizontal: 5,
    backgroundColor: SELECTED_BUTTON,
    marginVertical: 5,
  },
  textStyle: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
  },
  selectedText: {
    fontFamily: "PoppinsRegular",
    color: WHITE,
  },
  errorText: {
    fontFamily: "PoppinsRegular",
    color: RED,
    marginTop: 5,
  },
  nextButtonView: {
    backgroundColor: SELECTED_BUTTON,
    borderRadius: 15,
    width: wp("80%"),
    marginTop: 30,
  },
  nextButtonText: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    paddingVertical: 15,
  },
  backButtonView: {
    borderRadius: 15,
    borderColor: WHITE,
    borderWidth: 1,
    width: wp("80%"),
    marginTop: 15,
  },
  backButtonText: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    paddingVertical: 15,
  },
});

export default styles;
