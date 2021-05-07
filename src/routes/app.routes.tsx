import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SeasonRoutes} from './season.routes';
import {BudgetRoutes} from './budget.routes';

import {Dashboard} from '../pages/Dashboard';
import {Help} from '../pages/Help';

const App = createStackNavigator();

export function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F0F0F7'},
      }}>
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="Season" component={SeasonRoutes} />

      <App.Screen name="CreateBudget" component={BudgetRoutes} />

      <App.Screen name="Help" component={Help} />
    </App.Navigator>
  );
}
