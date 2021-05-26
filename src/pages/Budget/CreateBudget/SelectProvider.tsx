import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {PageTitle} from '../../../components/PageTitle';
import {api} from '../../../services/api';
import {IProviderProps} from '../../../dtos/IProviderProps';

import {
  Container,
  WarnMessage,
  List,
  ListItem,
  ListItemBorder,
  ListItemDescription,
} from '../../../styles/Provider';

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
  season: {
    id: string;
  };
}

export function SelectProvider() {
  const [providers, setProviders] = useState<IProviderProps[]>([]);
  const {navigate} = useNavigation();
  const route = useRoute();

  const {area, culture, productivity, season} = route.params as IRouteProps; //eslint-disable-line

  const handleNavigateNextStep = useCallback(
    (providerId: string) => {
      return navigate('SelectComposition', {
        area,
        culture,
        productivity,
        season,
        provider: {id: providerId},
      });
    },
    [navigate, area, culture, productivity, season],
  );

  useEffect(() => {
    api
      .get('/clients-compositions', {
        params: {
          culture_id: culture.id,
          productivity: productivity.id,
        },
      })
      .then((response) => setProviders(response.data));
  }, [culture, productivity]);

  return (
    <Container>
      <PageTitle title="Fornecedores" />
      {!providers || providers.length === 0 || providers === undefined ? (
        <WarnMessage>
          Nenhum fornecedor foi encontrado para as informações seleciondas
          anteriormente
        </WarnMessage>
      ) : (
        <List
          showsVerticalScrollIndicator={false}
          data={providers}
          keyExtractor={(provider) => provider.provider_id}
          renderItem={({item: provider}) => (
            <ListItem
              onPress={() => handleNavigateNextStep(provider.provider_id)}>
              <ListItemBorder
                style={{
                  elevation: 1,
                }}>
                <ListItemDescription>
                  {provider.provider_name}
                </ListItemDescription>
              </ListItemBorder>
            </ListItem>
          )}
        />
      )}
    </Container>
  );
}
