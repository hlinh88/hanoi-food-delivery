import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TOPBAR } from "../../styles/colors";

const TopBar = ({ navigation }) => {
  // handle font
  const [loaded, error] = useFonts({});
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="ios-location-sharp" size={24} color={TOPBAR} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TopBar;
