import RecommendationTemplate from "../../components/recommendation/template/RecommendationTemplate";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";

const ShoppingScreen = () => {
  const [shoppingData, setShoppingData] = useState([]);

  const fetchData = () => {
    getDocs(collection(db, "shopping")).then((data) => {
      setShoppingData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const categories = ["Distance from RMIT"];

  return (
    <RecommendationTemplate
      data={shoppingData}
      topic="Shopping"
      categories={categories}
    />
  );
};

export default ShoppingScreen;
