import React from 'react';
import {ScrollView} from 'react-native';

import {PageTitle} from '../components/PageTitle';

import {
  Container,
  ContentContainer,
  Title,
  Description,
  Strong,
} from '../styles/Help';

export function Help() {
  return (
    <Container>
      <PageTitle title="Ajuda" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentContainer style={{elevation: 1}}>
          <Title>Criar orçamentos</Title>
          <Description>
            Para criar um novo orçamento basta clicar na funcionalidade
            <Strong>Novo Orçamento</Strong>
            presente na tela inicial da aplicação
          </Description>
          <Title>Criar orçamentos</Title>
          <Description>
            Para criar um novo orçamento basta clicar na funcionalidade
            <Strong>Novo Orçamento</Strong>
            presente na tela inicial da aplicação
          </Description>
          <Title>Criar orçamentos</Title>
          <Description>
            Para criar um novo orçamento basta clicar na funcionalidade
            <Strong>Novo Orçamento</Strong>
            presente na tela inicial da aplicação
          </Description>
          <Title>Criar orçamentos</Title>
          <Description>
            Para criar um novo orçamento basta clicar na funcionalidade
            <Strong>Novo Orçamento</Strong>
            presente na tela inicial da aplicação
          </Description>
          <Title>Criar orçamentos</Title>
          <Description>
            Para criar um novo orçamento basta clicar na funcionalidade
            <Strong>Novo Orçamento</Strong>
            presente na tela inicial da aplicação
          </Description>
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}
