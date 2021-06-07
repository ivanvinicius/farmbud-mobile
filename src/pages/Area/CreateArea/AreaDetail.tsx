import React, {useCallback, useRef} from 'react';
import {FormHandles} from '@unform/core';
import {Form} from '@unform/mobile';
import {Alert, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import * as Yup from 'yup';
import {useRoute, useNavigation} from '@react-navigation/native';

import {PageTitle} from '../../../components/PageTitle';
import Input from '../../../components/Input';
import {Button} from '../../../components/Button';
import {api} from '../../../services/api';
import {getValidationErrors} from '../../../utils/getValidationErrors';

import {Container, Content} from '../../../styles/AreaDetail';

interface IFormData {
  name: string;
  description: string;
  size: number;
}

interface IAreaProps {
  position: {
    latitude: number;
    longitude: number;
  };
}

export function AreaDetail() {
  const {navigate} = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const route = useRoute();
  const {position} = route.params as IAreaProps;

  const handleNavigate = useCallback(() => {
    return navigate('ListArea');
  }, [navigate]);

  const handleSubmit = useCallback(
    async ({name, description, size}: IFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required(),
          description: Yup.string().required(),
          size: Yup.number().required(),
        });

        await schema.validate({name, description, size}, {abortEarly: false});

        await api.post('/areas', {
          name,
          description,
          size: Number(size),
          latitude: position.latitude,
          longitude: position.longitude,
        });

        Alert.alert('Area cadastrada com sucesso!');

        handleNavigate();
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
    [handleNavigate, position],
  );

  return (
    <Container>
      <PageTitle title="Detalhes da Área" />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          keyboardShouldPersistTaps="handled">
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
              <Input
                name="size"
                keyboardType="number-pad"
                placeholder="Tamanho"
                icon="maximize"
                autoCorrect={false}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Cadastrar
              </Button>
            </Form>
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
