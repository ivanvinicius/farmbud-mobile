import React, {useCallback, useRef} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  TextInput,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/mobile';
import * as Yup from 'yup';

import Input from '../../../components/Input';
import {Button} from '../../../components/Button';
import {getValidationErrors} from '../../../utils/getValidationErrors';

import {
  ApplicationHeader,
  HeaderIcon,
  Container,
  Title,
  BackToLoginButton,
  BackToLoginButtonText,
} from './styles';

interface ISubmitFormData {
  name: string;
  email: string;
  password: string;
}

export function SignUp() {
  const {goBack} = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSubmit = useCallback(
    async ({name, email, password}: ISubmitFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Informe o nome'),
          email: Yup.string().email().required('Informe o email'),
          password: Yup.string()
            .min(6, 'No mínimo 6 digitos')
            .required('No mínimo 6 digitos'),
        });

        await schema.validate({name, email, password}, {abortEarly: false});

        // await signIn({ email, password });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          Alert.alert(
            'Erro',
            'Ocorreu um erro no cadastro, cheque suas credenciais.',
          );
        }
      }
    },
    [],
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
            <Title>Faça seu cadastro</Title>
          </View>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="name"
              icon="user"
              placeholder="Nome"
              autoCorrect={false}
              returnKeyType="next"
              onSubmitEditing={() => emailInputRef.current?.focus()}
            />
            <Input
              ref={emailInputRef}
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
              Cadastrar
            </Button>
          </Form>

          <BackToLoginButton onPress={() => goBack()}>
            <BackToLoginButtonText>Voltar ao login</BackToLoginButtonText>
          </BackToLoginButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
