import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SelectArea} from '../pages/Budget/CreateBudget/SelectArea';
import {SelectCulture} from '../pages/Budget/CreateBudget/SelectCulture';
import {SelectProductivity} from '../pages/Budget/CreateBudget/SelectProductivity';
import {SelectSeason} from '../pages/Budget/CreateBudget/SelectSeason';
import {SelectProvider} from '../pages/Budget/CreateBudget/SelectProvider';
import {SelectComposition} from '../pages/Budget/CreateBudget/SelectComposition';

const Budget = createStackNavigator();

export function BudgetRoutes() {
  return (
    <Budget.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F0F0F7'},
      }}>
      <Budget.Screen name="SelectArea" component={SelectArea} />
      <Budget.Screen name="SelectCulture" component={SelectCulture} />
      <Budget.Screen name="SelectProductivity" component={SelectProductivity} />
      <Budget.Screen name="SelectSeason" component={SelectSeason} />
      <Budget.Screen name="SelectProvider" component={SelectProvider} />
      <Budget.Screen name="SelectComposition" component={SelectComposition} />
    </Budget.Navigator>
  );
}
