import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {FlatList} from 'react-native';

import {IBudgetProps} from '../dtos/IBudgetProps';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const List = styled(FlatList as new () => FlatList<IBudgetProps>)``;

export const ListItem = styled(RectButton)`
  width: 100%;
  height: 330px;

  margin-bottom: 16px;

  overflow: hidden;
`;

export const WarnMessage = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #de5431;
`;

export const ListItemBorder = styled.View`
  width: 100%;
  height: 100%;

  border-radius: 8px;
  padding: 8px;
  justify-content: center;
  background-color: #f8f8fc;
  border: 1px solid #e6e6f0;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  color: #7620d8;
`;

export const Line = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
`;

export const BoldLine = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 14px;
`;

export const LightLine = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #9c98a6;
`;
