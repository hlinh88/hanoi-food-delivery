import {
    Image,
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import styles from "./styles";
import {AntDesign} from '@expo/vector-icons';
import {useFonts} from "expo-font";

const CommunityCardLarge = ({
                                userID,
                                name,
                                picture,
                                topic,
                                campus,
                                navigation,
                                prevPage,
                            }) => {
    const [loaded, error] = useFonts({
        PoppinsExtraBold: require("../../../../assets/fonts/Poppins-ExtraBold.ttf"),
        PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <TouchableOpacity
            key={userID}
            style={styles.card}
            onPress={prevPage === "CommunitySeeMore" ? () => {
                navigation.navigate("Profile", {
                    user: userID,
                })
            } : () => {
                navigation.getParent().navigate("Profile", {
                    user: userID,
                });
            }}
        >
            <Image
                source={{uri: picture !== "" ? picture : "https://i.ibb.co/89Pr4tx/on.png"}}
                style={styles.userImg}
            />
            <View style={styles.userContent}>
                <View style={styles.userContentColumn}>
                    <View style={styles.userContentRow}>
                        <Text style={styles.userName}>{name}</Text>
                    </View>
                    <View style={styles.userContentRow}>
                        <Text style={styles.userCampus}>{campus}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CommunityCardLarge;
