import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useAuth} from '../hooks/Auth';

import {AuthRoutes} from './auth.routes';
import {AppRoutes} from './app.routes';

export function Routes() {
  const {user, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="#7620D8" size="large" />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
}
