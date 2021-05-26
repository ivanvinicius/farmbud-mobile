import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {FlatList} from 'react-native';

import {IBudegtDetailProps} from '../dtos/IBudgetDetailProps';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const Card = styled.View`
  width: 100%;
  height: 200px;

  padding: 8px;

  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e6e6f0;
  margin-bottom: 16px;
`;

export const CardRow = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const CardItem = styled.View`
  flex: 1;
  padding: 8px;
`;

export const CardTitle = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 16px;
  color: #7620d8;
`;

export const CardInfo = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
`;

export const List = styled(
  FlatList as new () => FlatList<IBudegtDetailProps>,
)``;

export const ListItem = styled(RectButton)`
  width: 100%;
  height: 330px;

  margin-bottom: 16px;

  overflow: hidden;
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
  font-size: 16px;
  font-family: 'Poppins-Medium';
  color: #7620d8;
`;

export const Line = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;

export const BoldLine = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
`;

export const LightLine = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: #9c98a6;
`;
