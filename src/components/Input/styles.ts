import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IContainerProps {
  isFocused: boolean;
  hasError: boolean;
}

interface IIConProps {
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;

  background-color: #fff;

  border-width: 1px;
  border-style: solid;
  border-color: #e6e6f0;

  ${(props) =>
    props.hasError &&
    css`
      border-color: #de5431;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #7620d8;
    `}
`;

export const Icon = styled(FeatherIcon)<IIConProps>`
  margin-right: 16px;

  font-size: 20px;
  color: #9c98a6;

  ${(props) =>
    props.isFocused &&
    css`
      color: #7620d8;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #7620d8;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;

  color: #6a6180;
  font-family: 'Poppins-Regular';
  font-size: 16px;
`;
