import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";

const Ready = ({ navigation }) => {
  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={require("../../../../assets/ready-to-go.png")}
          style={styles.image}
        />
        <Text style={styles.textOne}>You are ready to go!</Text>
        <Text style={styles.textTwo}>
          Congratulations, you are ready to view all our recommendations
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.nextButtonView}>
            <Text style={styles.nextButtonText}>Finish</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Ready;

//🇦🇺 🇦🇺
