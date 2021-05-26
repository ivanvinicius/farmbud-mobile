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
  ListItemTitle,
  ListItemDescription,
  ListItemSubTitle,
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
    api.get('/seasons').then((response) => {
      const formattedData = response.data.map(
        ({start_at, end_at, ...rest}: ISeasonProps) => {
          const startDate = start_at.split('T');
          const endDate = end_at.split('T');

          const formattedStart = startDate[0].split('-').reverse().join('/');
          const formattedEnd = endDate[0].split('-').reverse().join('/');

          return {
            ...rest,
            start_at: formattedStart,
            end_at: formattedEnd,
          };
        },
      );

      setSeasons(formattedData);
    });
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
              <ListItemTitle>{season.name}</ListItemTitle>
              <ListItemDescription>{season.description}</ListItemDescription>
              <ListItemSubTitle>{`${season.start_at} - ${season.end_at}`}</ListItemSubTitle>
            </ListItemBorder>
          </ListItem>
        )}
      />
    </Container>
  );
}
