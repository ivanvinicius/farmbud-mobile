import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';

import {Text} from 'react-native';
import {api} from '../../../services/api';
import {PageTitle} from '../../../components/PageTitle';
import {Button} from '../../../components/Button';
import {IResponseComposition, ICompositionProps} from '../../../dtos/ICompositionProps'; //eslint-disable-line

import {
  Container,
  Card,
  CardRow,
  CardItem,
  CardTitle,
  CardInfo,
  Warn,
  WarnMessage,
  List,
  ListItem,
} from '../../../styles/SelectComposition';
// import {formatToStringBRL} from '../../../utils/formatToStringBRL';

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
  const [compositionProducts, setCompositionProducts] = useState<ICompositionProps[]>([]); //eslint-disable-line
  const route = useRoute();
  const {area, culture, productivity, provider} = route.params as IRouteProps;

  useEffect(() => {
    api
      .get('/clients-compositions', {
        params: {
          provider_id: provider.id,
          culture_id: culture.id,
          productivity: productivity.id,
        },
      })
      .then((response) => {
        const formattedData = response.data.map(
          (item: IResponseComposition) => ({
            ...item,
          }),
        );

        setCompositionProducts(formattedData);
      });
  }, [area, provider, culture, productivity]);

  return (
    <Container>
      <PageTitle title="Produtos da Composição" />

      <List
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <Warn
              style={{
                elevation: 2,
              }}>
              <WarnMessage>
                Os valores abaixo são calculados sob o tamanho área.
              </WarnMessage>
            </Warn>

            <Card
              style={{
                elevation: 2,
              }}>
              <CardRow>
                <CardItem>
                  <CardTitle>Area</CardTitle>
                  <CardInfo>10 Hectares</CardInfo>
                </CardItem>

                <CardItem>
                  <CardTitle>Cultura</CardTitle>
                  <CardInfo>Soja</CardInfo>
                </CardItem>
              </CardRow>

              <CardRow>
                <CardItem>
                  <CardTitle>Produtividade</CardTitle>
                  <CardInfo>Baixa Produtividade</CardInfo>
                </CardItem>

                <CardItem>
                  <CardTitle>Fornecedor</CardTitle>
                  <CardInfo>Afubra</CardInfo>
                </CardItem>
              </CardRow>

              <CardRow>
                <CardItem>
                  <CardTitle>Produtos</CardTitle>
                  <CardInfo>9 Produtos</CardInfo>
                </CardItem>

                <CardItem>
                  <CardTitle>Valor Total</CardTitle>
                  <CardInfo>R$ 12.980,00</CardInfo>
                </CardItem>
              </CardRow>
            </Card>
          </>
        )}
        data={compositionProducts}
        keyExtractor={(composition) => composition.id}
        renderItem={({item}) => (
          <ListItem
            style={{
              elevation: 1,
            }}>
            <Text>{item.product_name}</Text>
            <Text>{item.price}</Text>
          </ListItem>
        )}
        ListFooterComponent={() => (
          <Button onPress={() => ({})}>Finalizar Orçamento</Button>
        )}
        ListFooterComponentStyle={{marginBottom: 16}}
      />
    </Container>
  );
}
