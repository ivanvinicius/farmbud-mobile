import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {ISeasonProps} from '../dtos/ISeasonProps';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;

  z-index: 0;
`;

export const WarnMessage = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #de5431;
`;

export const List = styled(FlatList as new () => FlatList<ISeasonProps>)`
  flex: 1;
  height: 200px;
`;

export const ListItem = styled(RectButton)`
  width: 100%;
  height: 100px;

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

export const ListItemTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #7620d8;
`;

export const ListItemDescription = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #9c98a6;
`;

export const ListItemSubTitle = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: #9c98a6;
`;

export const AddButton = styled(RectButton)`
  position: absolute;
  bottom: 30px;
  right: 30px;

  z-index: 5;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: 100%;
  height: 60px;
  margin-top: 8px;

  background-color: #7620d8;
  border-radius: 8px;
`;

export const AddButtonText = styled.Text`
  flex: 1;

  text-align: center;
  color: #ffffff;
  font-family: 'Poppins-Medium';
  font-size: 18px;
`;

export const SpaceFooter = styled.View`
  width: 100%;
  height: 90px;
`;
