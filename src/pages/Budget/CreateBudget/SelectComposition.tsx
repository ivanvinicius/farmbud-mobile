import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {api} from '../../../services/api';
import {PageTitle} from '../../../components/PageTitle';

import {
  Container,
  CardInfo,
  List,
  ListItem,
} from '../../../styles/SelectComposition';

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
  provider: {
    id: string;
  };
}

export function SelectComposition() {
  const [compositionProducts, setCompositionProducts] = useState<Array<any>>(
    [],
  );
  const route = useRoute();
  const {
    area,
    culture,
    productivity,
    season,
    provider,
  } = route.params as IRouteProps;

  useEffect(() => {
    api
      .get('/clients-compositions', {
        params: {
          provider_id: provider.id,
          culture_id: culture.id,
          productivity: productivity.id,
        },
      })
      .then((response) => setCompositionProducts(response.data));
  }, [provider, culture, productivity]);

  return (
    <Container>
      <PageTitle title="Produtos da Composição" />

      <CardInfo
        style={{
          elevation: 2,
        }}>
        <Text>{`area: ${area.id}`}</Text>
        <Text>{`area: ${area.size}`}</Text>
        <Text>{`culture: ${culture.id}`}</Text>
        <Text>{`productivity: ${productivity.id}`}</Text>
        <Text>{`season: ${season.id}`}</Text>
        <Text>{`provider: ${provider.id}`}</Text>
      </CardInfo>

      <List
        showsVerticalScrollIndicator={false}
        data={compositionProducts}
        keyExtractor={(composition) => composition.id}
        renderItem={({item}) => (
          <ListItem
            style={{
              elevation: 1,
            }}>
            <Text>{item.size}</Text>
            <Text>{item.price}</Text>
            <Text>{item.recommendation}</Text>
            <Text>{item.brand_name}</Text>
            <Text>{item.measure_name}</Text>
            <Text>{item.category_name}</Text>
            <Text>{item.subcategory_name}</Text>
            <Text>{item.product_name}</Text>
            <Text>{item.culture_name}</Text>
            <Text>{item.provider_name}</Text>
          </ListItem>
        )}
      />
    </Container>
  );
}
