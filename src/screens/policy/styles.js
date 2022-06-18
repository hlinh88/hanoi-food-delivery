import { Dimensions, StyleSheet } from "react-native";
import { WHITE, BACKGROUND, SELECTED_BUTTON } from "../../styles/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingTop: 70,
  },
  title: {
    fontFamily: "PoppinsExtraBold",
    alignSelf: "center",
    color: WHITE,
  },
  text: {
    color: WHITE,
    fontFamily: "PoppinsRegular",
  },
  tcP: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "PoppinsRegular",
    color: WHITE,
  },
  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "PoppinsRegular",
    color: WHITE,
  },
  tcContainer: {
    marginTop: 15,
    marginBottom: 15,
    height: height * 0.7,
  },
  button: {
    backgroundColor: SELECTED_BUTTON,
    borderRadius: 20,
    width: width * 0.6,
    padding: 10,
  },

  buttonDisabled: {
    backgroundColor: "#999",
    borderRadius: 20,
    width: width * 0.6,
    padding: 10,
  },

  buttonLabel: {
    fontFamily: "PoppinsMedium",
    color: WHITE,
    alignSelf: "center",
  },
});

export default styles;
