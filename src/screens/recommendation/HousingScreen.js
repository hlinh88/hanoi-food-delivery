import RecommendationTemplate from "../../components/recommendation/template/RecommendationTemplate";
import { db } from "../../config/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";

const HousingScreen = () => {
  const [housing, setHousing] = useState([]);

  const fetchData = () => {
    const q = query(collection(db, "housing"));
    try {
      onSnapshot(q, (querySnapshot) => {
        const houses = [];
        querySnapshot.forEach((doc) => {
          houses.push({ ...doc.data(), id: doc.id });
        });
        setHousing(houses);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const categories = ["Type", "Price", "Distance from RMIT"];

  if (housing !== []) {
    return (
      <RecommendationTemplate
        topic="Housing"
        data={housing}
        housing={true}
        categories={categories}
      />
    );
  }
};
export default HousingScreen;
