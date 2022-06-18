import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { BACKGROUND, PURPLE_BLUE, WHITE } from "../../styles/colors";

export const COLORS = {
  primary: PURPLE_BLUE,
  white: WHITE,
  background: BACKGROUND,
};

export const SIZES = {
  base: 10,
  width,
  height,
};

const theme = { COLORS, SIZES };

export default theme;
