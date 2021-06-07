/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */

import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {Alert, Text} from 'react-native';
import {api} from '../../../services/api';
import {PageTitle} from '../../../components/PageTitle';
import {Button} from '../../../components/Button';
import {formatToStringBRL} from '../../../utils/formatToStringBRL';
import {
  IResponseComposition,
  ICompositionProps,
} from '../../../dtos/ICompositionProps';

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
  LightLine,
  ProductLine,
  BoldLine,
  Line,
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

interface IHandleUnitsProps {
  size: string;
  recommendation: string;
  price: string;
}

export function SelectComposition() {
  const [compositionProducts, setCompositionProducts] = useState<
    ICompositionProps[]
  >([]);
  const [totalPrice, setTotalPrice] = useState('0');
  const route = useRoute();
  const {navigate} = useNavigation();
  const {
    area,
    culture,
    productivity,
    provider,
    season,
  } = route.params as IRouteProps;

  const handleSubmit = useCallback(async () => {
    const formattedData = compositionProducts.map((item) => ({
      portfolio_id: item.id,
      amount_usage: item.amount_usage,
      amount_quantity: item.amount_quantity,
      amount_cost: item.amount_cost,
    }));

    try {
      await api.post('/budgets', {
        provider_id: provider.id,
        area_id: area.id,
        season_id: season.id,
        items: formattedData,
      });

      Alert.alert('Cadastro realizado com sucesso');

      navigate('Dashboard');
    } catch (err) {
      if (err.response.data.message) {
        Alert.alert('Houve um problema', err.response.data.message);
      }
    }
  }, [area, season, provider, compositionProducts, navigate]);

  const handleUnitsQuantity = useCallback(
    ({size, recommendation, price}: IHandleUnitsProps) => {
      let units = (parseFloat(recommendation) * area.size) / parseFloat(size);
      const restDivision = (parseFloat(recommendation) * area.size) % parseFloat(size); //eslint-disable-line

      if (restDivision !== 0) {
        units = Math.ceil(units);
      }

      return {
        quantity: units,
        usage: units * parseFloat(size),
        cost: units * parseFloat(price),
      };
    },
    [area],
  );

  useEffect(() => {
    const formattedPrices: Array<number> = [0];

    compositionProducts.map(({amount_cost}) =>
      formattedPrices.push(amount_cost),
    );

    const total = formattedPrices.reduce(
      (acc, currentValue) => acc + currentValue,
    );

    const formattedTotal = formatToStringBRL(String(total));

    setTotalPrice(formattedTotal);
  }, [compositionProducts]);

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
          ({size, recommendation, price, ...rest}: IResponseComposition) => ({
            ...rest,

            size: parseFloat(size),
            price: parseFloat(price),
            recommendation: parseFloat(recommendation),

            formatted_size: formatToStringBRL(size),
            formatted_price: formatToStringBRL(price),
            formatted_recommendation: formatToStringBRL(recommendation),

            amount_quantity: handleUnitsQuantity({size, recommendation, price})
              .quantity,

            amount_usage: handleUnitsQuantity({size, recommendation, price})
              .usage,

            amount_cost: handleUnitsQuantity({size, recommendation, price})
              .cost,

            formatted_amount_cost: formatToStringBRL(
              String(handleUnitsQuantity({size, recommendation, price}).cost),
            ),
            formatted_amount_usage: formatToStringBRL(
              String(handleUnitsQuantity({size, recommendation, price}).usage),
            ),
          }),
        );

        setCompositionProducts(formattedData);
      });
  }, [area, provider, culture, productivity, handleUnitsQuantity]);

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
                O tamanho da área sofre arredondamento positivo, para que não
                haja falta de produtos
              </WarnMessage>
            </Warn>

            <Card
              style={{
                elevation: 2,
              }}>
              <CardRow>
                <CardItem>
                  <CardTitle>Tam. Área</CardTitle>
                  <CardInfo>{` ${area.size} Hectares`}</CardInfo>
                </CardItem>
              </CardRow>

              <CardRow>
                <CardItem>
                  <CardTitle>Produtos</CardTitle>
                  <CardInfo>{`${compositionProducts.length} Produtos`}</CardInfo>
                </CardItem>

                <CardItem>
                  <CardTitle>Investimento</CardTitle>
                  <CardInfo>{`R$ ${totalPrice}`}</CardInfo>
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
            <ProductLine>{item.product_name}</ProductLine>
            <LightLine>{`${item.category_name} ${item.subcategory_name}`}</LightLine>
            <Line>{`Tamanho unitário: ${item.formatted_size} ${item.measure_name}`}</Line>
            <Line>{`Valor unitário: R$ ${item.formatted_price}`}</Line>
            <Text />
            <BoldLine>{`Recomendação: ${item.formatted_recommendation} ${item.measure_name} por hectare`}</BoldLine>
            <Text />
            <BoldLine>Composição para a área</BoldLine>
            <Line>{`${item.amount_quantity} unidades do produto`}</Line>
            <Line>{`Quantidade: ${item.formatted_amount_usage} ${item.measure_name}`}</Line>
            <Line>{`Investimento: R$ ${item.formatted_amount_cost}`}</Line>
            <Text />
          </ListItem>
        )}
        ListFooterComponent={() => (
          <Button onPress={handleSubmit}>Finalizar Orçamento</Button>
        )}
        ListFooterComponentStyle={{marginBottom: 16}}
      />
    </Container>
  );
}
