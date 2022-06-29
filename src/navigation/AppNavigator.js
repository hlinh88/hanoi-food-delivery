import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screens/splash/Splash";
import Home from "../screens/home/Home";

const AppNavigator = () => {
  const Stack = createStackNavigator();

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <Stack.Navigator
      name={"Root"}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardStyleInterpolator: forFade,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
