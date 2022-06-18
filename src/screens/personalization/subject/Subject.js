import {
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  LogBox,
  Image,
} from "react-native";
import styles from "./styles";
import { PLACEHOLDER } from "../../../styles/colors";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import _ from "lodash";
import { FontAwesome5 } from "@expo/vector-icons";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const Subject = ({ navigation }) => {
  const subjects = [
    "Economics",
    "Business",
    "Engineer",
    "Robotics",
    "Management",
    "Aviation",
    "Education",
    "Design",
    "ProfComm",
    "Information Technology",
    "Digital Marketing",
  ];
  let fList = [];

  for (let i = 0; i < subjects.length; i++) {
    fList.push(false);
  }
  // handle Selected button
  const [subjectList, setSubjectList] = useState(subjects);
  const [falseList, setFalseList] = useState(fList);
  const [valid, setValid] = useState(true);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

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

  const handleList = (subject) => {
    for (let i = 0; i < subjectList.length; i++) {
      if (subjectList[i] === subject) {
        if (selectedSubjects.includes(subject)) {
          _.remove(selectedSubjects, (ele) => {
            return ele === subject;
          });
          let newArr = [...falseList];
          newArr[i] = false;
          setFalseList(newArr);
        } else {
          let newList = [...selectedSubjects];
          newList.push(subject);
          setSelectedSubjects(newList);
          let newArr = [...falseList];
          newArr[i] = true;
          setFalseList(newArr);
        }
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.wrapper}>
            <Text style={styles.textOne}>Tell us more about yourself</Text>
            <Text style={styles.textTwo}>
              Choose min.3 subjects you like, we will give you more often that
              relate to it.
            </Text>
            <View style={styles.textInput}>
              <TextInput
                style={styles.text}
                placeholder={"Programs | Subjects of interest"}
                placeholderTextColor={PLACEHOLDER}
                onChangeText={(text) => setText(text)}
                defaultValue={text}
                multiline
              >
                {_.join(selectedSubjects, " | ")}
              </TextInput>
              <FontAwesome5 name="university" size={24} color={PLACEHOLDER} />
            </View>

            <View style={styles.buttonWrapper}>
              {subjects.map((subject, index) => {
                return (
                  <TouchableOpacity
                    key={subject}
                    style={
                      falseList[index]
                        ? styles.buttonSelectedStyle
                        : styles.buttonViewStyle
                    }
                    onPress={() => {
                      handleList(subject);
                    }}
                  >
                    <Text style={styles.textStyle}>{subject}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <Text style={styles.selectedText}>
              {selectedSubjects.length} topics Selected
            </Text>
            {valid ? null : (
              <Text style={styles.errorText}>
                *Please select minimum 3 subjects
              </Text>
            )}
            <TouchableOpacity
              onPress={() => {
                if (selectedSubjects.length < 3) {
                  setValid(false);
                } else {
                  global.subjects = selectedSubjects;
                  navigation.navigate("Form");
                }
              }}
            >
              <View style={styles.nextButtonView}>
                <Text style={styles.nextButtonText}>Next</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Campus")}>
              <View style={styles.backButtonView}>
                <Text style={styles.backButtonText}>Back</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Subject;
