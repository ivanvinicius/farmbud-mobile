import React, {useCallback, useEffect, useRef} from 'react';
import {Alert} from 'react-native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';

import {PageTitle} from '../../components/PageTitle';
import {getValidationErrors} from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import {Button} from '../../components/Button';
import {api} from '../../services/api';

import {Container, Content} from '../../styles/CreateSeason';

interface IFormData {
  name: string;
  description: string;
}

export function NewCreateSeason() {
  const {goBack} = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleGoBack = useCallback(() => {
    return goBack();
  }, [goBack]);

  const handleSubmit = useCallback(
    async ({name, description}: IFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          description: Yup.string().required('Descrição Obrigatório'),
        });

        await schema.validate({name, description}, {abortEarly: false});

        const formattedData = {
          name,
          description,
        };

        await api.post('/seasons', formattedData);

        Alert.alert('Sucesso', 'Cadastro realizado.');

        handleGoBack();
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
    [handleGoBack],
  );

  return (
    <Container>
      <PageTitle title="new create season" />

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
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

          <Button onPress={() => formRef.current?.submitForm()}>
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
