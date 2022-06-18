import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { WHITE } from "../../styles/colors";
import { useCallback, useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { auth, database, db } from "../../config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { get, set, ref, onValue, push, update, off } from "firebase/database";
import {
  renderActions,
  renderBubble,
  renderComposer,
  renderInputToolbar,
  renderMessageText,
  renderSend,
} from "../../components/chat/ChatComponents";

const Chat = ({ navigation, route }) => {
  const [messages, setMessages] = useState([]);
  const [data, setData] = useState({});

  const user = route.params.user;
  const myData = route.params.myData;
  const selectedUser = route.params.selectedUser;

  useEffect(() => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const myChatRoom = await fetchMessages();

      setMessages(renderMessages(myChatRoom.messages));
    };

    loadData();

    const chatRoomRef = ref(database, `chatrooms/${selectedUser.chatRoomId}`);
    onValue(chatRoomRef, (snapshot) => {
      const data = snapshot.val();
      setMessages(renderMessages(data.messages));
    });

    return () => {
      off(chatRoomRef);
    };
  }, [fetchMessages, renderMessages, selectedUser.chatRoomId]);

  const renderMessages = (msg) => {
    return msg
      ? msg.reverse().map((msg, index) => ({
          ...msg,
          _id: index,
          user: {
            _id: msg.sender === myData.uid ? myData.uid : selectedUser.uid,
            fullName:
              msg.sender === myData.fullName
                ? myData.fullName
                : selectedUser.fullName,
            avatar:
              msg.sender === myData.avatar
                ? myData.avatar
                : selectedUser.avatar,
          },
        }))
      : [];
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

  const fetchMessages = useCallback(async () => {
    const snapshot = await get(
      ref(database, `chatrooms/${selectedUser.chatRoomId}`)
    );
    return snapshot.val();
  }, [selectedUser.chatRoomId]);

  const onSend = useCallback(
    async (msg = []) => {
      const currentChatroom = await fetchMessages();

      const lastMessages = currentChatroom.messages || [];

      await update(ref(database, `chatrooms/${selectedUser.chatRoomId}`), {
        messages: [
          ...lastMessages,
          {
            text: msg[0].text,
            sender: myData.uid,
            createdAt: new Date(),
            time: formatAMPM(new Date()),
          },
        ],
      });

      setMessages((prevMessages) => GiftedChat.append(prevMessages, msg));
      const loadData = async () => {
        const myChatRoom = await fetchMessages();

        setMessages(renderMessages(myChatRoom.messages));
      };

      loadData();
    },
    [fetchMessages, myData.uid, selectedUser.chatRoomId]
  );

  const [loaded, error] = useFonts({
    PoppinsThin: require("../../../assets/fonts/Poppins-Thin.ttf"),
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.background}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={styles.topBar}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Messages", { user: data });
            }}
          >
            <AntDesign
              name={"left"}
              size={24}
              color={WHITE}
              style={styles.backBtn}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{user.fullName}</Text>

          <TouchableOpacity style={styles.threeDots}>
            <Entypo name="dots-three-horizontal" size={24} color={WHITE} />
          </TouchableOpacity>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={50}
        style={{ flex: 1 }}
      >
        <GiftedChat
          messages={messages}
          minInputToolbarHeight={60}
          minComposerHeight={50}
          isKeyboardInternallyHandled={false}
          renderBubble={renderBubble}
          renderMessageText={renderMessageText}
          renderInputToolbar={renderInputToolbar}
          renderActions={renderActions}
          renderComposer={renderComposer}
          renderSend={renderSend}
          onSend={(newMessage) => onSend(newMessage)}
          user={{
            _id: myData.uid,
          }}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Chat;

//🇦🇺 🇦🇺
