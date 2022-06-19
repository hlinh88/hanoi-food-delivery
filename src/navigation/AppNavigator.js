import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splash/SplashScreen";
import HomeScreen from "../screens/home/HomeScreen";
import ContentNavigator from "./content-navigator/ContentNavigator";
import HousingDetailScreen from "../screens/housing-details/HousingDetailScreen";
import Profile from "../screens/profile/Profile";
import EditProfile from "../screens/edit-profile/EditProfile";
import Messages from "../screens/messages/Messages";
import Chat from "../screens/chat/Chat";
import CommunityScreenSeeMore from "../screens/community-see-more/CommunityScreenSeeMore";
import Discover from "../screens/discover/Discover";

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
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="Content" component={ContentNavigator} />
      <Stack.Screen name="Details" component={HousingDetailScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="CommunitySeeMore"
        component={CommunityScreenSeeMore}
      />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
