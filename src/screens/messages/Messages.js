import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  RefreshControl,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { PLACEHOLDER, WHITE } from "../../styles/colors";
import { auth, database, db } from "../../config/firebase";
import { useEffect, useRef, useState, useCallback } from "react";
import { doc, getDoc } from "firebase/firestore";
import { get, set, ref, onValue, push, update } from "firebase/database";
import { useIsFocused } from "@react-navigation/native";
import Modal from "react-native-modal";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Messages = ({ navigation, route }) => {
  const [search, setSearch] = useState("");

  const [data, setData] = useState([]);

  const [uid, setUid] = useState(null);
  const [users, setUsers] = useState([]);
  const [userToAdd, setUserToAdd] = useState(null);
  const [myData, setMyData] = useState({});
  const [myMessagesData, setMyMessagesData] = useState([]);
  const [myTimeData, setMyTimeData] = useState([]);
  const [friendText, setFriendText] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  const [toast, setToast] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const [uidToAdd, setUidToAdd] = useState("");
  const [error, setError] = useState(null);
  const [itemSelected, setItemSelected] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);

  const isFocused = useIsFocused();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const showModal = () => {
    setToast(true);

    setTimeout(() => {
      setToast(false);
      setOpenMenu(false);
    }, 1200);
  };

  const getUserData = async (uid) => {
    await getDoc(doc(db, "users", uid)).then((docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  };

  const getFriendsData = async () => {
    try {
      const user = await findUser(auth.currentUser.uid);
      setMyMessagesData([]);
      setMyTimeData([]);
      setFriendText([]);
      if (user) {
        for (let i = 0; i < user.friends.length; i++) {
          let snapshot = await get(
            ref(database, `chatrooms/${user.friends[i].chatRoomId}`)
          );
          let holdData = snapshot.val().messages;
          setItemSelected((newArr) => [...newArr, false]);
          if (holdData) {
            for (let k = 0; k < holdData.length; k++) {
              let holdText = holdData[k].text;
              let holdTime = holdData[k].time;
              if (k === holdData.length - 1) {
                setMyMessagesData((myMessageData) => [
                  ...myMessageData,
                  holdText,
                ]);
                setMyTimeData((myTimeData) => [...myTimeData, holdTime]);
                if (holdData[k].sender === user.uid) {
                  setFriendText((friendText) => [...friendText, false]);
                } else {
                  setFriendText((friendText) => [...friendText, true]);
                }
              }
            }
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onLogin = async () => {
    try {
      const user = await findUser(auth.currentUser.uid);
      if (user) {
        setMyData(user);
        // console.log("old user");
      } else {
        const newUserObj = {
          uid: auth.currentUser.uid,
          avatar: route.params.user.avatar,
          fullName: route.params.user.fullName,
          friends: [],
          email: route.params.user.email,
        };

        await set(ref(database, `users/${auth.currentUser.uid}`), newUserObj);
        // console.log("new user");
        setMyData(newUserObj);
      }
      const myUserRef = ref(database, `users/${auth.currentUser.uid}`);
      onValue(myUserRef, (snapshot) => {
        const userData = snapshot.val();
        setUsers(userData.friends);
        setMyData((prevData) => ({
          ...prevData,
          friends: userData.friends,
        }));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const findUser = async (uid) => {
    const mySnapshot = await get(ref(database, `users/${uid}`));
    return mySnapshot.val();
  };

  const findChatroom = async (uid) => {
    const mySnapshot = await get(ref(database, `chatrooms/${uid}`));
    return mySnapshot.val();
  };

  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  const onAddFriend = async (uid) => {
    const user = await findUser(uid);

    if (user) {
      if (user.uid === myData.uid) {
        console.log("Cant add yourself");
        setError("Cannot add yourself");
        return;
      }

      if (myData.friends) {
        for (let i = 0; i < myData.friends.length; i++) {
          if (myData.friends[i].uid === user.uid) {
            console.log("Cant add this user twice");
            setError("*User is already in chat list");
            return;
          }
        }
      }

      const newChatRoomRef = push(ref(database, `chatrooms`), {
        firstUser: myData.uid,
        secondUser: user.uid,
        messages: [
          {
            createdAt: new Date(),
            sender: myData.uid,
            text: " ",
            time: formatAMPM(new Date()),
          },
        ],
      });

      const newChatRoomId = newChatRoomRef.key;

      const userFriends = user.friends || [];
      const myFriend = myData.friends || [];
      getUserData(uid);
      await update(ref(database, `users/${uid}`), {
        friends: [
          ...userFriends,
          {
            uid: myData.uid,
            avatar: myData.avatar,
            fullName: myData.fullName,
            chatRoomId: newChatRoomId,
          },
        ],
      });

      await update(ref(database, `users/${myData.uid}`), {
        friends: [
          ...myFriend,
          {
            uid: user.uid,
            avatar: user.avatar,
            fullName: user.fullName,
            chatRoomId: newChatRoomId,
          },
        ],
      });
      console.log("Add friend success");
      setAddNew(false);
      setUidToAdd("");
    }
  };

  useEffect(() => {
    if (isFocused) {
      getFriendsData();
      onLogin();
      if (route.params.currentDocId) {
        setAddNew(true);
        setUidToAdd(route.params.currentDocId);
      }
    }
  }, [isFocused]);

  const [loaded, errorFont] = useFonts({
    PoppinsThin: require("../../../assets/fonts/Poppins-Thin.ttf"),
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.background}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={styles.topBar}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Content", { screen: "Profile" });
              }}
            >
              <AntDesign
                name={"left"}
                size={24}
                color={WHITE}
                style={styles.backBtn}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Chat now</Text>

            <View style={styles.basic}>
              <TouchableOpacity
                style={styles.threeDots}
                onPress={() => setOpenMenu(!openMenu)}
              >
                <Entypo name="dots-three-horizontal" size={24} color={WHITE} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.secondTopBar}>
            <TouchableOpacity onPress={() => setOpenEdit(!openEdit)}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.newWrapper}
              onPress={() => setAddNew(true)}
            >
              <AntDesign
                name="pluscircle"
                size={15}
                color={WHITE}
                style={{ marginLeft: 5 }}
              />
              <Text style={styles.newText}>New user</Text>
            </TouchableOpacity>
            <Modal
              isVisible={addNew}
              onBackdropPress={() => {
                if (route.params.selectedUser === null) {
                  setAddNew(false);
                  setError(null);
                  setUidToAdd("");
                }
              }}
              animationIn={"fadeIn"}
              animationOut={"fadeOut"}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View style={styles.addNewUserContainer}>
                  {route.params.selectedUser && (
                    <View style={styles.content}>
                      <Image
                        source={{ uri: route.params.selectedUser.avatar }}
                        style={styles.profileImage}
                      />
                    </View>
                  )}
                  {route.params.selectedUser && (
                    <View style={styles.content}>
                      <Text style={styles.fullName}>
                        {route.params.selectedUser.fullName}
                      </Text>
                    </View>
                  )}
                  <View style={styles.addNewUserHolder}>
                    <TextInput
                      style={styles.addNewUserText}
                      placeholder={"User ID"}
                      placeholderTextColor={PLACEHOLDER}
                      onChangeText={(newText) => setUidToAdd(newText)}
                    >
                      {uidToAdd}
                    </TextInput>
                    <TouchableOpacity
                      onPress={() => {
                        setUidToAdd("");
                      }}
                      style={styles.clearBtn}
                    >
                      <AntDesign name="closecircle" size={18} color={WHITE} />
                    </TouchableOpacity>
                  </View>
                </View>
                {error === null ? null : (
                  <View style={styles.errorHolder}>
                    <Text style={styles.errorText}>{error}</Text>
                  </View>
                )}
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => {
                    onAddFriend(uidToAdd);
                    if (uidToAdd === "") {
                      setError("*User ID is required");
                    }
                  }}
                >
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => {
                    if (
                      route.params.selectedUser &&
                      route.params.currentDocId
                    ) {
                      navigation.navigate("Content", { screen: "Community" });
                    } else {
                      setAddNew(false);
                    }
                  }}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>

          <View style={styles.textInput}>
            <View style={styles.searchHolder}>
              <FontAwesome
                name="search"
                size={18}
                color={PLACEHOLDER}
                style={{ marginRight: 10 }}
              />
              <TextInput
                style={styles.searchText}
                placeholder={"Search"}
                placeholderTextColor={PLACEHOLDER}
                onTextChange={(text) => setSearch(text)}
              >
                {search}
              </TextInput>
            </View>
            <TouchableOpacity>
              <MaterialIcons
                name="keyboard-voice"
                size={20}
                color={PLACEHOLDER}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.messageWrapper}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={getFriendsData}
                style={styles.refreshing}
                title={"Refreshing"}
                titleColor={WHITE}
              />
            }
          >
            {myData.friends &&
              myData.friends.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={item.uid}
                    style={styles.userWrapper}
                    onPress={() => {
                      openEdit
                        ? console.log("")
                        : navigation.navigate("Chat", {
                            user: item,
                            myData: myData,
                            selectedUser: item,
                          });
                    }}
                  >
                    {openEdit && (
                      <TouchableOpacity>
                        {itemSelected[index] ? (
                          <Ionicons
                            name="radio-button-on"
                            size={24}
                            color={WHITE}
                          />
                        ) : (
                          <Ionicons
                            name="radio-button-off"
                            size={24}
                            color={WHITE}
                          />
                        )}
                      </TouchableOpacity>
                    )}
                    <View style={styles.imageNameMessWrapper}>
                      <Image
                        source={{
                          uri: item.avatar,
                        }}
                        style={styles.userImg}
                      />
                      <View style={styles.textWrapper}>
                        <Text style={styles.userName}>{item.fullName}</Text>
                        <Text
                          style={
                            friendText[index]
                              ? styles.friendMessageText
                              : styles.messageText
                          }
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        >
                          {myMessagesData[index]
                            ? friendText[index]
                              ? item.fullName + ": " + myMessagesData[index]
                              : "You: " + myMessagesData[index]
                            : ""}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.dotTimeWrapper}>
                      <Text style={styles.messageTime}>
                        {myTimeData[index]
                          ? myTimeData[index]
                          : "                "}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Messages;

//🇦🇺 🇦🇺
