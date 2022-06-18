import { Dimensions, PixelRatio } from "react-native";

const windowWidth = Dimensions.get("window").width;
const guidelineBaseWidth = 375;

export const scaleSize = (size) => (windowWidth / guidelineBaseWidth) * size;

export const scaleFont = (fontSize) => fontSize * PixelRatio.getFontScale();
