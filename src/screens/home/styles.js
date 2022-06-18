import { StyleSheet } from "react-native";
import { WHITE, BACKGROUND, PURPLE_BLUE } from "../../styles/colors";

import {
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_WEIGHT_EXTRA_BOLD,
  FONT_WEIGHT_MEDIUM,
} from "../../styles/typography";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { scaleFont } from "../../styles/scale";

const responsiveFontSize = () => {
  if (wp("100%") < 330) {
    return 27;
  } else return 35;
};

// designed dimension:375 X 812
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    overflow: "hidden",
    alignItems: "center",
  },
  melbourneBackpackText: {
    color: WHITE,
    fontFamily: "PoppinsBold",
    textAlign: "center",
    fontSize: 20,
    marginTop: hp("10%"),
  },
  subtitle: {
    color: WHITE,
    fontFamily: "PoppinsExtraBold",
    fontSize: 30,
    textAlign: "center",
    marginTop: hp("2%"),
  },
  furtherButton: {
    borderRadius: 20,
    height: hp("8%"),
    width: wp("80%"),
    alignSelf: "center",
    justifyContent: "center",
    marginTop: hp("6%"),
  },
  furtherButtonLast: {
    borderRadius: 20,
    height: hp("8%"),
    width: wp("80%"),
    alignSelf: "center",
    justifyContent: "center",
    marginTop: hp("6%"),
    marginBottom: hp("10%"),
  },
  backgroundImage: {
    height: hp("10%"),
    width: wp("80%"),
    borderRadius: 20,
  },
  overlay: {
    height: "100%",
    backgroundColor: "rgba(0,0,0, 0.5)",
    borderRadius: 20,
  },
});

export default styles;
