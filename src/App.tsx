import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './routes';
import {AppProvider} from './hooks';

export function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F0F7" />

      <AppProvider>
        <View style={{flex: 1, backgroundColor: '#F0F0F7'}}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
}
