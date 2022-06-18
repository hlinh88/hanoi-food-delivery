import {
  ImageBackground,
  Linking,
  Platform,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GREY, WHITE, YELLOW } from "../../../styles/colors";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { Capitalize } from "../../../utils/Formatting";
import { DISTANCE_CALCULATOR_KEY } from "@env";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../config/firebase";

const RecommendationCard = ({ data, housing, transport }) => {
  const navigation = useNavigation();
  const [routeVisible, setRouteVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [addressLink, setAddressLink] = useState("");
  const [distance, setDistance] = useState("");
  const [rating, setRating] = useState();
  const lat = "-37.8080770201347";
  const long = "144.96268921184907";

  const [loaded, error] = useFonts({
    PoppinsExtraBold: require("../../../../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsItalic: require("../../../../assets/fonts/Poppins-Italic.ttf"),
  });

  const getRating = () => {
    const q = query(collection(db, "ratings"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (parseFloat(data.category_id) === doc.data().category_id) {
          setRating(doc.data().rating);
        }
      });
    });
  };

  const calculateDistanceFromCoordinates = (lat2, long2) => {
    const distanceUrl = `http://dev.virtualearth.net/REST/v1/Routes/Walking?wayPoint.1=${lat},${long}&wayPoint.2=${lat2},${long2}&key=${DISTANCE_CALCULATOR_KEY}`;
    try {
      fetch(distanceUrl, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setDistance(
            data["resourceSets"][0]["resources"][0]["travelDistance"]
          );
        });
    } catch (e) {
      console.log(e.message());
    }
  };

  useEffect(() => {
    if (housing && data !== {}) {
      getRating();
    } else console.log(data);
  }, [data]);

  useEffect(() => {
    if (data.address !== undefined) {
      setAddress(Capitalize(data.address));
      const query = Capitalize(data.address);
      const url = Platform.select({
        ios: `maps:0,0?q=${query}`,
        android: `geo:0,0?q=${query}`,
      });
      setAddressLink(url);
    }
    if (transport) {
      if (data) {
        calculateDistanceFromCoordinates(data["stopLat"], data["stopLong"]);
      }
      if (data.stopName !== undefined && data.stopName.length > 0) {
        const type = data.transportType;
        const name = data.stopName;
        const query = type + " stop " + name;
        const url = Platform.select({
          ios: `maps:0,0?q=${query}`,
          android: `geo:0,0?q=${query}`,
        });
        setAddressLink(url);
        console.log(url);
      }
    }
  }, [data]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.card}>
      {housing !== true ? (
        transport ? (
          data ? (
            <>
              <ImageBackground
                source={data["img"]}
                style={styles.backgroundImg}
                imageStyle={{
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
                resizeMode="cover"
              />

              <View style={styles.info}>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(addressLink);
                  }}
                >
                  <Text style={[styles.name, styles.text]}>
                    Stop: {data["stopName"]}
                  </Text>
                </TouchableOpacity>
                <View style={styles.modeContainer}>
                  <Text style={[styles.distance]}>{data["transportType"]}</Text>
                </View>

                <View style={styles.distanceContainer}>
                  <FontAwesome5 name="walking" size={24} color={WHITE} />
                  <Text style={[styles.distance, styles.distanceText]}>
                    approx. {distance === "" ? 0 : distance * 1000}m from RMIT
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => setRouteVisible(!routeVisible)}
                >
                  <Text style={[styles.clickMore]}>
                    View routes that go through this stop
                    {routeVisible ? (
                      <Feather name="chevron-up" size={16} color={YELLOW} />
                    ) : (
                      <Feather name="chevron-down" size={16} color={YELLOW} />
                    )}
                  </Text>
                </TouchableOpacity>

                {routeVisible
                  ? data["routes"].map((route, id) => (
                      <Text key={id} style={[styles.text]}>
                        Route
                        {route["routeNum"] === ""
                          ? `${route["routeNum"]}: ${route["routeName"]}`
                          : ` ${route["routeNum"]}: ${route["routeName"]}`}
                      </Text>
                    ))
                  : null}
              </View>
            </>
          ) : null
        ) : (
          <>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(data.website);
              }}
            >
              <Image
                source={{ uri: data.image }}
                style={styles.backgroundImgShopping}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <View style={styles.info}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(data.website);
                }}
              >
                <Text style={[styles.name, styles.text]}> {data.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(addressLink);
                }}
              >
                <Text style={[styles.text, styles.location]}>
                  <Ionicons name="location-sharp" size={16} color="white" />{" "}
                  {data.address}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setInfoVisible(!infoVisible)}>
                <Text style={styles.clickMore}>
                  Read more{" "}
                  {infoVisible ? (
                    <Feather name="chevron-up" size={16} color={YELLOW} />
                  ) : (
                    <Feather name="chevron-down" size={16} color={YELLOW} />
                  )}
                </Text>
              </TouchableOpacity>
              {infoVisible ? (
                <Text style={{ color: WHITE, fontFamily: "PoppinsItalic" }}>
                  {data.description}
                </Text>
              ) : null}
            </View>
          </>
        )
      ) : (
        <>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Details", { data: data })}
          >
            <ImageBackground
              source={{ uri: data.image }}
              style={styles.backgroundImg}
              imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
              resizeMode="cover"
            >
              <View style={styles.overlay}>
                <Text style={styles.rating}>
                  {!rating ? null : rating.toFixed(2)}{" "}
                  <AntDesign name="star" size={30} color={YELLOW} />
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <View style={styles.info}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { data: data })}
            >
              <Text style={[styles.name, styles.text]}>
                {data.title
                  ? data.title[0].toUpperCase() +
                    data.title.slice(1, data.title.length)
                  : data.title}
              </Text>
            </TouchableOpacity>
            <Text style={[styles.price, styles.text]}>
              {typeof data.price !== "undefined"
                ? data.price.length > 4 && data.price.substring(0, 4) === "from"
                  ? "From $" + data.price.split(" ")[1]
                  : "$" + data.price
                : null}
            </Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(addressLink);
              }}
            >
              <Text style={[styles.text, styles.location]}>
                <Ionicons name="location-sharp" size={16} color="white" />{" "}
                {address}
              </Text>
            </TouchableOpacity>
            <View style={styles.extraOuterContainer}>
              <View style={styles.extraContainer}>
                <Text style={styles.extra}>{data.bed}</Text>
                <Ionicons name="bed" size={35} color={GREY} />
              </View>

              <View style={styles.extraContainer}>
                <Text style={styles.extra}>{data.bath}</Text>
                <MaterialCommunityIcons name="shower" size={35} color={GREY} />
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default RecommendationCard;
