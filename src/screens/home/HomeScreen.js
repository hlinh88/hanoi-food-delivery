import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

const HomeScreen = ({ navigation }) => {
  // handle font
  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("../../../assets/fonts/Poppins-ExtraBold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.melbourneBackpackText}>Melbourne Backpack</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.furtherButton}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Discover")}
          >
            <ImageBackground
              resizeMode={"cover"}
              source={{
                uri: "https://www.amec.com.vn/wp-content/uploads/2020/09/CS-RMIT.jpg",
              }}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.overlay}>
                <Text style={styles.subtitle}>Explore</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.furtherButton}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Content", { screen: "Community" })
            }
          >
            <ImageBackground
              resizeMode={"cover"}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/home-images%2Fcommunity.jpg?alt=media&token=ea9c7526-65c0-4fa2-8c5f-a58269c774a8",
              }}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.overlay}>
                <Text style={styles.subtitle}>Community</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.furtherButton}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Content", { screen: "Housing" })
            }
          >
            <ImageBackground
              resizeMode={"cover"}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/home-images%2Fhousing.jpg?alt=media&token=15262b1d-316d-4620-8ebc-c03f088e48f0",
              }}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.overlay}>
                <Text style={styles.subtitle}>Housing</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.furtherButton}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Content", { screen: "Shopping" })
            }
          >
            <ImageBackground
              resizeMode={"cover"}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/home-images%2Fshopping.jpg?alt=media&token=33ed2e47-b9f8-42f5-b50d-abab85867f82",
              }}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.overlay}>
                <Text style={styles.subtitle}>Shopping</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.furtherButton}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Content", { screen: "Transport" })
            }
          >
            <ImageBackground
              resizeMode={"cover"}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/home-images%2Ftransport.jpg?alt=media&token=30a1afb6-9f09-475b-817e-62ed086677e1",
              }}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.overlay}>
                <Text style={styles.subtitle}>Transport</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.furtherButtonLast}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Content", { screen: "Profile" })
            }
          >
            <ImageBackground
              resizeMode={"cover"}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/home-images%2Fprofile.jpg?alt=media&token=182e68fd-0397-44f0-8400-60e144768978",
              }}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.overlay}>
                <Text style={styles.subtitle}>Profile</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
