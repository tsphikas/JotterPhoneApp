import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { colors, STYLES } from "./constants";

const Stack = createStackNavigator();

import Home from "./screens/Home.js";

const App = () => {
  const [loaded] = useFonts({
    HelveticaNeue: require("./assets/fonts/Helvetica-LT-97-Black-Condensed.ttf"),
  });

  if (!loaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Jotter" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
