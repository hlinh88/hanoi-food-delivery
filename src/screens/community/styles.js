import {StyleSheet} from "react-native";
import {WHITE, BACKGROUND} from "../../styles/colors";
import {FONT_WEIGHT_EXTRA_BOLD} from "../../styles/typography";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const responsiveFontSize = () => {
    if (wp("100%") < 330) {
        return 27;
    } else return 35;
};

// designed dimension:375 X 812

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND,
    },

    communityListContainer: {},

    communityListText: {
        color: WHITE,
        fontSize: responsiveFontSize(),
        fontWeight: FONT_WEIGHT_EXTRA_BOLD,
        fontFamily: "PoppinsBold",
        textAlign: "right",
        marginRight: 49,
        marginTop: hp("4%"),
    },

    mostLikeYou: {
        marginTop: hp("4.8%"),
    },

    mostLikeYouContainer: {
        marginLeft: wp("6.4%"),
    },

    mostLikeYouText: {
        color: WHITE,
        fontSize: hp("2.4%"),
        fontFamily: "PoppinsBold",
        marginTop: hp("6.5%"),
    },
});

export default styles;
