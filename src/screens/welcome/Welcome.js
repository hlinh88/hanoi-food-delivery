import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import { auth } from "../../config/firebase";

const Welcome = ({ navigation }) => {
  const [loaded, error] = useFonts({
    PoppinsThin: require("../../../assets/fonts/Poppins-Thin.ttf"),
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.firstText}>Welcome to Melbourne Backpack!</Text>
        <Text style={styles.secondText}>Customize Your Needs</Text>
        <Text style={styles.thirdText}>
          Tell us who you are to get the best experiences.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Campus")}>
            <View style={styles.viewButton}>
              <Text style={styles.textButton}>Personalize your account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

//🇦🇺 🇦🇺
