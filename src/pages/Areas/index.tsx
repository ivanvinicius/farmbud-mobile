import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {PageTitle} from '../../components/PageTitle';
import mapStyle from '../../styles/CustomMapStyle';

import {Container, Header, MapContainer} from './styles';

export function Areas() {
  return (
    <Container>
      <Header>
        <PageTitle title="Areas" navigateBack />
      </Header>

      <MapContainer>
        <MapView
          style={{flex: 1}}
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -27.1164307,
            longitude: -49.9944051,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
        />
      </MapContainer>
    </Container>
  );
}
