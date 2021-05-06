import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {PageTitle} from '../../components/PageTitle';
import {api} from '../../services/api';
import {ISeasonProps} from '../../dtos/ISeasonProps';

import {Container, Texts, AddButton, AddButtonText} from './styles';

export function Seasons() {
  const navigation = useNavigation();

  const [seasons, setSeasons] = useState<ISeasonProps[]>([]);

  useEffect(() => {
    api.get('/seasons').then((response) => setSeasons(response.data));
  }, []);

  return (
    <Container>
      <PageTitle title="Temporadas" navigateBack />

      <Texts>Seasons Screen</Texts>

      <AddButton onPress={() => navigation.navigate('CreateSeason')}>
        <AddButtonText>Nova Temporada</AddButtonText>
      </AddButton>
    </Container>
  );
}
