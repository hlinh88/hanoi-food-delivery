import {StyleSheet} from "react-native";
import {
    DARK_BLUE,
    LIGHT_PURPLE,
    SELECTED_BUTTON,
    WHITE,
} from "../../styles/colors";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {BACKGROUND} from "../../styles/colors";

const styles = StyleSheet.create({

    cardContainer: {
        alignItems: "center",
    },

    heading: {
        fontFamily: "PoppinsBold",
        fontSize: 20,
        color: WHITE,
        alignSelf: "center",
        marginLeft: 5,
        marginRight: 5
    },

    headingRow: {
        marginTop: 20,
        marginBottom: 30,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },

    container: {
        backgroundColor: BACKGROUND,
        paddingTop: hp(3),
        paddingRight: wp(5),
        paddingLeft: wp(5),
    },

    seeMoreBtn: {
        color: WHITE,
        fontSize: hp("1.7%"),
        fontFamily: "PoppinsBold",
    },

    seeMoreBtnContainer: {
        marginBottom: hp("7.3%"),
        marginLeft: "auto",
        marginRight: 12,
        marginTop: hp("2%"),
    },
})

export default styles