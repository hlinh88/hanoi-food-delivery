import { StyleSheet } from "react-native";
import { BLACK, GREY, WHITE } from "../../styles/colors";
import { widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
    height: widthPercentageToDP(22),
    marginLeft: 10,
    flexDirection: "row",
  },
  buttonContainer: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#E7E7E7",
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: BLACK,
  },
  buttonText: {
    fontFamily: "TTNormsMedium",
    fontSize: 15,
  },
});

export default styles;
