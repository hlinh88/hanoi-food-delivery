import { StyleSheet } from "react-native";
import {
  ALERT_PURPLE_BUTTON,
  ALERT_PURPLE_MESSAGE,
  BLACK,
  GREY,
  LIGHT_BLUE,
  LIGHT_PURPLE,
  PLACEHOLDER,
  PURPLE_BLUE,
  TEXT_INPUT,
  WHITE,
} from "../../styles/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  alertContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  alertModal: {
    backgroundColor: TEXT_INPUT,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: wp("80%"),
  },
  errorMessage: {
    textAlign: "center",
    color: WHITE,
    fontFamily: "PoppinsRegular",
    fontSize: 15,
    paddingVertical: 15,
  },
  closeButton: {
    width: wp("80%"),
    backgroundColor: TEXT_INPUT,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeButtonText: {
    color: WHITE,
    fontFamily: "PoppinsBlack",
    fontSize: 17,
    textAlign: "center",
    paddingVertical: 10,
  },
  cancelButton: {
    width: wp("80%"),
    backgroundColor: ALERT_PURPLE_BUTTON,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cancelButtonText: {
    color: WHITE,
    fontFamily: "PoppinsBlack",
    fontSize: 17,
    textAlign: "center",
    paddingVertical: 10,
  },
  logoutButton: {
    width: wp("80%"),
    backgroundColor: ALERT_PURPLE_BUTTON,
    marginTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: GREY,
  },
  logoutButtonText: {
    color: WHITE,
    fontFamily: "PoppinsBlack",
    fontSize: 17,
    textAlign: "center",
    paddingVertical: 10,
  },
});

export default styles;
