import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import styles from "./styles";
import { useFonts } from "expo-font";

const CommunityCardSmall = ({ userID, name, navigation, picture }) => {
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
      onPress={() => {
        navigation.getParent().navigate("Profile", {
          user: userID,
        });
      }}
    >
      <ImageBackground
        resizeMode={"cover"}
        source={{ uri: picture }}
        style={styles.userImg}
      >
        <View style={styles.userContent}>
          <Image style={styles.userContentBackground} />
          <View style={styles.userContentRow}>
            <Text style={styles.detailBtn}>
              <Text style={styles.detailBtnText}>{name}</Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CommunityCardSmall;
