import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {PageTitle} from '../../../components/PageTitle';
import {api} from '../../../services/api';
import {ICultureProps} from '../../../dtos/ICultureProps';

import {
  Container,
  List,
  ListItem,
  ListItemDescription,
  ListItemBorder,
} from '../../../styles/Culture';

interface IRouteProps {
  area: {
    id: string;
    size: number;
  };
}

export function SelectCulture() {
  const [cultures, setCultures] = useState<ICultureProps[]>([]);
  const {navigate} = useNavigation();
  const route = useRoute();
  const {area} = route.params as IRouteProps;

  const handleNavigateNextStep = useCallback(
    (cultureId: string) => {
      return navigate('SelectProductivity', {
        area,
        culture: {id: cultureId},
      });
    },
    [navigate, area],
  );

  useEffect(() => {
    api.get('/cultures').then((response) => setCultures(response.data));
  }, []);

  return (
    <Container>
      <PageTitle title="Culturas" />

      <List
        showsVerticalScrollIndicator={false}
        data={cultures}
        keyExtractor={(culture) => culture.id}
        renderItem={({item: culture}) => (
          <ListItem onPress={() => handleNavigateNextStep(culture.id)}>
            <ListItemBorder
              style={{
                elevation: 1,
              }}>
              <ListItemDescription>{culture.name}</ListItemDescription>
            </ListItemBorder>
          </ListItem>
        )}
      />
    </Container>
  );
}
