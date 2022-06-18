import { Image, Text, View } from "react-native";

import styles from "./styles";
import { useFonts } from "expo-font";
import StarRatingView from "../StarRatingView";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useEffect, useState } from "react";

const Review = ({ review, anonymous }) => {
  const [user, setUser] = useState({});
  const getUser = async () => {
    const q = query(
      collection(db, "users"),
      where("__name__", "==", review["user_id"])
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!anonymous) {
      getUser();
    }
  }, [review["user_id"]]);

  const [loaded, error] = useFonts({
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        {!anonymous ? (
          <Image
            source={{ uri: user.avatar }}
            style={styles.img}
            resizeMode="cover"
          />
        ) : null}
        <View>
          {!anonymous ? (
            <Text style={styles.username}>{user.fullName}</Text>
          ) : null}
          <View style={styles.ratingContainer}>
            <StarRatingView width={18} height={18} rating={review.rating} />
            <Text style={styles.rating}>{review.rating.toFixed(1)}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.text}>{review.comment}</Text>
    </View>
  );
};

export default Review;
