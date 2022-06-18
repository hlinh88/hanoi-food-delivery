import { StyleSheet } from "react-native";
import { BACKGROUND, SELECTED_BUTTON, WHITE } from "../../../styles/colors";

const styles = StyleSheet.create({
  notSelectedText: {
    color: WHITE,
    backgroundColor: BACKGROUND,
    borderColor: WHITE,
    borderRadius: 15,
    borderWidth: 1,
    height: 30,
    margin: 5,
    paddingVertical: 4,
    paddingHorizontal: 10,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
  },

  selectedText: {
    color: WHITE,
    backgroundColor: SELECTED_BUTTON,
    borderColor: SELECTED_BUTTON,
    borderRadius: 15,
    borderWidth: 1,
    height: 30,
    margin: 5,
    overflow: "hidden",
    paddingVertical: 4,
    paddingHorizontal: 10,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
  },
});

export default styles;
