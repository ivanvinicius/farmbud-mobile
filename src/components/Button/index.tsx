import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, ButtonText} from './styles';

interface IButtonProps extends RectButtonProperties {
  children: string;
}

export function Button({children, ...rest}: IButtonProps) {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}
