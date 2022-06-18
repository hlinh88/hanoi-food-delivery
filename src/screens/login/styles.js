import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {
  WHITE,
  BACKGROUND,
  SELECTED_BUTTON,
  TEXT_INPUT,
  LIGHT_PURPLE,
  YELLOW,
} from "../../styles/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: wp("80%"),
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
  },
  textController: {
    width: wp("80%"),
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 7,
    marginBottom: 15,
  },
  normalText: {
    fontFamily: "PoppinsRegular",
    color: WHITE,
  },
  yellowText: {
    fontFamily: "PoppinsRegular",
    color: YELLOW,
  },
  icon: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
  loginField: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: wp("80%"),
  },
  textOne: {
    fontFamily: "PoppinsSemiBold",
    color: WHITE,
    fontSize: 15,
    marginVertical: 10,
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
  midFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("80%"),
  },
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBoxIcon: {
    marginVertical: 10,
  },
  checkBoxText: {
    color: WHITE,
    fontFamily: "PoppinsRegular",
    marginHorizontal: 5,
  },
  loginButtonView: {
    backgroundColor: SELECTED_BUTTON,
    borderRadius: 15,
    width: wp("80%"),
    marginTop: 10,
  },
  loginButtonText: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    paddingVertical: 15,
  },
  registerButtonView: {
    borderRadius: 15,
    borderColor: WHITE,
    borderWidth: 1,
    width: wp("80%"),
    marginTop: 15,
  },
  registerButtonText: {
    color: LIGHT_PURPLE,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    paddingVertical: 15,
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: WHITE,
    fontFamily: "PoppinsRegular",
    marginRight: 5,
  },

  textTwo: {
    color: WHITE,
    fontFamily: "PoppinsRegular",
    marginBottom: 10,
  },

  textGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  textEmail: {
    color: WHITE,
    fontFamily: "PoppinsSemiBold",
  },

  cancelButtonView: {
    borderRadius: 15,
    width: wp("80%"),
    marginTop: 10,
    borderWidth: 1,
    borderColor: WHITE,
  },
  cancelButtonText: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    paddingVertical: 15,
  },
});

export default styles;
