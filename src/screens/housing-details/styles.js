import { StyleSheet } from "react-native";
import {
  BACKGROUND,
  LIGHT_PURPLE,
  PURPLE_BLUE,
  TEXT_INPUT,
  WHITE,
  YELLOW,
} from "../../styles/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { scaleSize } from "../../styles/scale";

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND,
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  wrapper: {
    paddingHorizontal: wp(7),
    marginTop: wp(7),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: wp(5),
    justifyContent: "space-between",
    width: wp(100),
  },
  text: {
    color: WHITE,
  },
  building: {
    fontSize: 18,
    fontFamily: "PoppinsMedium",
  },
  img: {
    width: "100%",
    height: scaleSize(300),
  },
  name: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 25,
    marginVertical: wp(2),
  },
  price: {
    fontFamily: "PoppinsExtraBold",
    fontSize: 28,
    marginBottom: wp(4),
  },
  address: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    textTransform: "uppercase",
    marginBottom: wp(1),
  },
  starContainer: {
    flexDirection: "row",
    marginVertical: "4%",
  },
  star: {
    marginRight: wp(2),
  },
  rating: {
    fontFamily: "PoppinsSemiBold",
    color: YELLOW,
    fontSize: 25,
    marginLeft: 10,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: wp(5),
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: wp(10),
    marginBottom: wp(5),
  },
  sectionTitle: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 20,
  },
  desc: {
    marginBottom: wp(5),
    fontFamily: "PoppinsRegular",
    fontSize: 15,
  },
  comment: {
    backgroundColor: TEXT_INPUT,
    borderRadius: 20,
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 20,
    fontFamily: "PoppinsRegular",
    marginBottom: 30,
    textAlignVertical: "top",
  },
  ratingWrapper: {
    flex: 1,
    alignItems: "center",
  },
  starStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  myRating: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    marginBottom: 7,
  },
  btn: {
    backgroundColor: PURPLE_BLUE,
    borderRadius: 20,
    width: "50%",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: "10%",
  },
  btnText: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
  },
  reviewContainer: {
    marginBottom: "15%",
  },
  seeMoreBtn: {
    color: LIGHT_PURPLE,
    fontSize: hp("1.7%"),
    fontFamily: "PoppinsBold",
  },

  seeMoreBtnContainer: {
    marginBottom: hp("7.3%"),
    marginLeft: "auto",
    marginTop: hp("2%"),
  },
});

export default styles;
