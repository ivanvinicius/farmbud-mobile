import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: 100%;
  height: 60px;
  margin-top: 8px;

  background-color: #7620d8;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  flex: 1;

  text-align: center;
  color: #ffffff;
  font-family: 'Poppins-Medium';
  font-size: 18px;
`;
