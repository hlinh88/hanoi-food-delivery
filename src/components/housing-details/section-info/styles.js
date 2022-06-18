import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { WHITE } from "../../../styles/colors";

const styles = StyleSheet.create({
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
    color: WHITE,
  },
});

export default styles;
