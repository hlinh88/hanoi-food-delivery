import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { WHITE, BACKGROUND } from "../../styles/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

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
    alignItems: "flex-start",
    justifyContent: "center",
    width: wp("80%"),
  },
  firstText: {
    color: WHITE,
    fontSize: 18,
    opacity: 0.9,
    paddingBottom: 30,
    fontFamily: "PoppinsSemiBold",
    width: wp("80%"),
  },
  cusHolder: {
    flexWrap: "wrap",
  },
  secondText: {
    color: WHITE,
    fontSize: wp("15%"),
    fontFamily: "PoppinsThin",
    paddingBottom: 10,
    width: wp("80%"),
  },
  thirdText: {
    color: WHITE,
    fontSize: 18,
    opacity: 0.8,
    paddingTop: 20,
    paddingBottom: 35,
    fontFamily: "PoppinsRegular",
  },
  buttonContainer: {
    alignSelf: "center",
  },
  viewButton: {
    backgroundColor: "#4838d1",
    borderRadius: 25,
    paddingVertical: 20,
    width: wp("80%"),
  },
  textButton: {
    color: WHITE,
    fontSize: 15,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
  },
});

export default styles;
