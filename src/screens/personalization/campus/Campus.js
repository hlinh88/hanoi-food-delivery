import {
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  LogBox,
  Image,
} from "react-native";
import styles from "./styles";
import { PLACEHOLDER } from "../../../styles/colors";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();
const Campus = ({ navigation }) => {
  // handle Selected button
  const [selectedCity, setSelectedCity] = useState("");
  const [hanoiSelected, setHanoiSelected] = useState(false);
  const [danangSelected, setDanangSelected] = useState(false);
  const [saigonSelected, setSaigonSelected] = useState(false);
  const [valid, setValid] = useState(true);

  // handle Text Input value
  const [text, setText] = useState("");
  // handle font
  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const city = [
    { city: "Hanoi", selected: hanoiSelected },
    { city: "Da Nang", selected: danangSelected },
    { city: "Saigon", selected: saigonSelected },
  ];

  const handleToggle = (campus) => {
    if (campus.city === "Hanoi" && campus.selected === false) {
      setHanoiSelected(true);
    } else {
      setHanoiSelected(false);
    }

    if (campus.city === "Da Nang" && campus.selected === false) {
      setDanangSelected(true);
    } else {
      setDanangSelected(false);
    }

    if (campus.city === "Saigon" && campus.selected === false) {
      setSaigonSelected(true);
    } else {
      setSaigonSelected(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.textOne}>Tell us more about yourself</Text>
          <Text style={styles.textTwo}>Choose your current campus</Text>
          <View style={styles.textInput}>
            <TextInput
              style={styles.text}
              placeholder={"Campus in Vietnam"}
              placeholderTextColor={PLACEHOLDER}
              onChangeText={(text) => setText(text)}
              defaultValue={text}
            >
              {selectedCity}
            </TextInput>
            <FontAwesome5 name="city" size={20} color={PLACEHOLDER} />
          </View>

          <View style={styles.buttonWrapper}>
            {city.map((campus) => {
              return (
                <TouchableOpacity
                  key={campus.city}
                  style={
                    campus.selected
                      ? styles.buttonSelectedStyle
                      : styles.buttonViewStyle
                  }
                  onPress={() => {
                    handleToggle(campus);
                    if (campus.selected === false) {
                      setSelectedCity(campus.city);
                    } else {
                      setSelectedCity("");
                    }
                  }}
                >
                  <Text style={styles.textStyle}>{campus.city}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          {valid ? null : (
            <Text style={styles.errorText}>
              *Please select your current campus
            </Text>
          )}
          <TouchableOpacity
            onPress={() => {
              if (selectedCity === "") {
                setValid(false);
              } else {
                global.campus = selectedCity;
                navigation.navigate("Subject");
              }
            }}
          >
            <View style={styles.nextButtonView}>
              <Text style={styles.nextButtonText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Campus;
