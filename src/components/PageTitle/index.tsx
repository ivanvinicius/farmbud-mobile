import React, {useCallback} from 'react';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {Container, Title} from './styles';

interface IPageTitleProps {
  title: string;
  navigateTo?: string;
}

export function PageTitle({title, navigateTo}: IPageTitleProps) {
  const {goBack, navigate} = useNavigation();

  const handleGoBack = useCallback(() => {
    return goBack();
  }, [goBack]);

  const handleNavigate = useCallback(
    (routeName: string) => {
      return navigate(routeName);
    },
    [navigate],
  );

  return (
    <Container>
      <View>
        <RectButton onPress={handleGoBack}>
          <FeatherIcon name="arrow-left" size={22} color="#7620D8" />
        </RectButton>
      </View>

      <Title>{title}</Title>

      <View>
        {navigateTo && (
          <RectButton onPress={() => handleNavigate(navigateTo)}>
            <FeatherIcon name="arrow-right" size={22} color="#7620D8" />
          </RectButton>
        )}
      </View>
    </Container>
  );
}
