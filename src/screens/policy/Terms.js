import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";

const Terms = ({ navigation: { goBack } }) => {
  const [accepted, setAccepted] = React.useState(false);
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
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
    <View style={styles.container}>
      <Text style={styles.title}>TERMS and CONDITIONS</Text>
      <ScrollView
        style={styles.tcContainer}
        showsVerticalScrollIndicator={false}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            setAccepted({
              accepted: true,
            });
          }
        }}
      >
        <Text style={styles.tcP}>
          Welcome to our website. If you continue to browse and use this
          website, you are agreeing to comply with and be bound by the following
          terms and conditions of use, which together with our privacy policy
          govern Melbourne Backpack’s relationship with you in relation to this
          website. If you disagree with any part of these terms and conditions,
          please do not use our website.
        </Text>
        <Text style={styles.tcP}>
          The term ‘Melbourne Backpack’ or ‘us’ or ‘we’ refers to the owner of
          the website whose registered office is 702 Nguyễn Văn Linh, District
          7, Hồ Chí Minh 700000, Vietnam. The term ‘you’ refers to the user or
          viewer of our website.
        </Text>
        <Text style={styles.tcL}>
          {"\u2022"} The content of the pages of this website is for your
          general information and use only. It is subject to change without
          notice.
        </Text>
        <Text style={styles.tcL}>
          {"\u2022"} Neither we nor any third parties provide any warranty or
          guarantee as to the accuracy, timeliness, performance, completeness or
          suitability of the information and materials found or offered on this
          website for any particular purpose. You acknowledge that such
          information and materials may contain inaccuracies or errors and we
          expressly exclude liability for any such inaccuracies or errors to the
          fullest extent permitted by law.
        </Text>
        <Text style={styles.tcL}>
          {"\u2022"} Your use of any information or materials on this website is
          entirely at your own risk, for which we shall not be liable. It shall
          be your own responsibility to ensure that any products, services or
          information available through this website meet your specific
          requirements.
        </Text>
        <Text style={styles.tcL}>
          {"\u2022"} This website contains material which is owned by or
          licensed to us. This material includes, but is not limited to, the
          design, layout, look, appearance and graphics. Reproduction is
          prohibited other than in accordance with the copyright notice, which
          forms part of these terms and conditions.
        </Text>
        <Text style={styles.tcL}>
          {"\u2022"} All trademarks reproduced in this website, which are not
          the property of, or licensed to the operator, are acknowledged on the
          website. Unauthorised use of this website may give rise to a claim for
          damages and/or be a criminal offence.
        </Text>
        <Text style={styles.tcL}>
          {"\u2022"} From time to time, this website may also include links to
          other websites. These links are provided for your convenience to
          provide further information. They do not signify that we endorse the
          website(s). We have no responsibility for the content of the linked
          website(s).
        </Text>
        <Text style={styles.tcL}>
          {"\u2022"} Your use of this website and any dispute arising out of
          such use of the website is subject to the laws of England, Northern
          Ireland, Scotland and Wales.
        </Text>
        <Text style={styles.tcP}>
          The use of this website is subject to the following terms of use
        </Text>
      </ScrollView>

      <TouchableOpacity
        disabled={!accepted}
        onPress={() => goBack()}
        style={accepted ? styles.button : styles.buttonDisabled}
      >
        <Text style={styles.buttonLabel}>Accept</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Terms;
