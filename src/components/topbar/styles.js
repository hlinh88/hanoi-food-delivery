import { StyleSheet } from "react-native";
import { GREY, WHITE } from "../../styles/colors";
import { widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
    height: widthPercentageToDP(22),
    borderBottomColor: GREY,
    borderBottomWidth: 1,
  },
  locationHolder: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  location: {
    fontFamily: "TTNormsBold",
    fontSize: 17,
  },
  loading: {
    width: 30,
    height: 30,
  },
});

export default styles;
