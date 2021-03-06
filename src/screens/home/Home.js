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
import FilterOption from "../../components/filter-option/FilterOption";

const Home = ({ navigation }) => {
  // handle font
  const [loaded, error] = useFonts({});
  if (!loaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <TopBar />
      <SearchBar />
      <FoodBar />
      <FilterOption />
    </ScrollView>
  );
};

export default Home;
