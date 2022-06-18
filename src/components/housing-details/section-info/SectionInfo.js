import { Text, View } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { YELLOW } from "../../../styles/colors";
import { useState } from "react";

const SectionInfo = ({ children, title }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {visible ? (
          <AntDesign
            name="minussquare"
            size={28}
            color={YELLOW}
            onPress={() => setVisible(!visible)}
          />
        ) : (
          <AntDesign
            name="plussquare"
            size={28}
            color={YELLOW}
            onPress={() => setVisible(!visible)}
          />
        )}
      </View>

      {visible ? children : null}
    </View>
  );
};

export default SectionInfo;
