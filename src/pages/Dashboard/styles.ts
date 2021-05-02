import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const DashboardAction = styled(TouchableOpacity)`
  height: 200px;
  padding: 16px;
  margin-bottom: 16px;

  background-color: #f8f8fc;

  border: 1px solid #e6e6f0;
  border-radius: 8px;
`;
export const DashboardActionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DashboardIcon = styled(FeatherIcon)`
  font-size: 32px;
  color: #7620d8;
`;

export const DashboardActionTitle = styled.View`
  margin-bottom: 16px;
`;

export const DashboardActionTitleMain = styled.Text`
  font-size: 22px;
  color: #7620d8;
  font-family: 'Poppins-Regular';
`;

export const DashboardActionTitleSecond = styled.Text`
  font-size: 32px;
  color: #7620d8;
  font-family: 'Poppins-Bold';
`;

export const DashboardActionDescription = styled.Text`
  font-size: 16px;
  color: #9c98a6;
  font-family: 'Poppins-regular';
`;

export const DashboardSmallAction = styled(TouchableOpacity)`
  height: 100px;
  width: 100px;
  padding: 16px;

  background-color: #f8f8fc;

  border: 1px solid #e6e6f0;
  border-radius: 8px;
`;

export const DashboardIconSmall = styled(FeatherIcon)`
  font-size: 36px;
  color: #7620d8;
  margin-bottom: 16px;
`;

export const DashboardActionTitleMainSmall = styled.Text`
  font-size: 16px;
  color: #7620d8;
  font-family: 'Poppins-Regular';
`;
