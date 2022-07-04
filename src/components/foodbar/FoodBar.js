import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  FlatList,
  Image,
  View,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";

const FoodBar = ({ navigation }) => {
  let foods = [
    { icon: require("../../../assets/food/rice-bowl.png"), title: "Rice" },
    { icon: require("../../../assets/food/ramen.png"), title: "Noodles" },
    { icon: require("../../../assets/food/coffee-cup.png"), title: "Coffee" },
    { icon: require("../../../assets/food/bubble-tea.png"), title: "Tea" },
    {
      icon: require("../../../assets/food/burger.png"),
      title: "Fas\u200bt Food",
    },
    { icon: require("../../../assets/food/salad.png"), title: "Healthy" },
    { icon: require("../../../assets/food/sushi.png"), title: "Japanese" },
    { icon: require("../../../assets/food/dimsum.png"), title: "Chinese" },
    { icon: require("../../../assets/food/taco.png"), title: "Mexican" },
    { icon: require("../../../assets/food/cupcake.png"), title: "Dessert" },
  ];

  const [loaded, error] = useFonts({
    TTNormsBold: require("../../../assets/fonts/TTNorms-Bold.ttf"),
    TTNormsMedium: require("../../../assets/fonts/TTNorms-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={foods}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return <FoodItem item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const FoodItem = ({ item }) => (
  <View>
    <TouchableOpacity style={styles.foodItem}>
      <Image source={item.icon} style={styles.foodIcon} />
      <Text style={styles.foodTitle}>{item.title}</Text>
    </TouchableOpacity>
  </View>
);

export default FoodBar;
