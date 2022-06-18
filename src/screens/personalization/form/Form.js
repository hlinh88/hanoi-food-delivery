import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import { useEffect, useState, useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import { PLACEHOLDER, SELECTED_BUTTON, WHITE } from "../../../styles/colors";
import { pushData } from "../../../api/handleData";
import { auth, storage } from "../../../config/firebase";
import Dropdown from "../../../components/dropdown/Dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign, Entypo } from "@expo/vector-icons";

let data = ["Exchange", "Transfer", "Get Information"];

const Form = ({ navigation }) => {
  const [image, setImage] = useState("");

  // Information
  const [avatar, setAvatar] = useState("");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [purpose, setPurpose] = useState("");
  const [facebook, setFacebook] = useState("");
  const [bio, setBio] = useState("");

  const [date, setDate] = useState(new Date(Date.now()));
  const [open, setOpen] = useState(false);

  const [fullNameValidate, setFullNameValidate] = useState({
    error: "",
    valid: false,
  });
  const [dobValidate, setDobValidate] = useState({
    error: "",
    valid: false,
  });
  const [purposeValidate, setPurposeValidate] = useState({
    error: "",
    valid: false,
  });
  const [facebookValidate, setFacebookValidate] = useState({
    error: "",
    valid: false,
  });
  const [bioValidate, setBioValidate] = useState({ error: "", valid: false });
  const [imageValidate, setImageValidate] = useState({
    error: "",
    valid: false,
  });

  const [hasPermission, setHasPermission] = useState(null);

  const [selectedItem, setSelectedItem] = useState(null);

  const onSelected = (item) => {
    setSelectedItem(item);
    setPurpose(item);
  };

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    if (hasPermission === false) {
      window.alert(
        "No permission! Go to settings and allow Melbourne Backpack to access your library."
      );
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        maxWidth: 300,
        maxHeight: 300,
        quality: 0.3,
      });

      // console.log(result);

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };

  const uploadImage = async (uri, filename) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();

      storage
        .ref(`avatar/${filename}`)
        .put(blob)
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
            console.log("download URL", url);
            setAvatar(url);
          });
        });
    } catch (e) {
      console.log("Error upload image", e);
    }
  };

  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      uploadImage(
        image,
        auth.currentUser.uid +
          "." +
          image
            .substring(image.lastIndexOf("/") + 1)
            .split(".")
            .pop()
      );
    } else {
      didMount.current = true;
    }
  }, [image]);

  // handle font
  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const checkValidate = (component) => {
    if (component === image && image === "") {
      setImageValidate({ error: "*Avatar is required", valid: false });
    } else {
      setImageValidate({ error: "", valid: true });
    }
    if (component === fullName && fullName === "") {
      setFullNameValidate({ error: "*Full name is required", valid: false });
    } else {
      setFullNameValidate({ error: "", valid: true });
    }

    if (component === dob && purpose === "") {
      setDobValidate({ error: "*Date of birth is required", valid: false });
    } else {
      setDobValidate({ error: "", valid: true });
    }

    if (component === purpose && purpose === "") {
      setPurposeValidate({ error: "*Purpose is required", valid: false });
    } else {
      setPurposeValidate({ error: "", valid: true });
    }
    if (component === purpose && purpose === "") {
      setPurposeValidate({ error: "*Purpose is required", valid: false });
    } else {
      setPurposeValidate({ error: "", valid: true });
    }
    if (component === facebook && facebook !== "") {
      if (!facebook.includes("facebook.com/")) {
        setFacebookValidate({
          error: "*Facebook link must be format facebook.com/...",
          valid: false,
        });
      } else if (facebook === "" || facebook.includes("facebook.com/")) {
        setFacebookValidate({ error: "", valid: true });
      }
    } else if (facebook === "") {
      setFacebookValidate({ error: "", valid: true });
    }
    if (component === bio && bio === "") {
      setBioValidate({ error: "*Introduction is required", valid: false });
    } else if (bio.length < 1 || bio.length > 500) {
      setBioValidate({
        error: "*Introduction must be between 50 and 500 characters.",
        valid: false,
      });
    } else {
      setBioValidate({ error: "", valid: true });
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
            <TouchableOpacity onPress={pickImage}>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={
                    image === ""
                      ? require("../../../../assets/avatar-default.png")
                      : { uri: image }
                  }
                  style={styles.avatarImage}
                />
              </View>

              <View style={{ alignItems: "center" }}>
                <Text style={styles.avatarText}>Upload avatar*</Text>
                <Text style={styles.errorImage}>{imageValidate.error}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.textInput}>
              <TextInput
                style={styles.text}
                placeholder={"Full Name*"}
                placeholderTextColor={PLACEHOLDER}
                onChangeText={(text) => {
                  setFullName(text);
                }}
                defaultValue={fullName}
                multiline
              />
              <AntDesign name="idcard" size={20} color={PLACEHOLDER} />
            </View>

            <View style={styles.errorHolder}>
              <Text style={styles.error}>{fullNameValidate.error}</Text>
            </View>

            <View style={styles.dobWrapper}>
              <TouchableOpacity
                onPress={() => setOpen(!open)}
                style={styles.dob}
              >
                <Text
                  style={{
                    color: dob ? WHITE : PLACEHOLDER,
                    fontFamily: "PoppinsMedium",
                  }}
                >
                  {dob ? dob : "Date of birth*"}
                </Text>
                <Entypo name="calendar" size={20} color={PLACEHOLDER} />
              </TouchableOpacity>
              {open && (
                <DateTimePicker
                  mode="date"
                  display="spinner"
                  value={date}
                  onChange={(event, value) => {
                    setDate(value);
                    setDob(
                      value.getUTCDate() +
                        "/" +
                        (value.getUTCMonth() + 1) +
                        "/" +
                        value.getUTCFullYear()
                    );
                  }}
                  style={{
                    width: 320,
                    height: 260,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    textColor: WHITE,
                  }}
                  textColor={WHITE}
                  themeVariant="dark"
                  locale="en-ES"
                />
              )}
            </View>
            <View style={styles.errorHolder}>
              <Text style={styles.error}>{dobValidate.error}</Text>
            </View>

            <Dropdown
              data={data}
              onSelected={onSelected}
              value={selectedItem}
            />
            <View style={styles.errorHolder}>
              <Text style={styles.error}>{purposeValidate.error}</Text>
            </View>

            <View style={styles.textInput}>
              <TextInput
                style={styles.text}
                placeholder={"Facebook Link"}
                placeholderTextColor={PLACEHOLDER}
                onChangeText={(text) => {
                  setFacebook(text);
                }}
                defaultValue={facebook}
                multiline
              />
              <AntDesign name="facebook-square" size={24} color={PLACEHOLDER} />
            </View>

            <View style={styles.errorHolder}>
              <Text style={styles.error}>{facebookValidate.error}</Text>
            </View>
            <View style={styles.textInput}>
              <TextInput
                style={[styles.text, styles.introduction]}
                placeholder={"Introduce yourself*"}
                placeholderTextColor={PLACEHOLDER}
                onChangeText={(text) => {
                  setBio(text);
                }}
                defaultValue={bio}
                multiline
              />
            </View>

            <View style={styles.errorHolder}>
              <Text style={styles.error}>{bioValidate.error}</Text>
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
            {!(
              imageValidate.valid &&
              fullNameValidate.valid &&
              purposeValidate.valid &&
              facebookValidate.valid &&
              bioValidate.valid
            ) && (
              <TouchableOpacity
                onPress={() => {
                  checkValidate(image);
                  checkValidate(fullName);
                  checkValidate(dob);
                  checkValidate(purpose);
                  checkValidate(facebook);
                  checkValidate(bio);
                }}
              >
                <View style={styles.nextButtonView}>
                  <Text style={styles.nextButtonText}>Validate</Text>
                </View>
              </TouchableOpacity>
            )}
            {!(
              imageValidate.valid &&
              dobValidate.valid &&
              fullNameValidate.valid &&
              purposeValidate.valid &&
              facebookValidate.valid &&
              bioValidate.valid
            ) && (
              <TouchableOpacity onPress={() => navigation.navigate("Campus")}>
                <View style={styles.backButtonView}>
                  <Text style={styles.backButtonText}>Back</Text>
                </View>
              </TouchableOpacity>
            )}
            {imageValidate.valid &&
              fullNameValidate.valid &&
              purposeValidate.valid &&
              facebookValidate.valid &&
              bioValidate.valid && (
                <TouchableOpacity
                  onPress={() => {
                    pushData(
                      auth.currentUser.uid,
                      global.campus,
                      global.subjects,
                      auth.currentUser?.email,
                      avatar,
                      fullName,
                      dob,
                      purpose,
                      facebook,
                      bio
                    );
                    navigation.navigate("Ready");
                  }}
                >
                  <View style={styles.nextButtonView}>
                    <Text style={styles.nextButtonText}>Submit</Text>
                  </View>
                </TouchableOpacity>
              )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Form;
