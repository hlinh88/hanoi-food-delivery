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

const styles = StyleSheet.create({
    communityFilterContainer: {
        marginLeft: hp("2.7%"),
    },

    filterBtn: {
        backgroundColor: DARK_BLUE,
        borderRadius: wp("3.5%"),
        height: "auto",
        marginTop: hp("0.5%"),
        width: 44,
        aspectRatio: 1,
    },

    filterBtnWrapper: {
        alignItems: "flex-end",
    },

    filterIcon: {
        margin: 10,
    },

    filterSingleWrapper: {
        marginBottom: 20,
    },

    filterText: {
        color: WHITE,
        fontSize: 16,
        marginBottom: 10,
        fontFamily: "PoppinsBold",
    },

    filterWrapper: {
        margin: 2,
    },

    optionWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    seeMoreBtn: {
        color: LIGHT_PURPLE,
        fontSize: hp("1.7%"),
        fontFamily: "PoppinsBold",
    },

    seeMoreBtnContainer: {
        marginBottom: hp("7.3%"),
        marginLeft: wp("53%"),
        marginTop: hp("2%"),
    },

    submitBtn: {
        backgroundColor: SELECTED_BUTTON,
        borderColor: SELECTED_BUTTON,
        borderRadius: 10,
        borderWidth: 1,
        height: 40,
        width: 100,
    },

    submitBtnText: {
        color: WHITE,
        paddingTop: 4,
        fontSize: 20,
        textAlign: "center",
    },

    submitBtnWrapper: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
    },
});

export default styles;
