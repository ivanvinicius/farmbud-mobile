import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {PageTitle} from '../../components/PageTitle';
import {api} from '../../services/api';
import {ISeasonProps} from '../../dtos/ISeasonProps';

import {
  Container,
  List,
  ListItem,
  ListItemBorder,
  ListItemDescription,
  AddButton,
  AddButtonText,
} from '../../styles/Season';

export function Season() {
  const [seasons, setSeasons] = useState<ISeasonProps[]>([]);
  const {navigate} = useNavigation();

  useEffect(() => {
    api.get('/seasons').then((response) => setSeasons(response.data));
  }, []);

  return (
    <Container>
      <PageTitle title="Temporadas" />

      <List
        showsVerticalScrollIndicator={false}
        data={seasons}
        keyExtractor={(season) => season.id}
        renderItem={({item: season}) => (
          <ListItem>
            <ListItemBorder
              style={{
                elevation: 1,
              }}>
              <ListItemDescription>{season.name}</ListItemDescription>
            </ListItemBorder>
          </ListItem>
        )}
      />

      <AddButton onPress={() => navigate('CreateSeason')}>
        <AddButtonText>Nova Temporada</AddButtonText>
      </AddButton>
    </Container>
  );
}
