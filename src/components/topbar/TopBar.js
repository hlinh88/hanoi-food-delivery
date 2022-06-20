import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import styles from "./styles";

import { useFonts } from "expo-font";

const TopBar = ({ navigation }) => {
  // handle font
  const [loaded, error] = useFonts({});
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </SafeAreaView>
  );
};

export default TopBar;
