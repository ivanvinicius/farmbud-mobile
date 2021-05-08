import React, {useCallback, useMemo} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {PageTitle} from '../../../components/PageTitle';
import {IProducutivityProps} from '../../../dtos/IProductivityProps';

import {
  Container,
  List,
  ListItem,
  ListItemBorder,
  ListItemDescription,
} from '../../../styles/Productivity';

interface IRouteProps {
  area: {
    id: string;
    size: number;
  };
  culture: {
    id: string;
  };
}

export function SelectProductivity() {
  const {navigate} = useNavigation();
  const route = useRoute();
  const {area, culture} = route.params as IRouteProps;

  const producitivity = useMemo<IProducutivityProps[]>(
    () => [
      {
        id: ' 1',
        description: 'Baixa produtividade',
      },

      {
        id: '2',
        description: 'Média Produtividade',
      },

      {
        id: '3',
        description: 'Alta Produvidade',
      },
    ],

    [],
  );

  const handleNavigateNextStep = useCallback( //eslint-disable-line
    (productivityId: string) => {
      return navigate('SelectSeason', {
        area,
        culture,
        productivity: {id: productivityId},
      });
    },
    [navigate, area, culture],
  );

  return (
    <Container>
      <PageTitle title="Produtividade" />

      <List
        showsVerticalScrollIndicator={false}
        data={producitivity}
        keyExtractor={(p) => p.id}
        renderItem={({item: p}) => (
          <ListItem onPress={() => handleNavigateNextStep(p.id)}>
            <ListItemBorder
              style={{
                elevation: 1,
              }}>
              <ListItemDescription>{p.description}</ListItemDescription>
            </ListItemBorder>
          </ListItem>
        )}
      />
    </Container>
  );
}
