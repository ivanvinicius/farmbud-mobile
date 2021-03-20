import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {Container, Title} from './styles';

interface IPageTitleProps {
  title: string;
  navigateBack?: boolean;
  navigateTo?: string;
}

export function PageTitle({title, navigateBack, navigateTo}: IPageTitleProps) {
  const {goBack, navigate} = useNavigation();

  return (
    <Container>
      <View>
        {navigateBack && (
          <TouchableOpacity onPress={() => goBack()}>
            <FeatherIcon name="arrow-left" size={22} color="#7620D8" />
          </TouchableOpacity>
        )}
      </View>

      <Title>{title}</Title>

      <View>
        {navigateTo && (
          <TouchableOpacity onPress={() => navigate('Dashboard')}>
            <FeatherIcon name="arrow-right" size={22} color="#7620D8" />
          </TouchableOpacity>
        )}
      </View>
    </Container>
  );
}
