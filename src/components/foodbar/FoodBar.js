import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";

const FoodBar = ({ navigation }) => {
  const [loaded, error] = useFonts({
    TTNormsBold: require("../../../assets/fonts/TTNorms-Bold.ttf"),
    TTNormsMedium: require("../../../assets/fonts/TTNorms-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.foodContainer}>
        <Image
          source={require("../../../assets/food/burger.png")}
          style={styles.foodIcon}
        />
        <Text style={styles.foodTitle}>Burgers</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FoodBar;
