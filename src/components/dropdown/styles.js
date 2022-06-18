import { StyleSheet } from "react-native";
import {
  LIGHT_PURPLE,
  PLACEHOLDER,
  PURPLE_BLUE,
  TEXT_INPUT,
  WHITE,
} from "../../styles/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
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
  optionWrapper: {},
  option: {
    borderColor: WHITE,
    borderWidth: 1,
    borderRadius: 20,
    width: wp("80%"),
    paddingVertical: 15,
    paddingHorizontal: 30,
    color: WHITE,
    fontFamily: "PoppinsSemiBold",
    marginVertical: 3,
    textAlign: "center",
  },
});

export default styles;
