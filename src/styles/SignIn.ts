import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const ApplicationHeader = styled.Text`
  margin-bottom: 32px;
  font-family: 'MuseoModerno-Regular';
  font-size: 40px;
  color: #6a6180;
`;

export const HeaderIcon = styled(FeatherIcon)`
  font-size: 38px;
  color: #de5431;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #6a6180;
  font-family: 'Poppins-Regular';
  margin-bottom: 24px;
`;

export const CreateAccountButton = styled(RectButton)`
  margin-top: 52px;
`;

export const CreateAccountButtonText = styled.Text`
  color: #de5431;
  font-family: 'Poppins-Medium';
  font-size: 16px;
`;
