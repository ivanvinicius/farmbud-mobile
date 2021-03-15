import React from 'react';
import {KeyboardAvoidingView, ScrollView, Platform, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Input} from '../../../components/Input';
import {Button} from '../../../components/Button';

import {
  ApplicationHeader,
  HeaderIcon,
  Container,
  Title,
  BackToLoginButton,
  BackToLoginButtonText,
} from './styles';

export function SignUp() {
  const {goBack} = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        keyboardShouldPersistTaps="handled">
        <Container>
          <ApplicationHeader>
            Fa<HeaderIcon name="tree-outline" size={38} color="orange"/>m Bud {/*eslint-disable-line*/}
          </ApplicationHeader>

          <View>
            <Title>Faça seu cadastro</Title>
          </View>
          <Input name="name" icon="user" placeholder="Nome" />
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button
            onPress={() => {
              1 + 1;
            }}>
            Cadastrar
          </Button>

          <BackToLoginButton onPress={() => goBack()}>
            <BackToLoginButtonText>Voltar ao login</BackToLoginButtonText>
          </BackToLoginButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
