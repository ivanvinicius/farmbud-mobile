import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Season} from '../pages/Season/Season';
// import {CreateSeason} from '../pages/Season/CreateSeason';
import {NewCreateSeason} from '../pages/Season/NewCreateSeason';

const SeasonNav = createStackNavigator();

export function SeasonRoutes() {
  return (
    <SeasonNav.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F0F0F7'},
      }}>
      <SeasonNav.Screen name="ListSeason" component={Season} />
      <SeasonNav.Screen name="CreateSeason" component={NewCreateSeason} />
    </SeasonNav.Navigator>
  );
}
