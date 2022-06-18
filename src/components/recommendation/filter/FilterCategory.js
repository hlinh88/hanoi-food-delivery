import { Text } from "react-native";
import styles from "./styles";

const FilterCategory = ({ category }) => {
  return <Text style={styles.filterOption}>{category}</Text>;
};

export default FilterCategory;
