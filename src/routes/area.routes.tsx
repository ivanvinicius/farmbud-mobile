import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Area} from '../pages/Area/Area';
import {SelectMapPosition} from '../pages/Area/CreateArea/SelectMapPostion';
import {AreaDetail} from '../pages/Area/CreateArea/AreaDetail';

const AreaNav = createStackNavigator();

export function AreaRoutes() {
  return (
    <AreaNav.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#F0F0F7'},
      }}>
      <AreaNav.Screen name="ListArea" component={Area} />
      <AreaNav.Screen name="CreateArea" component={SelectMapPosition} />
      <AreaNav.Screen name="AreaDetail" component={AreaDetail} />
    </AreaNav.Navigator>
  );
}
