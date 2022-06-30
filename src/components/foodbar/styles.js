import { StyleSheet } from "react-native";
import { GREY, WHITE } from "../../styles/colors";
import { widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
    height: widthPercentageToDP(22),
    marginLeft: 10,
  },
  foodItem: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  foodIcon: {
    width: 45,
    height: 45,
    marginVertical: 7,
  },
  foodTitle: {
    fontFamily: "TTNormsMedium",
    fontSize: 16,
  },
});

export default styles;
