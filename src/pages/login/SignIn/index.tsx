import React, {useCallback, useRef} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/mobile';

import Input from '../../../components/Input';
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
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSubmit = useCallback((data: {}) => {
    console.log(data);
  }, []);

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

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              icon="mail"
              placeholder="E-mail"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />
            <Input
              ref={passwordInputRef}
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              textContentType="newPassword"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />

            <Button onPress={() => formRef.current?.submitForm()}>
              Entrar
            </Button>
          </Form>

          <CreateAccountButton onPress={() => navigate('SignUp')}>
            <CreateAccountButtonText>Criar nova conta</CreateAccountButtonText>
          </CreateAccountButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
