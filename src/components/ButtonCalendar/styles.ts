import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IIconProps {
  isFilled: boolean;
}

export const ContainerBorder = styled.View`
  margin-bottom: 8px;

  background-color: #fff;

  border: 1px solid #e6e6f0;
  border-radius: 8px;
`;

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(FeatherIcon)<IIconProps>`
  margin-right: 16px;

  font-size: 20px;
  color: #9c98a6;

  ${(props) =>
    props.isFilled &&
    css`
      color: #7620d8;
    `}
`;

export const ValueText = styled.Text`
  flex: 1;

  color: #6a6180;
  font-family: 'Poppins-Regular';
  font-size: 16px;
`;
