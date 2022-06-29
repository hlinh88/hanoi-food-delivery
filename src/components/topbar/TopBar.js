import { Text, SafeAreaView, TouchableOpacity, Platform } from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TOP_BAR } from "../../styles/colors";
import { useEffect, useState } from "react";

const TopBar = ({ navigation }) => {
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);

  const [loaded, error] = useFonts({
    TTNormsBold: require("../../../assets/fonts/TTNorms-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="ios-location-sharp" size={24} color={TOP_BAR} />
      </TouchableOpacity>
      <Text style={styles.location}>
        Latitude: {latitude} | Latitude: {longitude}
      </Text>
    </SafeAreaView>
  );
};

export default TopBar;
