import { Image, ImageBackground, Text, View } from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import { widthPercentageToDP } from "react-native-responsive-screen";

// use replace instead of navigate to avoid the back button on Android
const SplashScreen = ({ navigation }) => {
  const [loaded, error] = useFonts({
    PoppinsExtraBold: require("../../../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  setTimeout(() => {
    navigation.replace("Home");
  }, 3600);
  return (
    <ImageBackground
      source={{
        uri: "https://c0.wallpaperflare.com/preview/59/322/367/ha-noi.jpg",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.content}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.icon}
        />
        <Image
          source={require("../../../assets/loading.gif")}
          style={styles.loading}
        />
      </View>
      <View style={styles.holdText}>
        <Text style={styles.versionText}>Version 1.0</Text>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
