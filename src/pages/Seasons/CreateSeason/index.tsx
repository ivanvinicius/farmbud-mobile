/* eslint-disable @typescript-eslint/no-explicit-any */

import React, {useCallback, useRef, useState} from 'react';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import DateTimePicker from '@react-native-community/datetimepicker';

import {Alert, Platform} from 'react-native';
import {PageTitle} from '../../../components/PageTitle';
import {Button} from '../../../components/Button';
import Input from '../../../components/Input';

import {Container, Content} from './styles';
import {ButtonCalendar} from '../../../components/ButtonCalendar';

interface IFormData {
  name: string;
  description: string;
  start_at: Date;
  end_at: Date;
}

export function CreateSeason() {
  const formRef = useRef<FormHandles>(null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const toggleDatePicker = useCallback(() => {
    setShowDatePicker((state) => !state);
  }, []);

  const handleDateChange = useCallback((_e: any, newDate: Date | undefined) => {
    if (Platform.OS === 'android') setShowDatePicker((state) => !state);

    if (newDate) setSelectedDate(newDate);
  }, []);

  const handleSubmit = useCallback(async (_data: IFormData) => ({}), []);

  return (
    <Container>
      <PageTitle title="Cadastrar Temporada" navigateBack />

      <Content>
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            mode="date"
            display="calendar"
            onChange={handleDateChange}
          />
        )}

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

          <ButtonCalendar onPress={toggleDatePicker}>
            {selectedDate}
          </ButtonCalendar>
          <ButtonCalendar onPress={toggleDatePicker}>Data Final</ButtonCalendar>

          <Button onPress={() => formRef.current?.submitForm()}>
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
