import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  BACKGROUND,
  DARK_BLUE_PURPLE,
  GREY,
  LIGHT_BLUE,
  LIGHT_PURPLE,
  PURPLE_BLUE,
  RED,
  TEXT_INPUT,
  WHITE,
} from "../../styles/colors";

const styles = StyleSheet.create({
  background: {
    backgroundColor: BACKGROUND,
    flex: 1,
  },
  refreshing: {
    color: LIGHT_PURPLE,
    tintColor: LIGHT_PURPLE,
    marginVertical: 20,
    backgroundColor: "transparent",
  },
  backBtn: {
    marginLeft: wp(10),
    marginRight: 0,
  },

  cellWrapper: {
    borderColor: DARK_BLUE_PURPLE,
    borderTopWidth: 1,
  },

  profileImage: {
    borderRadius: 20,
    height: 160,
    width: 160,
  },

  profileImageWrapper: {
    alignItems: "center",
    marginTop: 5,
  },

  title: {
    color: WHITE,
    fontSize: 20,
    fontFamily: "PoppinsMedium",
  },

  messenger: {
    marginRight: wp(10),
  },

  editProfile: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: WHITE,
    borderRadius: 10,
  },
  editProfileText: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  topBar: {
    flexDirection: "row",
    marginTop: 75,
    width: wp(100),
    alignItems: "center",
    justifyContent: "space-between",
  },

  userInfoGrid: {
    marginTop: 50,
    alignContent: "stretch",
    flexWrap: "wrap",
    height: 50,
  },

  userContentDisplay: {
    marginTop: 40,
    marginBottom: 70,
  },

  userContentRow: {
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: LIGHT_BLUE,
    flexDirection: "row",
    minHeight: 50,
  },

  userContentLastRow: {
    borderBottomWidth: 1,
  },

  userContentHeading: {
    color: WHITE,
    marginLeft: wp(5),
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "PoppinsBold",
  },

  userContent: {
    color: WHITE,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: wp(5),
    marginRight: wp(5),
    fontFamily: "PoppinsRegular",
  },

  hyperlink: {
    color: LIGHT_BLUE,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: wp(5),
    marginRight: wp(5),
    fontFamily: "PoppinsRegular",
    textDecorationLine: "underline",
  },

  userContentHeadingWrapper: {
    flex: 1,
  },

  userContentWrapper: {
    flex: 2,
  },

  logoutBtnWrapper: {
    alignItems: "center",
    marginBottom: 60,
  },

  logoutBtn: {
    backgroundColor: RED,
    borderColor: RED,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: 100,
  },

  logoutBtnText: {
    color: WHITE,
    textAlign: "center",
  },
  toast: {
    backgroundColor: TEXT_INPUT,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: wp("60%"),
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingRight: 10,
  },
  userIDContentWrapper: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
});
export default styles;
