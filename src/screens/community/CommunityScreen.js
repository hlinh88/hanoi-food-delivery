import {FlatList, SafeAreaView, Text, View} from "react-native";
import CommunityCardLarge from "../../components/community-card/community-card-large/CommunityCardLarge";
import CommunityFilter from "../../components/community-filter/CommunityFilter";
import styles from "./styles";
import {useFonts} from "expo-font";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "../../config/firebase";
import {useEffect, useState} from "react";

const CommunityScreen = ({navigation}) => {
    const communityRef = collection(db, "users")
    const [community, setCommunity] = useState([])
    const fetchData = () => {
        getDocs(communityRef).then((data) => {
            setCommunity(data.docs.map((doc) => ({...doc.data(), id: doc.id, score: 0})));
        })
    }
    useEffect(() => {
        fetchData()
        setCommunity([])
    }, [])
    const mostLikeYouMaxCards = 4;
    const self = auth.currentUser.uid;

    const [loaded, error] = useFonts({
        PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
        PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }

    const mostLikeYouData = () => {
        let myCampus = "";
        let myPurpose = "";
        let myTopic = [];
        community.map((user) => {
            let id = user.id;
            if (id === self) {
                if (user.campus) myCampus = user.campus;
                if (user.subjects) myTopic = user.subjects;
                if (user.purpose) myPurpose = user.purpose;
            }
        });

        for (let i = 0; i < community.length; i++) {
            let user = community[i];
            let id = user.id;
            if (
                id !== self &&
                user.campus === myCampus
            ) {
                user.score++
            }

            if (
                id !== self &&
                user.purpose === myPurpose
            ) {
                user.score++
            }

            if (
                id !== self
            ) {
                user.subjects.map((subject) => {
                    if (myTopic.includes(subject)) user.score++
                })
            }
        }

        return community.sort(function (a, b) {
            return b.score - a.score
        })
    };

    const campus = [
        {
            id: 1,
            name: "Saigon",
        },
        {
            id: 2,
            name: "Hanoi",
        },
        {
            id: 3,
            name: "Danang",
        },
    ];

    const topic = [
        {
            id: 1,
            name: "Economics",
        },
        {
            id: 2,
            name: "Business",
        },
        {
            id: 3,
            name: "Robotics",
        },
        {
            id: 4,
            name: "Management",
        },
        {
            id: 5,
            name: "Aviation",
        },
        {
            id: 6,
            name: "Education",
        },
        {
            id: 7,
            name: "Design",
        },
        {
            id: 8,
            name: "Prof Com",
        },
        {
            id: 9,
            name: "Technology",
        },
        {
            id: 10,
            name: "Digital Marketing",
        },
        {
            id: 11,
            name: "Engineer",
        }
    ];

    const purpose = [
        {
            id: 1,
            name: "Exchange"
        },
        {
            id: 2,
            name: "Transfer",
        },
        {
            id: 3,
            name: "Get Information"
        }
    ]

    let mostLikeYouDataForDisplay
    if (community.length > 0) {
        mostLikeYouDataForDisplay = mostLikeYouData().slice(
            0,
            mostLikeYouMaxCards)
        if (mostLikeYouDataForDisplay.length === 0) {
            mostLikeYouDataForDisplay = community.slice(0, mostLikeYouMaxCards)
        }
    }

    return (
        <FlatList data={[1]} style={styles.container} renderItem={() => {
            return (
                <View>
                    <View style={styles.mostLikeYouContainer}>
                        <Text style={styles.mostLikeYouText}>Most like you</Text>
                        <SafeAreaView>
                            <FlatList
                                style={styles.mostLikeYou}
                                extraData={community}
                                data={mostLikeYouDataForDisplay}
                                horizontal={true}
                                keyExtractor={user => user.id}
                                showsHorizontalScrollIndicator={false}
                                renderItem={(user) => {
                                    return (
                                        <CommunityCardLarge
                                            userID={user.item.id}
                                            name={user.item.fullName}
                                            campus={user.item.campus}
                                            picture={user.item.avatar}
                                            topic={user.item.subjects ? user.item.subjects[Math.floor(Math.random() * 2)] : null}
                                            navigation={navigation}
                                        />
                                    );
                                }}
                            />
                        </SafeAreaView>
                    </View>

                    {community.length > 0 ?
                        <CommunityFilter
                            headingList={["campus", "subjects", "purpose"]}
                            optionList={[campus, topic, purpose]}
                            navigation={navigation}
                            userList={community}
                        /> : null}

                </View>
            )
        }}/>
    );
};

export default CommunityScreen;
