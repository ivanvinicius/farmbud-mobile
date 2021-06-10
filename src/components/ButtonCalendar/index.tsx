import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {ContainerBorder, Container, Icon, ValueText} from './styles';

interface IButtonCalendarProps extends RectButtonProperties {
  value: string;
}

export function ButtonCalendar({value, ...rest}: IButtonCalendarProps) {
  return (
    <ContainerBorder>
      <Container {...rest}>
        <Icon name="calendar" isFilled={!!value} />

        <ValueText>{value}</ValueText>
      </Container>
    </ContainerBorder>
  );
}
