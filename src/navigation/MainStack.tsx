import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import DetailsScreen from "../screens/DetailsScreen";
import ManagerScreen from "../screens/ManagerScreen";
import NewUserScreen from "../screens/NewUserScreen";
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Manager" component={ManagerScreen} />
      <Stack.Screen name="NewUserScreen" component={NewUserScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
