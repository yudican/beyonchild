import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../../container/pages/Auth/Login';
import Register from '../../container/pages/Auth/Register/Register';
import BoardingScreen from '../../container/pages/BoardingScreen';
const Stack = createNativeStackNavigator();
const PublicRoute = () => {
  return (
    <Stack.Navigator initialRouteName="BoardingScreen">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BoardingScreen"
        component={BoardingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PublicRoute;
