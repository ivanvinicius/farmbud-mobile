import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const Action = styled(RectButton)`
  width: 100%;
  height: 200px;

  margin-bottom: 16px;
`;

export const ActionBorder = styled.View`
  width: 100%;
  height: 100%;
  padding: 16px;

  background-color: #f8f8fc;

  border: 1px solid #e6e6f0;
  border-radius: 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.View`
  margin-bottom: 16px;
`;

export const Main = styled.Text`
  font-size: 22px;
  color: #7620d8;
  font-family: 'Poppins-Regular';
`;

export const Secondary = styled.Text`
  font-size: 32px;
  color: #7620d8;
  font-family: 'Poppins-Bold';
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #9c98a6;
  font-family: 'Poppins-regular';
`;

export const Icon = styled(FeatherIcon)`
  font-size: 32px;
  color: #7620d8;
`;

// SMALL

export const SmallAction = styled(RectButton)`
  width: 100%;
  height: 113px;

  margin-bottom: 16px;
`;

export const SmallActionBorder = styled.View`
  width: 100%;
  height: 100%;
  padding: 8px 16px;

  background-color: #f8f8fc;

  border: 1px solid #e6e6f0;
  border-radius: 8px;
`;

export const SmallMain = styled.Text`
  font-size: 18px;
  color: #7620d8;
  font-family: 'Poppins-Regular';
`;

export const SmallSecondary = styled.Text`
  font-size: 24px;
  color: #7620d8;
  font-family: 'Poppins-Bold';
`;
