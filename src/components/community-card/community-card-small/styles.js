import { Dimensions, StyleSheet } from "react-native";
import { WHITE } from "../../../styles/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

/* function to auto adjust margin depended on the screen width */
let width = Dimensions.get("window").width;
let cardHeight = 87 * 1.2;
let cardWidth = 63 * 1.2;
let containerWidth = (width * 3) / 4;
const responsiveCardMarginLeft = () => {
  let maxCardPerRow = 3;
  let totalCardSpace = cardWidth * maxCardPerRow;
  while (containerWidth < totalCardSpace) {
    totalCardSpace -= cardWidth;
    maxCardPerRow -= 1;
  }
  /* find the margin space to fit cards in a row, minus 1 because without it cards will go to another row and leave a big gap,
   * margin: auto works on the web version but not on iphone */
  return (containerWidth - totalCardSpace) / maxCardPerRow - 1;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: cardHeight,
    marginLeft: responsiveCardMarginLeft(),
    marginBottom: hp("2.2%"),
    overflow: "hidden",
    width: cardWidth,
  },

  userImg: {
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },

  userContent: {
    position: "relative",
    borderRadius: 20,
    height: 24,
    marginLeft: 7,
    marginRight: 5,
    marginTop: 45,
    overflow: "hidden",
    textAlign: "center",
    width: 65,
  },

  userContentBackground: {
    backgroundColor: WHITE,
    borderRadius: 20,
    height: 24,
    opacity: 0.44,
    position: "absolute",
    width: wp("15.7%"),
  },

  userContentRow: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 6,
    marginRight: 10,
  },

  userName: {
    fontSize: 10,
    fontFamily: "PoppinsRegular",
  },
});

export default styles;
