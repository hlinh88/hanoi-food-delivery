import {StyleSheet} from "react-native";
import {
    BACKGROUND,
    DARK_BLUE,
    LIGHT_PURPLE,
    WHITE,
} from "../../../styles/colors";
import {scaleSize} from "../../../styles/scale";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND,
    },
    wrapper: {
        padding: "2.5%",
    },
    heading1: {
        fontSize: 24,
        fontFamily: "PoppinsSemiBold",
        color: WHITE,
        marginTop: "10%",
        marginBottom: "5%",
    },
    heading3: {
        fontSize: 20,
        fontFamily: "PoppinsMedium",
        color: WHITE,
        marginBottom: 12,
    },
    secondHeader: {
        flexDirection: "row",
        marginVertical: scaleSize(22),
        alignItems: "center",
        justifyContent: "space-between",
    },
    heading2: {
        color: WHITE,
        fontSize: 22,
        fontFamily: "PoppinsMedium",
    },
    filterBtn: {
        backgroundColor: DARK_BLUE,
        borderRadius: wp("3.5%"),
        height: "auto",
        width: 44,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    filterOptions: {
        marginBottom: 30,
    },
    subtitle: {
        color: LIGHT_PURPLE,
        fontFamily: "PoppinsRegular",
        fontSize: 16,
    },
});

export default styles;
