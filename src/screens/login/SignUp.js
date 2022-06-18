import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { PLACEHOLDER } from "../../styles/colors";
import { auth } from "../../config/firebase";
import AlertModal from "../../components/alert-modal/AlertModal";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const [icon, setIcon] = useState("alert");
  const [doNavigate, setDoNavigate] = useState(false);
  const [toPage, setToPage] = useState("");

  const [validate, setValidate] = useState({
    error: "",
    valid: false,
  });

  const setShowAlertFunction = (showAlert) => {
    setShowAlert(showAlert);
  };

  const setError = (error) => {
    setValidate({
      error: error,
      valid: false,
    });
  };

  const showModal = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      navigation.navigate("SignIn");
    }, 4000);
  };

  const signUp = ({ navigation }, email, password, cfPassword) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Create user: ", email);
        setError("Sign Up successful");
        setIcon("success");
        setDoNavigate(true);
        setToPage("SignIn");
        showModal();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("That email address is already in use!");
          setShowAlert(true);
        }
      });
  };

  const checkValidate = (email, password, cfPassword) => {
    if (email === "") {
      setValidate({ error: "*Email is required", valid: false });
      setShowAlert(true);
    } else if (!email.includes("@")) {
      setValidate({
        error: "*Email must be in format email@something.com",
        valid: false,
      });
      setShowAlert(true);
    } else if (password === "") {
      setValidate({ error: "*Password is required", valid: false });
      setShowAlert(true);
    } else if (password !== cfPassword) {
      setValidate({
        error: "*Password and confirm password does not match",
        valid: false,
      });
      setShowAlert(true);
    } else if (password.length < 6) {
      setValidate({
        error: "*Password length must be more than 6",
        valid: false,
      });
      setShowAlert(true);
    } else {
      setValidate({ error: "", valid: true });
      setShowAlert(false);
    }
  };

  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={20}
        behavior="padding"
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.wrapper}>
            <Image
              source={require("../../../assets/adaptive-icon.png")}
              style={styles.icon}
            />
            <AlertModal
              navigation={navigation}
              showModal={showAlert}
              setShowModalFunction={setShowAlertFunction}
              message={validate.error}
              icon={icon}
              doNavigate={doNavigate}
              toPage={toPage}
            />
            <View style={styles.loginField}>
              <Text style={styles.textOne}>Sign up your account</Text>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.text}
                  placeholder={"Email"}
                  keyboardType={"email-address"}
                  placeholderTextColor={PLACEHOLDER}
                  onChangeText={(text) => setEmail(text)}
                  defaultValue={email}
                />
                <MaterialIcons name="email" size={20} color={PLACEHOLDER} />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.text}
                  placeholder={"Password"}
                  placeholderTextColor={PLACEHOLDER}
                  onChangeText={(text) => setPassword(text)}
                  defaultValue={password}
                  secureTextEntry={true}
                />
                <Entypo name="lock" size={20} color={PLACEHOLDER} />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.text}
                  placeholder={"Confirm Password"}
                  placeholderTextColor={PLACEHOLDER}
                  onChangeText={(text) => setCfPassword(text)}
                  defaultValue={cfPassword}
                  secureTextEntry={true}
                />
                <Entypo name="lock" size={20} color={PLACEHOLDER} />
              </View>
              <TouchableOpacity
                onPress={() => {
                  checkValidate(email, password, cfPassword);
                  signUp({ navigation }, email, password, cfPassword);
                }}
              >
                <View style={styles.loginButtonView}>
                  <Text style={styles.loginButtonText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Already got an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.registerButtonText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

//🇦🇺 🇦🇺
