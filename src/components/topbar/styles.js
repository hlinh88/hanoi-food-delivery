import { StyleSheet } from "react-native";
import {
  WHITE,
  BACKGROUND,
  PURPLE_BLUE,
  BLACK,
  TOPBAR_BACKGROUND,
} from "../../styles/colors";
import { widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: widthPercentageToDP(22),
  },
  location: {
    fontFamily: "TTNormsBold",
    fontSize: 16,
  },
});

export default styles;
