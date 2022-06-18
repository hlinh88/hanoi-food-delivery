import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TouchableOpacityComponent,
} from "react-native";
import styles from "./styles";
import { useEffect, useRef, useState } from "react";
import CommunityCardLarge from "../community-card/community-card-large/CommunityCardLarge";
import CommunityScreenSeeMore from "../../screens/community-see-more/CommunityScreenSeeMore";
import Modal from "react-native-modal";
import { useIsFocused } from "@react-navigation/native";

const CommunityDisplayByFilter = ({
  heading,
  optionList,
  userList,
  filterMaxCards,
  navigation,
}) => {
  const [selectedOption, setSelectedOption] = useState(optionList[0].name);
  const [temp, setTemp] = useState(userList);
  const flatListRef = useRef();
  const [showMore, setShowMore] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const options = optionList;
  const isFocused = useIsFocused();
  useEffect(() => {
    const filterCards = [];
    userList.map((item) => {
      let check = 0;
      if (
        item[heading] === selectedOption ||
        item[heading].includes(selectedOption)
      )
        check++;
      if (check > 0) filterCards.push(item);
    });
    setTemp(filterCards);
  }, [selectedOption]);

  useEffect(() => {
    setShowMore(false);
  }, [isFocused]);

  return (
    <View key={heading}>
      <View style={styles.headingRow}>
        <View>
          <Text style={styles.filterText}>
            {"Filtered by " +
              heading.slice(0, 1).toUpperCase() +
              heading.slice(1, heading.length)}
          </Text>
        </View>
        <View style={styles.seeMoreWrapper}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CommunitySeeMore", {
                heading: heading,
                option: selectedOption,
                data: temp,
                show: setShowMore,
              })
            }
          >
            <Text style={styles.seeMoreText}>See more</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.optionWrapper}>
        <FlatList
          data={options}
          extraData={options}
          keyExtractor={(option) => option.id}
          horizontal={true}
          renderItem={(option) => {
            if (option.item.name !== selectedOption)
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedOption(option.item.name);
                    flatListRef.current.scrollToOffset({
                      animation: false,
                      offset: 0,
                    });
                  }}
                >
                  <Text style={styles.optionText}>{option.item.name}</Text>
                </TouchableOpacity>
              );
            if (option.item.name === selectedOption)
              return (
                <TouchableOpacity>
                  <Text style={styles.optionTextSelected}>
                    {option.item.name}
                  </Text>
                </TouchableOpacity>
              );
          }}
        />
      </View>
      <SafeAreaView style={styles.communityList}>
        {
          <FlatList
            extraData={temp}
            ref={flatListRef}
            data={temp.slice(0, filterMaxCards)}
            horizontal={true}
            numColumns={1}
            keyExtractor={(user) => user.id}
            renderItem={(user) => {
              return (
                <CommunityCardLarge
                  userID={user.item.id}
                  name={user.item.fullName}
                  campus={user.item.campus}
                  picture={user.item.avatar}
                  topic={
                    user.item.subjects
                      ? user.item.subjects[Math.floor(Math.random() * 2)]
                      : null
                  }
                  navigation={navigation}
                />
              );
            }}
          />
        }
      </SafeAreaView>
    </View>
  );
};

export default CommunityDisplayByFilter;
