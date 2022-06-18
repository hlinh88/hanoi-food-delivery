import {SafeAreaView, FlatList, Text, View} from "react-native";
import styles from "./styles";
import RecommendationCard from "../card/RecommendationCard";
import {useFonts} from "expo-font";
import HousingFilter from "../../housing-filter/HousingFilter";

const type = [
    {
        index: 0,
        name: "dwell",
    },
    {
        index: 1,
        name: "unilodge victoria",
    },
    {
        index: 2,
        name: "570 swanston",
    },
    {
        index: 3,
        name: "unilodge carlton",
    },
];
const price = [
    {
        index: 0,
        name: "1-200",
    },
    {
        index: 1,
        name: "201-400",
    },
    {
        index: 2,
        name: "401-800",
    },
    {
        index: 3,
        name: "801-1600",
    },
    {
        index: 4,
        name: "1601+",
    },
];
const bed = [
    {
        index: 0,
        name: "1",
    },
    {
        index: 1,
        name: "2",
    },
    {
        index: 2,
        name: "3",
    },
    {
        index: 3,
        name: "4",
    },
    {
        index: 4,
        name: "5+",
    },
];
const bath = [
    {
        index: 0,
        name: "1",
    },
    {
        index: 1,
        name: "2",
    },
    {
        index: 2,
        name: "3",
    },
    {
        index: 3,
        name: "4",
    },
    {
        index: 4,
        name: "5+",
    },
];

const distanceFromRMIT = [
    {
        index: 0,
        name: "0-2",
    },
    {
        index: 1,
        name: "2-5",
    },
    {
        index: 2,
        name: "5-10",
    },
    {
        index: 3,
        name: "10+",
    },
];

const transportationType = [
    {
        index: 0,
        name: "Train",
    },
    {
        index: 1,
        name: "Tram",
    },
    {
        index: 2,
        name: "Bus",
    },
]

const RecommendationTemplate = ({
                                    topic,
                                    data,
                                    housing,
                                    navigation,
                                    transport,
                                }) => {
    let highestRating = 0;
    let trendingCard = {};

    if (data.length > 0) {
        trendingCard = data[0];
    }

    const [loaded, error] = useFonts({
        PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
        PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    });

    if (!loaded) {
        return null;
    }


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={[1]}
                keyExtractor={(item) => {
                    return item
                }}
                renderItem={() => {
                    return (
                        <View style={styles.wrapper}>
                            <Text style={styles.heading1}>Trending {topic}</Text>
                            {transport ? (
                                <Text style={styles.heading3}>
                                    Transportation stops near RMIT
                                </Text>
                            ) : null}

                            {data !== [] ? (
                                <RecommendationCard
                                    data={trendingCard}
                                    housing={housing}
                                    transport={transport}
                                />
                            ) : null}

                            <View style={styles.secondHeader}>
                                <Text style={styles.heading2}>All</Text>
                            </View>

                            <View style={styles.filterOptions}>
                                {data.length > 0 ? (
                                    <HousingFilter
                                        headingList={housing && !transport ? [
                                            "name",
                                            "price",
                                            "bed",
                                            "bath",
                                            "distance from RMIT (km)",
                                        ] : !housing && transport ? ["transportType"] : []}
                                        optionList={housing && !transport ? [type, price, bed, bath, distanceFromRMIT] : !housing && transport ? [transportationType] : []}
                                        navigation={navigation}
                                        housingList={data}
                                        isHousing={housing}
                                        transport={transport}
                                    />
                                ) : null}
                            </View>
                        </View>
                    );
                }}
            />
        </SafeAreaView>
    );
};

export default RecommendationTemplate;
