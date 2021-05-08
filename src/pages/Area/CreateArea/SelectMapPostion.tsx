import React, {useCallback, useState} from 'react';
import {MapEvent, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {PageTitle} from '../../../components/PageTitle';
import mapMarkerImg from '../../../assets/images/marker.png';

import {
  Container,
  Header,
  MapContainer,
  NextButton,
} from '../../../styles/SelectMapPosition';

export function SelectMapPosition() {
  const navigation = useNavigation();
  const [position, setPosition] = useState({latitude: 0, longitude: 0});

  const handleSelectMapPosition = useCallback((e: MapEvent) => {
    setPosition(e.nativeEvent.coordinate);
  }, []);

  const handleNavigateNextStep = useCallback(() => {
    return navigation.navigate('AreaDetail', {position});
  }, [position, navigation]);

  return (
    <Container>
      <Header>
        <PageTitle title="Selecione o Local" />
      </Header>

      <MapContainer
        mapType="satellite"
        onPress={handleSelectMapPosition}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -27.19627906930224,
          longitude: -49.963189545905756,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}>
        {position.latitude !== 0 && position.longitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
      </MapContainer>

      {position.latitude !== 0 && position.longitude !== 0 && (
        <NextButton style={{elevation: 2}} onPress={handleNavigateNextStep}>
          <FeatherIcon name="arrow-right" size={22} color="#FFF" />
        </NextButton>
      )}
    </Container>
  );
}
