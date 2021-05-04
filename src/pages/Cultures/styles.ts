import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {ICultureProps} from './index';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const List = styled(FlatList as new () => FlatList<ICultureProps>)``;

export const ListItem = styled(TouchableOpacity)`
  height: 60px;
  margin-bottom: 16px;
  padding: 8px;

  overflow: hidden;

  justify-content: center;

  background-color: #f8f8fc;
  border: 1px solid #e6e6f0;
  border-radius: 8px;

  box-shadow: 6px 6px 9px rgba(0, 0, 0, 0.2);
`;

export const ListItemDescription = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #7620d8;
`;
