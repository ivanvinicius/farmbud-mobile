import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import {ICompositionProps} from '../dtos/ICompositionProps';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const CardInfo = styled.View`
  padding: 8px 16px;

  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e6e6f0;
  margin-bottom: 16px;
`;

export const List = styled(FlatList as new () => FlatList<ICompositionProps>)``;

export const ListItem = styled.View`
  width: 100%;

  margin-bottom: 16px;
  overflow: hidden;

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
