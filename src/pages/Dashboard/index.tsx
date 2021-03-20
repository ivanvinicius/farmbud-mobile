import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {Header} from '../../components/Header';

import {Container} from './styles';

export function Dashboard() {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Header />

      <View>
        <TouchableOpacity
          onPress={() => navigate('Areas')}
          style={{marginBottom: 30}}>
          <Text style={{color: '#7620D8'}}>Areas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Cultures')}
          style={{marginBottom: 30}}>
          <Text style={{color: '#7620D8'}}>Culturas</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
