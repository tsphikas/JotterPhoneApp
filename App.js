import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import Home from "./screens/Home.js";

const App = () => {
  return (
    <NavigationContainer
      style={{ alignItems: "center" }}
      screenOptions={{ headerShown: false }}
      initialRouteName="Jotter"
    >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
