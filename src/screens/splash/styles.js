import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { BACKGROUND, WHITE } from "../../styles/colors";
import { heightPercentageToDP } from "react-native-responsive-screen";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",

    height: heightPercentageToDP(65),
  },
  icon: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
  textTitle: {
    color: WHITE,
    fontSize: 45,
    fontFamily: "PoppinsExtraBold",
  },
  description: {
    color: WHITE,
    fontSize: 15,
    fontFamily: "PoppinsMedium",
    marginTop: 15,
  },
  holdText: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 50,
    alignItems: "center",
    height: heightPercentageToDP(40),
  },
  versionText: {
    color: WHITE,
    fontSize: 16,
    fontFamily: "PoppinsRegular",
  },
});

export default styles;
