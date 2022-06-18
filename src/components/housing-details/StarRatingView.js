import { YELLOW } from "../../styles/colors";
import StarRatingBar from "react-native-star-rating-view/StarRatingBar";

const StarRatingView = ({ width, height, rating }) => {
  return (
    <StarRatingBar
      tintColor={YELLOW}
      emptyStarColor={YELLOW}
      starStyle={{
        width: width,
        height: height,
      }}
      score={rating}
      dontShowScore={true}
      allowsHalfStars={true}
      accurateHalfStars={true}
    />
  );
};

export default StarRatingView;
