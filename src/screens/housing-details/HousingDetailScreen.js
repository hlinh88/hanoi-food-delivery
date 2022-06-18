import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { PLACEHOLDER, WHITE } from "../../styles/colors";
import styles from "./styles";
import { useFonts } from "expo-font";
import Tag from "../../components/housing-details/tags/Tag";
import { useEffect, useState } from "react";
import Review from "../../components/housing-details/reviews/Review";
import SectionInfo from "../../components/housing-details/section-info/SectionInfo";
import StarRatingView from "../../components/housing-details/StarRatingView";
import StarRating from "react-native-star-rating-widget";
import { updateRating, postReview } from "../../api/handleReview";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";
import { formatPara } from "../../utils/Formatting";
import SubmitAlert from "../../components/housing-details/alert/SubmitAlert";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const HousingDetailScreen = ({ navigation: { goBack }, route }) => {
  const housingData = route.params.data;
  const [showAlert, setShowAlert] = useState(false);

  const [myComment, setMyComment] = useState("");
  const [myRating, setMyRating] = useState(null);
  const [userReviews, setUserReviews] = useState([]);
  const [onlineReviews, setOnlineReviews] = useState([]);
  const [housingRating, setHousingRating] = useState();
  const [ratingStat, setRatingStat] = useState({});

  const filterMaxCardsPerPageInitial = 5;
  const filterMaxCardsPerPage = 5;
  const [filterMaxCards, setFilterMaxCards] = useState(
    filterMaxCardsPerPageInitial
  );
  const [filterMaxCards2, setFilterMaxCards2] = useState(
    filterMaxCardsPerPageInitial
  );

  const getOnlineReview = (categoryId) => {
    const q = query(
      collection(db, "external_reviews"),
      where("category_id", "==", parseInt(categoryId))
    );
    try {
      onSnapshot(q, (querySnapshot) => {
        const reviews = [];
        let total = 0;
        querySnapshot.forEach((doc) => {
          reviews.push(doc.data());
          total += doc.data().rating;
        });
        setOnlineReviews(reviews);
        setRatingStat({ total: total, length: reviews.length });
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getReview = (categoryId) => {
    getOnlineReview(categoryId);
    console.log(ratingStat);

    const q = query(
      collection(db, "reviews"),
      where("category_id", "==", categoryId)
    );
    try {
      onSnapshot(q, (querySnapshot) => {
        const reviews = [];
        let sum = ratingStat.total;
        querySnapshot.forEach((doc) => {
          reviews.push(doc.data());
          sum += doc.data().rating;
        });
        setUserReviews(reviews);
        const currentLength = ratingStat.length + reviews.length;
        setHousingRating(sum / currentLength);
        setRatingStat({ total: sum, length: currentLength });
        console.log(housingRating);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const calculateNewRating = (submittedRating) => {
    console.log("Total rating stat: " + ratingStat.total);
    console.log("length: " + ratingStat.length);
    const newRating =
      (ratingStat.total + submittedRating) / (ratingStat.length + 1);
    console.log("New rating" + newRating);
    return newRating;
  };

  useEffect(() => {
    getReview(housingData.category_id);

    return () => {
      getReview(housingData.category_id);
    };
  }, [housingRating]);

  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("../../../assets/fonts/Poppins-ExtraBold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <SubmitAlert isVisible={showAlert} setIsVisibleFunction={setShowAlert} />

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => goBack()}
          style={{ marginLeft: wp(5) }}
        >
          <Ionicons name="chevron-back" size={30} color={WHITE} />
        </TouchableOpacity>
        <Text style={[styles.building, styles.text]}>
          {housingData.name.toUpperCase()}
        </Text>
        <TouchableOpacity style={{ marginRight: wp(5) }}>
          <Entypo name="dots-three-horizontal" size={24} color={WHITE} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.wrapper}>
        <Image source={{ uri: housingData.image }} style={styles.img} />
        <Text style={[styles.text, styles.name]}>{housingData.title}</Text>
        <Text style={[styles.text, styles.price]}>${housingData.price}</Text>
        <Text style={[styles.text, styles.address]}>{housingData.address}</Text>

        {housingRating ? (
          <View style={styles.starContainer}>
            <StarRatingView width={25} height={25} rating={housingRating} />
            <Text style={[styles.text, styles.rating]}>
              {housingRating.toFixed(2)}
            </Text>
          </View>
        ) : null}

        <View style={styles.tagContainer}>
          <Tag text={`${housingData.bed} bedroom`} />
          <Tag text={`${housingData.bath} bathroom`} />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={[styles.text, styles.sectionTitle]}>Description</Text>
        </View>

        <Text style={[styles.text, styles.desc]}>
          {formatPara(housingData.description)}
        </Text>
        <SectionInfo title="Add your review">
          <TextInput
            placeholder="Enter comment..."
            placeholderTextColor={PLACEHOLDER}
            multiline
            onChangeText={setMyComment}
            value={myComment}
            style={[styles.text, styles.comment]}
          />

          <View style={styles.ratingWrapper}>
            <Text style={[styles.text, styles.myRating]}>
              Rate this housing: {myRating}
            </Text>
            <StarRating
              rating={myRating}
              onChange={setMyRating}
              starSize={42}
              starStyle={styles.starStyle}
            />

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                postReview(
                  housingData["category_id"],
                  myComment,
                  myRating
                ).then(() =>
                  updateRating(
                    housingData["category_id"],
                    calculateNewRating(myRating)
                  ).then(() => {
                    setShowAlert(true);
                    setMyComment("");
                    setMyRating(0);
                  })
                );
              }}
            >
              <Text style={[styles.text, styles.btnText]}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </SectionInfo>

        <View>
          <SectionInfo title="RMIT students' reviews">
            {userReviews.slice(0, filterMaxCards).map((review, id) => {
              return <Review key={id} review={review} />;
            })}
            <View style={styles.seeMoreBtnContainer}>
              {filterMaxCards >= userReviews.length &&
              userReviews.length >= filterMaxCardsPerPageInitial ? (
                <TouchableOpacity
                  onPress={() => {
                    setFilterMaxCards(filterMaxCardsPerPageInitial);
                  }}
                >
                  <Text style={styles.seeMoreBtn}>See less</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setFilterMaxCards(
                      (prevState) => prevState + filterMaxCardsPerPage
                    );
                  }}
                >
                  <Text style={styles.seeMoreBtn}>See more</Text>
                </TouchableOpacity>
              )}
            </View>
          </SectionInfo>
        </View>

        <View style={styles.reviewContainer}>
          <SectionInfo title="Online reviews">
            {onlineReviews.slice(0, filterMaxCards2).map((review, id) => {
              return <Review key={id} review={review} anonymous />;
            })}
            <View style={styles.seeMoreBtnContainer}>
              {filterMaxCards2 >= onlineReviews.length &&
              onlineReviews.length >= filterMaxCardsPerPageInitial ? (
                <TouchableOpacity
                  onPress={() => {
                    setFilterMaxCards2(filterMaxCardsPerPageInitial);
                  }}
                >
                  <Text style={styles.seeMoreBtn}>See less</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setFilterMaxCards2(
                      (prevState) => prevState + filterMaxCardsPerPage
                    );
                  }}
                >
                  <Text style={styles.seeMoreBtn}>See more</Text>
                </TouchableOpacity>
              )}
            </View>
          </SectionInfo>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HousingDetailScreen;
