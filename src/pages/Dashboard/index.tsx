import React from 'react';
import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {DashboardHeader} from '../../components/DashboardHeader';

import {
  Container,
  DashboardAction,
  DashboardActionHeader,
  DashboardIcon,
  DashboardActionTitle,
  DashboardActionTitleMain,
  DashboardActionTitleSecond,
  DashboardActionDescription,
  DashboardSmallAction,
  DashboardIconSmall,
  DashboardActionTitleMainSmall,
} from './styles';

export function Dashboard() {
  const {navigate} = useNavigation();

  return (
    <Container>
      <DashboardHeader />

      <View>
        <DashboardAction onPress={() => navigate('Areas')}>
          <DashboardActionHeader>
            <DashboardActionTitle>
              <DashboardActionTitleMain>Novo</DashboardActionTitleMain>
              <DashboardActionTitleSecond>Orçamento</DashboardActionTitleSecond>
            </DashboardActionTitle>
            <DashboardIcon name="plus-square" />
          </DashboardActionHeader>

          <DashboardActionDescription>
            Gere um novo orçamento de produtos para seu cultivo
          </DashboardActionDescription>
        </DashboardAction>

        <DashboardAction onPress={() => navigate('Cultures')}>
          <DashboardActionHeader>
            <DashboardActionTitle>
              <DashboardActionTitleMain>Histórico de</DashboardActionTitleMain>
              <DashboardActionTitleSecond>
                Orçamentos
              </DashboardActionTitleSecond>
            </DashboardActionTitle>
            <DashboardIcon name="file-text" />
          </DashboardActionHeader>

          <DashboardActionDescription>
            Consulte seus orçamentos
          </DashboardActionDescription>
        </DashboardAction>
      </View>

      <View>
        <DashboardSmallAction onPress={() => navigate('Help')}>
          <DashboardIconSmall name="help-circle" />

          <DashboardActionTitleMainSmall>Ajuda</DashboardActionTitleMainSmall>
        </DashboardSmallAction>
      </View>
    </Container>
  );
}
