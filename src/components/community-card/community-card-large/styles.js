import {StyleSheet} from "react-native";
import {BLACK, GREY, WHITE} from "../../../styles/colors";

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        height: 200,
        marginLeft: 20,
        marginRight: 20,
        overflow: "hidden",
        width: 160,
    },

    detailBtn: {
        borderRadius: 20,
        height: 28,
        marginLeft: 17,
        marginTop: 15,
    },


    userCampus: {
        fontSize: 12,
        height: 16,
        color: GREY,
        fontFamily: "PoppinsRegular",
    },

    userContent: {
        borderRadius: 20,
        height: 100,
        marginBottom: 20,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 10,
        width: 210,
        flexDirection: "row"
    },

    userContentColumn: {
        overflow: "hidden",
        flex: 1,
    },

    userContentRow: {
        flexWrap: "wrap",
        flexDirection: "row",
        marginTop: 5,
        height: 20,
    },

    userImg: {
        borderRadius: 20,
        height: 110,
        justifyContent: "center",
        width: "100%",
    },

    userName: {
        color: WHITE,
        fontSize: 14,
        fontFamily: "PoppinsRegular",
        height: 20,
    },

    userTopic: {
        height: 16,
        marginLeft: 10,
        marginTop: 4,
        width: 65,
        fontFamily: "PoppinsRegular",
    },
});

export default styles;
