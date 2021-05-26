/* eslint-disable @typescript-eslint/no-explicit-any */

import React, {useCallback, useRef} from 'react';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {PageTitle} from '../../components/PageTitle';
import {Button} from '../../components/Button';
import Input from '../../components/Input';

import {Container, Content} from '../../styles/CreateSeason';
import {api} from '../../services/api';
import {getValidationErrors} from '../../utils/getValidationErrors';

interface IFormData {
  name: string;
  description: string;
  start_at: string;
  end_at: string;
}

export function CreateSeason() {
  const {goBack} = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleGoBack = useCallback(() => {
    return goBack();
  }, [goBack]);

  const handleSubmit = useCallback(
    async ({name, description, start_at, end_at}: IFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required(),
          description: Yup.string().required(),
          start_at: Yup.string().required(),
          end_at: Yup.string().required(),
        });

        await schema.validate(
          {name, description, start_at, end_at},
          {abortEarly: false},
        );

        const formattedData = {
          name,
          description,
          start_at: start_at.split('/').reverse().join('-'),
          end_at: end_at.split('/').reverse().join('-'),
        };

        await api.post('/seasons', formattedData);

        Alert.alert('Sucesso', 'Cadastro realizado.');

        handleGoBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        } else {
          Alert.alert(
            'Erro',
            'Ocorreu um erro no cadastro, cheque suas informações.',
          );
        }
      }
    },
    [handleGoBack],
  );

  return (
    <Container>
      <PageTitle title="Cadastrar Temporada" />

      <Content>
        <Form
          initialData={{
            start_at: new Date().toLocaleDateString('pt-BR'),
          }}
          ref={formRef}
          onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Nome"
            icon="tag"
            autoCorrect={false}
          />
          <Input
            name="description"
            placeholder="Descrição"
            icon="file"
            autoCorrect={false}
          />
          <Input
            name="start_at"
            placeholder="Data Inicial 10/07/2021"
            icon="calendar"
            autoCorrect={false}
          />
          <Input
            name="end_at"
            placeholder="Data Final 12/09/2021"
            icon="calendar"
            autoCorrect={false}
          />

          <Button onPress={() => formRef.current?.submitForm()}>
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
