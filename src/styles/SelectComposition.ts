import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import {ICompositionProps} from '../dtos/ICompositionProps';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
`;

export const Card = styled.View`
  width: 100%;
  height: 150px;

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

export const Warn = styled.View`
  padding: 8px;

  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e6e6f0;
  margin-bottom: 16px;
`;

export const WarnMessage = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #de5431;
`;

export const List = styled(FlatList as new () => FlatList<ICompositionProps>)``;

export const ListItem = styled.View`
  width: 100%;

  margin-bottom: 16px;
  overflow: hidden;

  border-radius: 8px;
  padding: 8px 16px;
  justify-content: center;
  background-color: #f8f8fc;
  border: 1px solid #e6e6f0;
`;

export const LightLine = styled.Text`
  padding: 2px 0;

  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #9c98a6;
`;

export const ProductLine = styled.Text`
  padding: 1px 0;

  font-family: 'Poppins-Medium';
  font-size: 16px;
  color: #7620d8;
`;

export const BoldLine = styled.Text`
  padding: 1px 0;

  font-family: 'Poppins-Medium';
  font-size: 14px;
`;

export const Line = styled.Text`
  padding: 1px 0;

  font-family: 'Poppins-Regular';
  font-size: 14px;
`;
