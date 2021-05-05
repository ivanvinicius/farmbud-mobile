import styled from 'styled-components/native';
import {Button} from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;

  z-index: 0;
`;

export const Texts = styled.Text``;

export const AddButton = styled(Button)`
  position: absolute;
  bottom: 30px;
  right: 30px;

  z-index: 5;
`;
