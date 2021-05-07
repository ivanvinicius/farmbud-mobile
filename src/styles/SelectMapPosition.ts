import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import {Dimensions} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 0 30px;
`;

export const MapContainer = styled(MapView)`
  flex: 1;

  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

export const NextButton = styled(RectButton)`
  position: absolute;
  bottom: 30px;
  right: 30px;

  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;

  background-color: #7620d8;
  border-radius: 30px;
`;
