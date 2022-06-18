import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
