import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Dashboard} from '../pages/Dashboard';
import {Areas} from '../pages/Areas';
import {CreateArea} from '../pages/Areas/CreateArea';
import {AreaDetail} from '../pages/Areas/AreaDetail';

import {Cultures} from '../pages/Cultures';
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
      <App.Screen name="Areas" component={Areas} />
      <App.Screen name="CreateArea" component={CreateArea} />
      <App.Screen name="AreaDetail" component={AreaDetail} />
      <App.Screen name="Cultures" component={Cultures} />
      <App.Screen name="Help" component={Help} />
    </App.Navigator>
  );
}
