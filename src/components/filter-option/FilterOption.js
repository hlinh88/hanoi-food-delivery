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
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { BLACK } from "../../styles/colors";

const FilterOption = ({ navigation }) => {
  // handle font
  const [loaded, error] = useFonts({});
  if (!loaded) {
    return null;
  }

  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer}>
          <MaterialCommunityIcons
            name="ticket-percent"
            size={15}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.buttonText}>Promotion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Entypo
            name="hand"
            size={15}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.buttonText}>Pickup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <AntDesign
            name="star"
            size={15}
            color={BLACK}
            style={{ marginRight: 5 }}
          />
          <Text style={styles.buttonText}>Ratings</Text>
          <AntDesign
            name="down"
            size={10}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <AntDesign
            name="clockcircle"
            size={15}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.buttonText}>Under 30 min</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <MaterialIcons
            name="attach-money"
            size={15}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.buttonText}>Price</Text>
          <AntDesign
            name="down"
            size={10}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FilterOption;
