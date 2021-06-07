import React, {useCallback, useRef} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  TextInput,
  Alert,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/mobile';
import * as Yup from 'yup';

import Input from '../../components/Input';
import {Button} from '../../components/Button';
import {getValidationErrors} from '../../utils/getValidationErrors';
import {useAuth} from '../../hooks/Auth';

import {
  ApplicationHeader,
  HeaderIcon,
  Container,
  Title,
  CreateAccountButton,
  CreateAccountButtonText,
} from '../../styles/SignIn';

interface ISubmitFormData {
  email: string;
  password: string;
}

export function SignIn() {
  const {navigate} = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const {signIn} = useAuth();

  const handleNavigate = useCallback(() => {
    return navigate('SignUp');
  }, [navigate]);

  const handleSubmit = useCallback(
    async ({email, password}: ISubmitFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().email().required('Informe o email'),
          password: Yup.string()
            .min(6, 'No mínimo 6 digitos')
            .required('No mínimo 6 digitos'),
        });

        await schema.validate({email, password}, {abortEarly: false});

        await signIn({email, password});
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        if (err.response.data.message) {
          Alert.alert('Houve um problema', err.response.data.message);
        }
      }
    },
    [signIn],
  );

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

          <CreateAccountButton onPress={handleNavigate}>
            <CreateAccountButtonText>Criar nova conta</CreateAccountButtonText>
          </CreateAccountButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
