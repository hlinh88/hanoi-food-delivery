import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splash/SplashScreen";
import HomeScreen from "../screens/home/HomeScreen";

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
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
