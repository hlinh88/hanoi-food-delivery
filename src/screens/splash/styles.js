import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { BACKGROUND, BLACK, WHITE } from "../../styles/colors";
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
    height: heightPercentageToDP(90),
  },
  icon: {
    width: 520,
    height: 520,
    resizeMode: "contain",
  },
  loading: {
    width: 80,
    height: 80,
  },
  holdText: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 50,
    alignItems: "center",
  },
  versionText: {
    color: WHITE,
    fontSize: 16,
    fontFamily: "PoppinsRegular",
  },
});

export default styles;
