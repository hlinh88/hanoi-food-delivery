import { StyleSheet } from "react-native";
import { BLACK, GREY, TEXT_INPUT, WHITE } from "../../styles/colors";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
    height: widthPercentageToDP(22),
  },
  textInput: {
    backgroundColor: GREY,
    borderRadius: 30,
    width: wp(90),
    paddingVertical: 12,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  searchText: {
    width: wp(45),
    color: BLACK,
    fontFamily: "TTNormsMedium",
    paddingVertical: 2,
  },

  searchHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
