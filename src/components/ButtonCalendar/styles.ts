import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IButtonTextProps {
  isFilled: boolean;
}

interface IIconProps {
  isFilled: boolean;
}

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;

  flex-direction: row;
  align-items: center;

  overflow: hidden;

  margin-bottom: 8px;
`;

export const ButtonBorder = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;

  border-radius: 8px;
  background-color: #fff;

  border: 1px solid #e6e6f0;
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

export const ButtonText = styled.Text<IButtonTextProps>`
  flex: 1;

  color: #9c98a6;
  font-family: 'Poppins-Regular';
  font-size: 16px;

  ${(props) =>
    props.isFilled &&
    css`
      color: #6a6180;
    `}
`;
