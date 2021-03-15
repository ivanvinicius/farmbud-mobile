import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, Icon, TextInput} from './styles';

interface IInputProps extends TextInputProps {
  name: string;
  icon: string;
}

export function Input({name, icon, ...rest}: IInputProps) {
  return (
    <Container>
      <Icon name={icon} />
      <TextInput placeholderTextColor="#9C98A6" {...rest} />
    </Container>
  );
}
