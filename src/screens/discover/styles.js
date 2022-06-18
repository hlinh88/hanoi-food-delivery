import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {
  WHITE,
  BACKGROUND,
  SELECTED_BUTTON,
  GREY,
  LIGHT_BLUE,
} from "../../styles/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  topBar: {
    flexDirection: "row",
    marginTop: 75,
    width: wp(100),
    alignItems: "center",
    justifyContent: "space-between",
  },
  backBtn: {
    marginLeft: wp(10),
    marginRight: 0,
  },
  title: {
    color: WHITE,
    fontSize: 20,
    fontFamily: "PoppinsMedium",
  },
  messenger: {
    marginRight: wp(10),
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: wp(100),
    flex: 1,
    marginTop: 10,
  },
  flatList: {
    width: wp(100),
  },
  videoCardHolder: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 0,
    marginHorizontal: 30,
  },
  videoImage: {
    width: "100%",
    height: 100,
  },
  videoImageHolder: {
    width: "45%",
    height: 100,
  },
  titleHolder: {
    marginLeft: 10,
  },
  videoTitle: {
    fontSize: 15,
    width: Dimensions.get("screen").width / 2,
    color: WHITE,
    fontFamily: "PoppinsSemiBold",
    marginBottom: 5,
  },
  channelTitle: {
    fontSize: 12,
    color: WHITE,
    fontFamily: "PoppinsRegular",
    marginRight: 5,
  },
  channelHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 3,
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  youtubeVideo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  channelAva: {
    width: 22,
    height: 22,
    borderRadius: 50,
    marginRight: 5,
  },
  channelModal: {
    backgroundColor: BACKGROUND,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  channelTopInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: GREY,
    paddingBottom: 10,
    width: wp(80),
  },
  channelBigAva: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 15,
  },
  channelBigTitle: {
    fontFamily: "PoppinsSemiBold",
    color: WHITE,
    fontSize: 18,
    marginRight: 5,
  },
  description: {
    color: WHITE,
    fontFamily: "PoppinsRegular",
  },
  channelSecondInfo: {
    borderBottomWidth: 0.5,
    borderBottomColor: GREY,
    paddingBottom: 10,
    marginTop: 5,
    width: wp(80),
  },
  channelThirdInfo: {
    width: wp(80),
    marginTop: 5,
  },
  linkText: {
    fontFamily: "PoppinsMedium",
    fontSize: 13,
    color: LIGHT_BLUE,
    marginHorizontal: 2,
  },
  row: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
