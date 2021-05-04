import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import {Dimensions} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;

  width: 100%;
  height: 100%;
`;

export const BackButton = styled.View`
  position: absolute;
  z-index: 5;
  top: 26px;
  left: 20px;

  width: 60px;
  height: 50px;

  align-items: center;
  justify-content: center;

  background-color: #fff;
  border-radius: 8px;
`;

export const MapContainer = styled(MapView)`
  z-index: 0;

  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

export const CalloutContainer = styled.View`
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 70px;
  padding: 0px 16px;

  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #5506b0;
  text-align: center;
`;

export const CalloutText = styled.Text`
  text-align: center;
  font-family: 'Poppins-Medium';
  font-size: 14px;
`;

export const AddButton = styled(RectButton)`
  position: absolute;
  z-index: 5;
  bottom: 30px;
  right: 30px;

  width: 60px;
  height: 60px;

  align-items: center;
  justify-content: center;

  background-color: #7620d8;
  border-radius: 30px;
`;
