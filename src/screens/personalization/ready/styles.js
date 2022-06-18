import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { WHITE, BACKGROUND, SELECTED_BUTTON } from "../../../styles/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
    alignItems: "center",
    justifyContent: "center",
    width: wp("80%"),
  },
  image: {
    width: wp("80%"),
    height: hp("40%"),
  },
  textOne: {
    fontFamily: "PoppinsSemiBold",
    color: WHITE,
    fontSize: 20,
  },
  textTwo: {
    fontFamily: "PoppinsRegular",
    color: WHITE,
    textAlign: "center",
    fontSize: 15,
    paddingVertical: 10,
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
});

export default styles;
