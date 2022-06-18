import { Text, View } from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";

const Tag = ({ text }) => {
  const [loaded, error] = useFonts({
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.tag}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Tag;
