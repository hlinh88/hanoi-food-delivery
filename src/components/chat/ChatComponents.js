import {
  Actions,
  Bubble,
  Composer,
  InputToolbar,
  MessageText,
  Send,
} from "react-native-gifted-chat";

import styles from "./styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LIGHT_PURPLE, YELLOW } from "../../styles/colors";

const renderBubble = (props) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: [styles.bubbleLeft, styles.bubble],
        right: [styles.bubbleRight, styles.bubble],
      }}
    />
  );
};

const renderMessageText = (props) => {
  return (
    <MessageText
      {...props}
      textStyle={{
        left: styles.text,
        right: styles.text,
      }}
      linkStyle={{
        left: styles.link,
        right: styles.link,
      }}
    />
  );
};

const renderInputToolbar = (props) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={styles.inputToolBar}
      primaryStyle={{ alignItems: "center" }}
    />
  );
};

const renderActions = (props) => {
  return (
    <Actions
      {...props}
      containerStyle={styles.action}
      icon={() => <Ionicons name="image" size={32} color={LIGHT_PURPLE} />}
      options={{
        "Choose From Library": () => {
          console.log("Choose From Library");
        },
        Cancel: () => {
          console.log("Cancel");
        },
      }}
      optionTintColor={YELLOW}
    />
  );
};

const renderComposer = (props) => {
  return <Composer {...props} textInputStyle={styles.composer} />;
};

const renderSend = (props) => {
  return (
    <Send {...props} disabled={!props.text} containerStyle={styles.sendBtn}>
      <MaterialCommunityIcons
        name="send-circle"
        size={36}
        color={LIGHT_PURPLE}
      />
    </Send>
  );
};

export {
  renderBubble,
  renderMessageText,
  renderInputToolbar,
  renderActions,
  renderComposer,
  renderSend,
};
