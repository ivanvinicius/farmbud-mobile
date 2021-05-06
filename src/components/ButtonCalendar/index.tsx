import React, {useEffect, useState} from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {Container, ButtonBorder, Icon, ButtonText} from './styles';

interface IButtonProps extends RectButtonProperties {
  children: string | Date;
}

export function ButtonCalendar({children, ...rest}: IButtonProps) {
  const [isFilled, setIsFilled] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (children instanceof Date) {
      setText(String(children.toLocaleDateString()));
      setIsFilled(true);
    } else {
      setText(children);
      setIsFilled(false);
    }
  }, [children]);

  return (
    <Container {...rest}>
      <ButtonBorder>
        <Icon name="calendar" isFilled={isFilled} />

        <ButtonText isFilled={isFilled}>{text}</ButtonText>
      </ButtonBorder>
    </Container>
  );
}
