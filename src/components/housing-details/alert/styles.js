import { StyleSheet } from "react-native";
import { TEXT_INPUT, WHITE } from "../../../styles/colors";
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  headerText: {
    color: "#25AE88",
    fontFamily: "PoppinsBlack",
    fontSize: 18,
    marginHorizontal: 5,
  },
  text: {
    textAlign: "center",
    color: WHITE,
    fontFamily: "PoppinsRegular",
    fontSize: 15,
    paddingVertical: 15,
  },
  cancelButton: {
    width: wp("80%"),
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
});

export default styles;
