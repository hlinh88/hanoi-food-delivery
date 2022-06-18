import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {
  WHITE,
  BACKGROUND,
  LIGHT_PURPLE,
  PURPLE_BLUE,
  TEXT_INPUT,
  GREY,
  PLACEHOLDER,
} from "../../styles/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  background: {
    backgroundColor: BACKGROUND,
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    marginTop: 75,
    width: wp(95),
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: WHITE,
    fontSize: 20,
    fontFamily: "PoppinsMedium",
  },
  backBtn: {
    marginLeft: 15,
  },
  threeDots: {
    marginRight: 15,
  },
});

export default styles;
