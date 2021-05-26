import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AreaRoutes} from './area.routes';
import {BudgetRoutes} from './budget.routes';
import {SeasonRoutes} from './season.routes';

import {Dashboard} from '../pages/Dashboard';
import {Budget} from '../pages/Budget/Budget';
import {BudgetDetail} from '../pages/Budget/BudgetDetail';
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
      <App.Screen name="CreateBudget" component={BudgetRoutes} />
      <App.Screen name="Budget" component={Budget} />
      <App.Screen name="BudgetDetail" component={BudgetDetail} />
      <App.Screen name="Area" component={AreaRoutes} />
      <App.Screen name="Season" component={SeasonRoutes} />
      <App.Screen name="Help" component={Help} />
    </App.Navigator>
  );
}
