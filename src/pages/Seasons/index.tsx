import React, {useEffect, useState} from 'react';

import {PageTitle} from '../../components/PageTitle';
import {api} from '../../services/api';
import {ISeasonProps} from '../../dtos/ISeasonProps';

import {Container, Texts, AddButton} from './styles';

export function Seasons() {
  const [seasons, setSeasons] = useState<ISeasonProps[]>([]);

  useEffect(() => {
    api.get('/seasons').then((response) => setSeasons(response.data));
  }, []);

  return (
    <Container>
      <PageTitle title="Temporadas" navigateBack />

      <Texts>Seasons Screen</Texts>

      <AddButton onPress={() => ({})}>Cadastrar</AddButton>
    </Container>
  );
}
