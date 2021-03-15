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
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

export function SignIn() {
  const {navigate} = useNavigation();

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
            <Title>Faça seu login</Title>
          </View>
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button
            onPress={() => {
              1 + 1;
            }}>
            Entrar
          </Button>

          <CreateAccountButton onPress={() => navigate('SignUp')}>
            <CreateAccountButtonText>Criar nova conta</CreateAccountButtonText>
          </CreateAccountButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
