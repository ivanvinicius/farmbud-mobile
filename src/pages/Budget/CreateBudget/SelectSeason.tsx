import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {PageTitle} from '../../../components/PageTitle';
import {api} from '../../../services/api';
import {ISeasonProps} from '../../../dtos/ISeasonProps';

import {
  Container,
  List,
  ListItem,
  ListItemBorder,
  ListItemDescription,
} from '../../../styles/Season';

interface IRouteProps {
  area: {
    id: string;
    size: number;
  };
  culture: {
    id: string;
  };
  productivity: {
    id: string;
  };
}

export function SelectSeason() {
  const [seasons, setSeasons] = useState<ISeasonProps[]>([]);
  const {navigate} = useNavigation();
  const route = useRoute();
  const {area, culture, productivity} = route.params as IRouteProps;

  const handleNavigateNextStep = useCallback(
    (seasonId: string) => {
      return navigate('SelectProvider', {
        area,
        culture,
        productivity,
        season: {id: seasonId},
      });
    },
    [navigate, area, culture, productivity],
  );

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
          <ListItem onPress={() => handleNavigateNextStep(season.id)}>
            <ListItemBorder
              style={{
                elevation: 1,
              }}>
              <ListItemDescription>{season.name}</ListItemDescription>
            </ListItemBorder>
          </ListItem>
        )}
      />
    </Container>
  );
}
