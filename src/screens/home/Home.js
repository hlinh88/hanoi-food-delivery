import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import TopBar from "../../components/topbar/TopBar";
import FoodBar from "../../components/foodbar/FoodBar";
import SearchBar from "../../components/searchbar/SearchBar";

const Home = ({ navigation }) => {
  // handle font
  const [loaded, error] = useFonts({});
  if (!loaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TopBar />
      <SearchBar />
      <FoodBar />
    </KeyboardAvoidingView>
  );
};

export default Home;
