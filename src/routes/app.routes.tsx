import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Dashboard} from '../pages/Dashboard';
import {Cultures} from '../pages/Cultures';

const App = createStackNavigator();

export function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F0F0F7', paddingHorizontal: 30},
      }}>
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="Cultures" component={Cultures} />
    </App.Navigator>
  );
}
