import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useEffect, useRef, useState } from "react";
import {
  LIGHT_PURPLE,
  PLACEHOLDER,
  SELECTED_BUTTON,
} from "../../styles/colors";
import CheckBox from "react-native-check-box";
import { auth, db } from "../../config/firebase";
import AlertModal from "../../components/alert-modal/AlertModal";
import { doc, getDoc } from "firebase/firestore";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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
  const signIn = ({ navigation, email = "", password = "" }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("SignIn success");
        setEmail(null);
        setPassword(null);
        setError("Sign in successful");
        setIcon("success");
        setDoNavigate(true);
        setToPage("Home");
        showModal();
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setError("Wrong password!");
          setShowAlert(true);
        }
        if (error.code === "auth/user-not-found") {
          setError("User not found!");
          setShowAlert(true);
        }
      });
  };

  const getData = () => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("Welcome");
      }
    });
  };

  const showModal = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      getData();
    }, 1000);
  };

  const checkValidate = (email, password) => {
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
    PoppinsBlack: require("../../../assets/fonts/Poppins-Black.ttf"),
    PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
    PoppinsItalic: require("../../../assets/fonts/Poppins-Italic.ttf"),
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
          <Text style={styles.textOne}>Sign in to your account</Text>
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
        </View>
        <View style={styles.midFlex}>
          <View style={styles.checkBox}>
            <CheckBox
              style={styles.checkBoxIcon}
              onClick={() => {
                setRememberMe(!rememberMe);
              }}
              isChecked={rememberMe}
              checkBoxColor={LIGHT_PURPLE}
              checkedCheckBoxColor={SELECTED_BUTTON}
            />
            <Text style={styles.checkBoxText}>Remember me</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.registerButtonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textController}>
          <Text style={styles.normalText}>
            By submitting, you agree to our{" "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Terms");
            }}
          >
            <Text style={styles.yellowText}>Terms </Text>
          </TouchableOpacity>
          <Text style={styles.normalText}>and </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Privacy")}>
            <Text style={styles.yellowText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            checkValidate(email, password);
            signIn({
              navigation,
              email,
              password,
            });
          }}
        >
          <View style={styles.loginButtonView}>
            <Text style={styles.loginButtonText}>Login</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.field}>
          <Text style={styles.label}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.registerButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;

//🇦🇺 🇦🇺
