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
  YELLOW,
  PLACEHOLDER,
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
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    width: wp("100%"),
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: wp("80%"),
    marginTop: 50,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarText: {
    color: WHITE,
    fontFamily: "PoppinsSemiBold",
    paddingVertical: 10,
  },
  errorImage: {
    color: RED,
    fontFamily: "PoppinsSemiBold",
    paddingBottom: 50,
  },
  dob: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: TEXT_INPUT,
    width: wp("80%"),
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  dobWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: TEXT_INPUT,
    borderRadius: 20,
    width: wp("80%"),
    paddingVertical: 15,
    paddingHorizontal: 30,
    paddingTop: 15,
    marginVertical: 5,
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
  errorHolder: {
    width: wp("80%"),
    alignItems: "flex-start",
  },
  error: {
    color: RED,
    fontFamily: "PoppinsSemiBold",
  },

  introduction: {
    paddingBottom: 100,
  },
  textController: {
    width: wp("80%"),
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  normalText: {
    fontFamily: "PoppinsRegular",
    color: WHITE,
  },
  yellowText: {
    fontFamily: "PoppinsRegular",
    color: YELLOW,
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
