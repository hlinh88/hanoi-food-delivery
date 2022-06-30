import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  FlatList,
  Image,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { PLACEHOLDER, WHITE } from "../../styles/colors";
import { useState } from "react";

const SearchBar = ({ navigation }) => {
  const [search, setSearch] = useState(null);
  const [loaded, error] = useFonts({
    TTNormsBold: require("../../../assets/fonts/TTNorms-Bold.ttf"),
    TTNormsMedium: require("../../../assets/fonts/TTNorms-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <View style={styles.searchHolder}>
          <FontAwesome
            name="search"
            size={18}
            color={PLACEHOLDER}
            style={{ marginRight: 10 }}
          />
          <TextInput
            style={styles.searchText}
            placeholder={"Search your delicious food"}
            placeholderTextColor={PLACEHOLDER}
            onTextChange={(text) => setSearch(text)}
          >
            {search}
          </TextInput>
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
