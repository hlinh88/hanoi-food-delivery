import { StyleSheet } from "react-native";
import { WHITE } from "../../../styles/colors";

const styles = StyleSheet.create({
  tag: {
    borderColor: WHITE,
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  text: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    fontSize: 16,
  },
});

export default styles;
