/* eslint-disable react/jsx-curly-newline */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, {useCallback, useRef, useState} from 'react';
import {Alert, Platform} from 'react-native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';

import {PageTitle} from '../../components/PageTitle';
import {getValidationErrors} from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import {Button} from '../../components/Button';
import {api} from '../../services/api';
import {ButtonCalendar} from '../../components/ButtonCalendar';

import {Container, Content} from '../../styles/CreateSeason';

interface IFormData {
  name: string;
  description: string;
}

export function CreateSeason() {
  const {goBack} = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const [showDatePickerStart, setShowDatePickerStart] = useState(false);
  const [showDatePickerEnd, setShowDatePickerEnd] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(
    new Date(new Date().setMonth(new Date().getMonth() + 1)),
  );

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
          start_at: selectedStartDate,
          end_at: selectedEndDate,
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
    [handleGoBack, selectedStartDate, selectedEndDate],
  );

  const handleToggleDatePicker = useCallback((picker: 'start' | 'end') => {
    if (picker === 'start') setShowDatePickerStart((state) => !state);
    if (picker === 'end') setShowDatePickerEnd((state) => !state);
  }, []);

  const handleDateChange = useCallback(
    (event: any, newDate: Date | undefined, picker: 'start' | 'end') => {
      if (picker === 'start') {
        if (Platform.OS === 'android')
          setShowDatePickerStart((state) => !state);
        if (newDate) setSelectedStartDate(newDate);
      }

      if (picker === 'end') {
        if (Platform.OS === 'android') setShowDatePickerEnd((state) => !state);
        if (newDate) setSelectedEndDate(newDate);
      }
    },
    [],
  );

  return (
    <Container>
      <PageTitle title="Nova Temporada" />

      {showDatePickerStart && (
        <DateTimePicker
          onChange={(event: any, date: Date | undefined) =>
            handleDateChange(event, date, 'start')
          }
          minimumDate={selectedStartDate}
          value={selectedStartDate}
          mode="date"
          display="calendar"
        />
      )}

      {showDatePickerEnd && (
        <DateTimePicker
          onChange={(event: any, date: Date | undefined) =>
            handleDateChange(event, date, 'end')
          }
          minimumDate={selectedEndDate}
          value={selectedEndDate}
          mode="date"
          display="calendar"
        />
      )}

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

          <ButtonCalendar
            onPress={() => handleToggleDatePicker('start')}
            value={String(selectedStartDate.toLocaleDateString('pt-BR'))}
          />

          <ButtonCalendar
            onPress={() => handleToggleDatePicker('end')}
            value={String(selectedEndDate.toLocaleDateString('pt-BR'))}
          />

          <Button onPress={() => formRef.current?.submitForm()}>
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
