import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { PLACEHOLDER, WHITE } from "../../styles/colors";
import { AntDesign } from "@expo/vector-icons";

const Dropdown = ({ data = [], value = {}, onSelected = () => {} }) => {
  const [showOption, setShowOption] = useState(false);
  const showOptionSwitch = () => {
    setShowOption(!showOption);
  };

  const onSelectedItem = (val) => {
    setShowOption(false);
    onSelected(val);
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.dropdown} onPress={showOptionSwitch}>
        <Text
          style={{
            color: !!value ? WHITE : PLACEHOLDER,
            fontFamily: "PoppinsMedium",
          }}
        >
          {!!value ? value : "Why are you using this app*"}
        </Text>
        {showOption ? (
          <AntDesign name="caretup" size={18} color={PLACEHOLDER} />
        ) : (
          <AntDesign name="caretdown" size={18} color={PLACEHOLDER} />
        )}
      </TouchableOpacity>
      {showOption && (
        <View style={styles["optionWrapper"]}>
          {data.map((val) => {
            return (
              <TouchableOpacity key={val} onPress={() => onSelectedItem(val)}>
                <Text style={styles["option"]}>{val}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default Dropdown;
