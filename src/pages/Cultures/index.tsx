import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {PageTitle} from '../../components/PageTitle';
import {api} from '../../services/api';

import {Container, List, ListItem, ListItemDescription} from './styles';

export interface ICultureProps {
  id: string;
  name: string;
}

export function Cultures() {
  const [cultures, setCultures] = useState<ICultureProps[]>([]);
  const {navigate} = useNavigation();

  useEffect(() => {
    api.get('/cultures').then((response) => setCultures(response.data));
  }, []);

  return (
    <Container>
      <PageTitle title="Culturas" navigateBack />

      <List
        data={cultures}
        keyExtractor={(culture) => culture.id}
        renderItem={({item: culture}) => (
          <ListItem onPress={() => navigate('Dashboard')}>
            <ListItemDescription>{culture.name}</ListItemDescription>
          </ListItem>
        )}
      />
    </Container>
  );
}
