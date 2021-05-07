/* eslint-disable @typescript-eslint/no-explicit-any */

import React, {useCallback, useState} from 'react';
import {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {IAreaProps} from '../../dtos/IAreaProps';
import {api} from '../../services/api';
import mapMarkerImg from '../../assets/images/marker.png';

import {
  Container,
  BackButton,
  MapContainer,
  CalloutContainer,
  CalloutText,
  AddButton,
} from '../../styles/Area';

export function Area() {
  const {goBack, navigate} = useNavigation();
  const [areas, setAreas] = useState<IAreaProps[]>([]);

  const handleGoBack = useCallback(() => {
    return goBack();
  }, [goBack]);

  const handleNavigate = useCallback(
    (routeName: string) => {
      return navigate(routeName);
    },
    [navigate],
  );

  const handleNavigateToNextStep = useCallback(
    (areaId: string) => {
      return navigate('Cultures', {area: {id: areaId}});
    },
    [navigate],
  );

  useFocusEffect(() => {
    api.get('/areas').then((response) => {
      const formattedData = response.data.map((item: any) => ({
        ...item,
        size: Number(item.size),
        latitude: Number(item.latitude),
        longitude: Number(item.longitude),
      }));

      setAreas(formattedData);
    });
  });

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
              style={{elevation: 2}}
              key={area.id}
              icon={mapMarkerImg}
              calloutAnchor={{
                x: 2.5,
                y: 0.7,
              }}
              coordinate={{
                latitude: area.latitude,
                longitude: area.longitude,
              }}>
              <Callout
                onPress={() => handleNavigateToNextStep(area.id)}
                tooltip>
                <CalloutContainer>
                  <CalloutText>{area.description}</CalloutText>
                </CalloutContainer>
              </Callout>
            </Marker>
          );
        })}
      </MapContainer>

      <AddButton
        onPress={() => handleNavigate('CreateArea')}
        style={{elevation: 2}}>
        <FeatherIcon name="plus" size={22} color="#FFF" />
      </AddButton>
    </Container>
  );
}
