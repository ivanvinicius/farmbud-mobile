import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SignIn} from '../pages/Login/SignIn';
import {SignUp} from '../pages/Login/SignUp';

const Auth = createStackNavigator();

export function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F0F0F7'},
      }}>
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
}
