import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  BACKGROUND,
  DARK_BLUE_PURPLE,
  GREY,
  LIGHT_BLUE,
  PURPLE_BLUE,
  RED,
  SELECTED_BUTTON,
  WHITE,
} from "../../styles/colors";

const styles = StyleSheet.create({
  background: {
    backgroundColor: BACKGROUND,
  },

  backBtn: {
    marginLeft: wp(7),
    marginRight: 0,
    color: WHITE,
    fontFamily: "PoppinsMedium",
    fontSize: 17,
  },

  doneBtn: {
    marginRight: wp(7),
    color: LIGHT_BLUE,
    fontFamily: "PoppinsMedium",
    fontSize: 17,
  },

  cellWrapper: {
    borderColor: DARK_BLUE_PURPLE,
    borderTopWidth: 1,
  },

  profileImage: {
    borderRadius: 20,
    height: 120,
    width: 120,
  },

  profileImageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },

  changeBtn: {
    marginTop: 20,
    color: "#1897F6",
    fontFamily: "PoppinsSemiBold",
    fontSize: 15,
  },

  title: {
    color: WHITE,
    fontSize: 20,
    fontFamily: "PoppinsMedium",
  },

  editProfile: {
    marginRight: wp(10),
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
    marginTop: 70,
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
    marginLeft: wp(8),
    marginRight: wp(5),
    fontFamily: "PoppinsRegular",
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },

  hyperlink: {
    color: LIGHT_BLUE,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: wp(8),
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
    marginTop: 40,
    marginBottom: 40,
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

  alertContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  alertBody: {
    width: wp("80%"),
    backgroundColor: BACKGROUND,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  alertText: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    fontSize: 15,
    paddingVertical: 10,
  },
  editInfoContain: {
    width: wp("80%"),
    backgroundColor: BACKGROUND,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  editInfo: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    marginLeft: 20,
    fontSize: 15,
    paddingVertical: 10,
    width: wp("60%"),
  },
  text: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    marginLeft: 20,
  },
  closeButton: {
    width: wp("80%"),
    backgroundColor: SELECTED_BUTTON,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeButtonText: {
    color: WHITE,
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 10,
  },
  clearBtn: {
    marginRight: 15,
  },
  clearIcon: {
    width: 25,
    height: 25,
  },
  dropdown: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  editInfoExtra: {
    flexDirection: "row",
    fontSize: 15,
    paddingVertical: 10,
    width: wp("80%"),
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: PURPLE_BLUE,
  },
  editInfoContainExtra: {
    width: wp("80%"),
    backgroundColor: BACKGROUND,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 20,
  },
  buttonViewStyle: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: WHITE,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  buttonSelectedStyle: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    marginHorizontal: 5,
    backgroundColor: SELECTED_BUTTON,
    marginVertical: 5,
  },
  textStyle: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
  },
  selectedText: {
    fontFamily: "PoppinsRegular",
    color: WHITE,
  },
  errorText: {
    fontFamily: "PoppinsRegular",
    color: RED,
    marginTop: 5,
  },
  selectedSubWrapper: {
    width: wp("80%"),
    backgroundColor: BACKGROUND,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: GREY,
  },
});
export default styles;
