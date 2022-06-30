import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import TopBar from "../../components/topbar/TopBar";
import FoodBar from "../../components/foodbar/FoodBar";

const Home = ({ navigation }) => {
  // handle font
  const [loaded, error] = useFonts({});
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <FoodBar />
    </View>
  );
};

export default Home;
