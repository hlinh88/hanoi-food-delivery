import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TOP_BAR } from "../../styles/colors";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { AntDesign } from "@expo/vector-icons";

const TopBar = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      let address = await Location.reverseGeocodeAsync(location.coords);
      setAddress(address[0].name);
    })();
  }, []);

  let text = "Loading..";
  if (errorMsg) {
    text = errorMsg;
  }

  const [loaded, error] = useFonts({
    TTNormsBold: require("../../../assets/fonts/TTNorms-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.locationHolder}>
        <Ionicons name="ios-location-sharp" size={24} color={TOP_BAR} />
        {address ? (
          <Text style={styles.location}>{address}</Text>
        ) : (
          <Image
            source={require("../../../assets/loading_location.gif")}
            style={styles.loading}
          />
        )}
        <AntDesign
          name="caretdown"
          size={13}
          color={TOP_BAR}
          style={{ marginLeft: 5 }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TopBar;
