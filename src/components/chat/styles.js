import { StyleSheet } from "react-native";

import {
  BACKGROUND,
  PLACEHOLDER,
  PURPLE_BLUE,
  WHITE,
  YELLOW,
} from "../../styles/colors";

const styles = StyleSheet.create({
  bubble: {
    padding: "1%",
    marginBottom: "1.5%",
  },
  bubbleLeft: {
    backgroundColor: "#555555",
  },
  bubbleRight: {
    backgroundColor: PURPLE_BLUE,
  },
  text: {
    fontFamily: "PoppinsRegular",
    color: WHITE,
    fontSize: 16,
  },
  link: {
    color: YELLOW,
  },
  inputToolBar: {
    backgroundColor: BACKGROUND,
    borderTopColor: "transparent",
    paddingTop: 10,
  },
  action: {
    width: "10%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "2%",
    marginBottom: 0,
  },
  composer: {
    backgroundColor: PLACEHOLDER,
    fontFamily: "PoppinsMedium",
    color: WHITE,
    borderRadius: 50,
    borderColor: "transparent",
    paddingHorizontal: 12,
    marginRight: 10,
    fontSize: 12,
    paddingTop: 12,
  },
  sendBtn: {
    width: "10%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "2%",
  },
});

export default styles;
