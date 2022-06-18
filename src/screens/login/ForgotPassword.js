import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { PLACEHOLDER, WHITE } from "../../styles/colors";
import AlertModal from "../../components/alert-modal/AlertModal";
import { auth } from "../../config/firebase";
import { MaterialIcons } from "@expo/vector-icons";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const [icon, setIcon] = useState("alert");
  const [doNavigate, setDoNavigate] = useState(false);
  const [toPage, setToPage] = useState("");

  const [validate, setValidate] = useState({
    error: "",
    valid: false,
  });

  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const setShowAlertFunction = (showAlert) => {
    setShowAlert(showAlert);
  };

  const setError = (error) => {
    setValidate({
      error: error,
      valid: false,
    });
  };

  const checkValidate = (email) => {
    if (email === "") {
      setValidate({ error: "*Email is required", valid: false });
      setShowAlert(true);
    } else if (!email.includes("@")) {
      setValidate({
        error: "*Email must be in format email@something.com",
        valid: false,
      });
      setShowAlert(true);
    } else {
      setValidate({ error: "", valid: true });
      setShowAlert(false);
    }
  };

  const showModal = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      navigation.navigate("EmailSent");
    }, 4000);
  };

  const emailVerification = ({ navigation }, email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("Password reset email sent!");
        setError("Password reset email sent");
        setIcon("success");
        setDoNavigate(true);
        setToPage("EmailSent");
        global.emailSent = email;
        showModal();
      })
      .catch((error) => {
        setError(error.toString());
        setShowAlert(true);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={20}
        behavior="padding"
        style={styles.container}
      >
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
            <Text style={styles.textOne}>Forget Password</Text>
            <Text style={styles.textTwo}>
              Please fill email or phone number and we'll send you a link to get
              back into your account.
            </Text>
            <View style={styles.textInput}>
              <TextInput
                style={styles.text}
                placeholder={"Email"}
                keyboardType={"email-address"}
                placeholderTextColor={WHITE}
                onChangeText={(text) => setEmail(text)}
                defaultValue={email}
              />
              <MaterialIcons name="email" size={20} color={PLACEHOLDER} />
            </View>
            <TouchableOpacity
              onPress={() => {
                emailVerification({ navigation }, email);
                checkValidate(email);
                // navigation.navigate("EmailSent", { email: email });
              }}
            >
              <View style={styles.loginButtonView}>
                <Text style={styles.loginButtonText}>Submit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <View style={styles.cancelButtonView}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;

//🇦🇺 🇦🇺
