import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Provider, useSelector } from "react-redux";
import LoggedInStack from "./components/LoggedInTabStack";
import store from "./redux/configureStore";
import SignInSignUpScreen from "./screens/SignInSignUpScreen";

const Stack = createStackNavigator();

function App() {
  const token = useSelector((state) => state.auth.token);
  console.log("token: " + token);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={token != null ? "Logged In" : "SignInSignUp"}
        screenOptions={{
          animationEnabled: false,
          headerShown: false,
          headerMode: "none",
        }}
      >
        <Stack.Screen component={SignInSignUpScreen} name="SignInSignUp" />
        <Stack.Screen component={LoggedInStack} name="Logged In" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
