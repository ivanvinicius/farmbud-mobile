/* eslint-disable @typescript-eslint/no-explicit-any */

import React, {useCallback, useEffect, useState} from 'react';
import {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import {IAreaProps} from '../../dtos/IAreaProps';
import {api} from '../../services/api';
import mapMarkerImg from '../../assets/images/marker.png';

import {
  Container,
  BackButton,
  MapContainer,
  CalloutContainer,
  CalloutTitle,
  CalloutDescription,
  AddButton,
  AreaCounter,
  AreaCounterText,
} from '../../styles/Area';

export function Area() {
  const {goBack, navigate} = useNavigation();
  const [areas, setAreas] = useState<IAreaProps[]>([]);
  const isFocused = useIsFocused();

  const handleGoBack = useCallback(() => {
    return goBack();
  }, [goBack]);

  const handleNavigate = useCallback(() => {
    return navigate('CreateArea');
  }, [navigate]);

  useEffect(() => {
    if (isFocused) {
      api.get('/areas').then((response) => {
        const formattedData = response.data.map((item: any) => ({
          ...item,
          size: Number(item.size),
          latitude: Number(item.latitude),
          longitude: Number(item.longitude),
        }));

        setAreas(formattedData);
      });
    }
  }, [isFocused]);

  return (
    <Container>
      <BackButton style={{elevation: 2}} onPress={handleGoBack}>
        <FeatherIcon name="arrow-left" size={22} color="#7620D8" />
      </BackButton>

      <MapContainer
        mapType="satellite"
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -27.19627906930224,
          longitude: -49.963189545905756,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}>
        {areas.map((area) => {
          return (
            <Marker
              key={area.id}
              icon={mapMarkerImg}
              calloutAnchor={{
                x: 0.5,
                y: -0.1,
              }}
              coordinate={{
                latitude: area.latitude,
                longitude: area.longitude,
              }}>
              <Callout tooltip>
                <CalloutContainer>
                  <CalloutTitle>{area.name}</CalloutTitle>
                  <CalloutDescription>{`${area.description} / ${area.size} hectare(s)`}</CalloutDescription>
                </CalloutContainer>
              </Callout>
            </Marker>
          );
        })}
      </MapContainer>

      <AreaCounter>
        <AreaCounterText>{`${areas.length} áreas cadastradas`}</AreaCounterText>
      </AreaCounter>

      <AddButton onPress={handleNavigate} style={{elevation: 2}}>
        <FeatherIcon name="plus" size={22} color="#FFF" />
      </AddButton>
    </Container>
  );
}
