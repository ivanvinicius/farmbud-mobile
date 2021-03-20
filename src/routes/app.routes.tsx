import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Dashboard} from '../pages/Dashboard';

const App = createStackNavigator();

export function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F0F0F7'},
      }}>
      <App.Screen name="Dashboard" component={Dashboard} />
    </App.Navigator>
  );
}
