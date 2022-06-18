import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

import theme, { COLORS, SIZES } from "./styles.js";
import { useFonts } from "expo-font";

const Onboarding = ({ navigation }) => {
  const flatlistRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([]);
  const data = [
    {
      _id: "1",
      title: "Step 1",
      description:
        "Register by filling all the fields for us to offer better experiences.",
      img: {
        uri: "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/onboarding%2FOnboarding-4.png?alt=media&token=c3f52526-ec4b-41eb-a166-74eed15bbfd8",
      },
    },
    {
      _id: "2",
      title: "Step 2",
      description:
        "Pick a topic:\n" + "Community, Housing, Shopping, Transportation",
      img: {
        uri: "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/onboarding%2FOnboarding-2.png?alt=media&token=663b2a3f-277a-4610-b308-601c135b07ae",
      },
    },
    {
      _id: "3",
      title: "Voilà!",
      description:
        "Connect to your desired option using the provided information.",
      img: {
        uri: "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/onboarding%2FOnboarding-3.png?alt=media&token=23eb96e4-cf1f-4da9-8445-4ce6af38528d",
      },
    },
  ];

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    setViewableItems(viewableItems);
  });
  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems]);

  const handleNext = () => {
    if (currentPage === data.length - 1) return;

    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage + 1,
    });
  };

  const handleBack = () => {
    if (currentPage === 0) return;
    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage - 1,
    });
  };

  const handleSkipToEnd = () => {
    flatlistRef.current.scrollToIndex({
      animate: true,
      index: data.length - 1,
    });
  };

  const [loaded, error] = useFonts({
    PoppinsExtraBold: require("../../../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const renderTopSection = () => {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: SIZES.base * 2,
          }}
        >
          {/* Back button */}
          <TouchableOpacity
            onPress={handleBack}
            style={{
              padding: SIZES.base,
            }}
          >
            {/* Back icon */}
            {/* Hide back button on 1st screen */}
            <AntDesign
              name="left"
              style={{
                fontFamily: "PoppinsExtraBold",
                fontSize: 30,
                color: COLORS.white,
                opacity: currentPage === 0 ? 0 : 1,
              }}
            />
          </TouchableOpacity>

          {/* Skip button */}
          {/* Hide Skip button on last screen */}
          <TouchableOpacity onPress={() => navigation.replace("SignIn")}>
            <Text
              style={{
                fontFamily: "PoppinsMedium",
                color: COLORS.white,
                opacity: currentPage === data.length - 1 ? 0 : 1,
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const renderBottomSection = () => {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: SIZES.base * 2,
            paddingVertical: SIZES.base * 2,
          }}
        >
          {/* Pagination */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {
              // No. of dots
              [...Array(data.length)].map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor:
                      index === currentPage
                        ? COLORS.primary
                        : COLORS.primary + "50",
                    marginRight: 8,
                  }}
                />
              ))
            }
          </View>

          {/* Next or GetStarted button */}
          {/* Show or Hide Next button & GetStarted button by screen */}
          {currentPage !== data.length - 1 ? (
            <TouchableOpacity
              onPress={handleNext}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: COLORS.primary,
              }}
              activeOpacity={0.5}
            >
              <AntDesign
                name="right"
                style={{
                  fontFamily: "PoppinsExtraBold",
                  fontSize: 30,
                  color: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </TouchableOpacity>
          ) : (
            // Get Started Button
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.replace("SignIn")}
              style={{
                paddingHorizontal: SIZES.base * 2,
                height: 60,
                borderRadius: 30,
                backgroundColor: COLORS.primary,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontFamily: "PoppinsRegular",
                  marginLeft: SIZES.base,
                }}
              >
                Get Started
              </Text>
              <Image
                source={{
                  uri: "https://media0.giphy.com/media/WV3dGPzJsvcB9yp5iS/giphy.gif?cid=ecf05e47hrul9vr17f0aympnkz7ltniicibusshsiwwp5wgw&rid=giphy.gif&ct=s",
                }}
                style={{ width: 50, height: "25%", marginLeft: SIZES.base }}
              />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  };

  const renderFlatlistItem = ({ item }) => {
    return (
      <View
        style={{
          width: SIZES.width,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginVertical: SIZES.base * 2,
          }}
        >
          <ImageBackground
            source={item.img}
            style={{ width: 350, height: 350, resizeMode: "contains" }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: SIZES.base * 4,
            marginVertical: SIZES.base * 4,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontFamily: "PoppinsExtraBold",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontFamily: "PoppinsRegular",
              textAlign: "center",
              marginTop: 15,
              lineHeight: 28,
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      {/* TOP SECTION - Back & Skip button */}
      {renderTopSection()}

      {/* FLATLIST with pages */}
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={renderFlatlistItem}
        ref={flatlistRef}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
        initialNumToRender={1}
        extraData={SIZES.width}
      />

      {/* BOTTOM SECTION - pagination & next or GetStarted button */}
      {renderBottomSection()}
    </View>
  );
};

export default Onboarding;
