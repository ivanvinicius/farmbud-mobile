import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {ICultureProps} from '../dtos/ICultureProps';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const List = styled(FlatList as new () => FlatList<ICultureProps>)``;

export const ListItem = styled(RectButton)`
  width: 100%;
  height: 60px;

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

export const ListItemDescription = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #7620d8;
`;
