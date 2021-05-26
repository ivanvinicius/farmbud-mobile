import React, {useCallback} from 'react';
import {ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {DashboardHeader} from '../components/DashboardHeader';

import {
  Container,
  Action,
  ActionBorder,
  Header,
  Title,
  Main,
  Secondary,
  Description,
  Icon,
  SmallAction,
  SmallActionBorder,
  SmallMain,
  SmallSecondary,
} from '../styles/Dashboard';

export function Dashboard() {
  const {navigate} = useNavigation();

  const handleNavigate = useCallback(
    (routeName: string) => {
      return navigate(routeName);
    },
    [navigate],
  );

  return (
    <Container>
      <DashboardHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Action onPress={() => handleNavigate('CreateBudget')}>
          <ActionBorder
            style={{
              elevation: 1,
            }}>
            <Header>
              <Title>
                <Main>Novo</Main>
                <Secondary>Orçamento</Secondary>
              </Title>
              <Icon name="plus-square" />
            </Header>
            <Description>
              Crie um novo orçamento para sua lavoura em poucos passos
            </Description>
          </ActionBorder>
        </Action>

        <SmallAction onPress={() => handleNavigate('Budget')}>
          <SmallActionBorder
            style={{
              elevation: 1,
            }}>
            <Header>
              <View>
                <SmallMain>Meus</SmallMain>
                <SmallSecondary>Orçamentos</SmallSecondary>
              </View>
              <Icon name="rotate-ccw" />
            </Header>
            <Description>Seu histórico de orçamentos</Description>
          </SmallActionBorder>
        </SmallAction>

        <SmallAction onPress={() => handleNavigate('Area')}>
          <SmallActionBorder
            style={{
              elevation: 1,
            }}>
            <Header>
              <View>
                <SmallMain>Minhas</SmallMain>
                <SmallSecondary>Áreas</SmallSecondary>
              </View>
              <Icon name="map" />
            </Header>
            <Description>Suas áreas de plantio</Description>
          </SmallActionBorder>
        </SmallAction>

        <SmallAction onPress={() => handleNavigate('Season')}>
          <SmallActionBorder
            style={{
              elevation: 1,
            }}>
            <Header>
              <View>
                <SmallMain>Minhas</SmallMain>
                <SmallSecondary>Temporadas</SmallSecondary>
              </View>
              <Icon name="sun" />
            </Header>
            <Description>Seu histórico de temporadas</Description>
          </SmallActionBorder>
        </SmallAction>

        <SmallAction onPress={() => handleNavigate('Help')}>
          <SmallActionBorder
            style={{
              elevation: 1,
            }}>
            <Header>
              <View>
                <SmallMain>Central de</SmallMain>
                <SmallSecondary>Ajuda</SmallSecondary>
              </View>
              <Icon name="help-circle" />
            </Header>
            <Description>Central de perguntas e respostas</Description>
          </SmallActionBorder>
        </SmallAction>
      </ScrollView>
    </Container>
  );
}
