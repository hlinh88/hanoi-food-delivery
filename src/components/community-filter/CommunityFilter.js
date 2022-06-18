import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
} from "react-native";
import styles from "./styles";
import {Ionicons} from "@expo/vector-icons";
import {LIGHT_BLUE} from "../../styles/colors";
import CommunityFilterBtn from "./CommunityFilterBtn/CommunityFilterBtn";
import React, {useState} from "react";
import CommunityCardSmall from "../community-card/community-card-small/CommunityCardSmall";
import {useFonts} from "expo-font";
import CommunityDisplayByFilter from "../community-display/CommunityDisplayByFilter";

const CommunityFilter = ({headingList, optionList, navigation, userList}) => {
    /*read 2 arrays, 1 for headings, 1 for options, each heading will be displayed with the corresponding data in 1 view*/
    const headings = headingList;
    const options = optionList;
    const [show, setShow] = useState(false);
    const [data, setData] = useState(userList);
    const filterMaxCardsPerPageInitial = 6;
    const filterMaxCardsPerPage = 6;
    const [filterMaxCards, setFilterMaxCards] = useState(
        filterMaxCardsPerPageInitial
    );
    // const filter = {};
    let filter = useState();
    const [submitted, setSubmitted] = useState(false);
    const [loaded, error] = useFonts({
        PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
        PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }


    /* start at -1 instead of 0 because i++ is put before return (in toggle function for filter btn */
    let i = -1;
    return (
        <View style={styles.communityFilterContainer}>
            {/*<View style={styles.filterBtnWrapper}>*/}
            {/*    <TouchableOpacity*/}
            {/*        style={styles.filterBtn}*/}
            {/*        onPress={() => setShow(!show)}*/}
            {/*    >*/}
            {/*        <Ionicons*/}
            {/*            name="filter"*/}
            {/*            size={24}*/}
            {/*            color={LIGHT_BLUE}*/}
            {/*            style={styles.filterIcon}*/}
            {/*        />*/}
            {/*    </TouchableOpacity>*/}
            {/*</View>*/}
            <View>
                {/* filter toggle btn */}
                <View>
                    {headings.map((heading) => {
                        i++;
                        let optionList = options[i];
                        filter[heading] = [];
                        if (data.length > 0)
                            return (
                                // <View key={heading} style={styles.filterSingleWrapper}>
                                //     <Text style={styles.filterText}>
                                //         {"Filtered by " + heading.slice(0, 1).toUpperCase() +
                                //             heading.slice(1, heading.length)}
                                //     </Text>
                                //     <View style={styles.optionWrapper}>
                                //         {optionList.map((option) => {
                                //             return (
                                //                 <CommunityFilterBtn
                                //                     key={option.index}
                                //                     value={option.name}
                                //                     filter={filter}
                                //                     heading={heading}
                                //                     submitted={submitted}
                                //                 />
                                //             );
                                //         })}
                                //     </View>
                                // </View>
                                <CommunityDisplayByFilter userList={userList} heading={heading}
                                                          filterMaxCards={filterMaxCards}
                                                          optionList={optionList}
                                                          key={heading}
                                                          navigation={navigation}/>
                            );
                    })}
                    {/*<View style={styles.submitBtnWrapper}>*/}
                    {/*    <TouchableOpacity*/}
                    {/*        style={styles.submitBtn}*/}
                    {/*        onPress={() => {*/}
                    {/*            setSubmitted((prev) => !prev);*/}
                    {/*            setData([]);*/}
                    {/*            let filterListLength = 0*/}
                    {/*            headings.map((heading) => {*/}
                    {/*                if (filter[heading].length > 0) {*/}
                    {/*                    filterListLength++*/}
                    {/*                }*/}
                    {/*            })*/}
                    {/*            userList.map((user) => {*/}
                    {/*                let checked = 0*/}
                    {/*                headings.map((heading) => {*/}
                    {/*                    let count = 0*/}
                    {/*                    filter[heading].map((option) => {*/}
                    {/*                        count++*/}
                    {/*                        if (*/}
                    {/*                            user[heading] === option ||*/}
                    {/*                            user[heading].includes(option)*/}
                    {/*                        ) {*/}
                    {/*                            checked++*/}
                    {/*                        }*/}
                    {/*                    })*/}
                    {/*                })*/}
                    {/*                if (filterListLength === checked) {*/}
                    {/*                    setData(prevState => [...prevState, user])*/}
                    {/*                }*/}
                    {/*            });*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        <Text style={styles.submitBtnText}>Apply</Text>*/}
                    {/*    </TouchableOpacity>*/}
                    {/*</View>*/}
                </View>

                {/*<SafeAreaView style={styles.communityList}>*/}
                {/*    {*/}
                {/*        data.length > 0 ?*/}
                {/*            <FlatList*/}
                {/*                extraData={data}*/}
                {/*                data={data.slice(0, filterMaxCards)}*/}
                {/*                horizontal={false}*/}
                {/*                numColumns={3}*/}
                {/*                renderItem={(user) => {*/}
                {/*                    return (*/}
                {/*                        <CommunityCardSmall*/}
                {/*                            userID={user.item.id}*/}
                {/*                            name={user.item.fullName}*/}
                {/*                            picture={user.item.avatar}*/}
                {/*                            navigation={navigation}*/}
                {/*                        />*/}
                {/*                    );*/}
                {/*                }}*/}
                {/*            /> : null*/}
                {/*    }*/}
                {/*</SafeAreaView>*/}

            </View>
        </View>
    );
};

export default CommunityFilter;
