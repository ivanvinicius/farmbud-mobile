import React, {useEffect, useState} from 'react';

import {useRoute} from '@react-navigation/native';

import {PageTitle} from '../../components/PageTitle';
import {api} from '../../services/api';
import {IBudgetProps} from '../../dtos/IBudgetProps';
import {IBudegtDetailProps} from '../../dtos/IBudgetDetailProps';

import {
  Container,
  List,
  ListItem,
  ListItemBorder,
  Card,
  CardRow,
  CardItem,
  CardTitle,
  CardInfo,
  Title,
  Line,
  BoldLine,
  LightLine,
} from '../../styles/BudgetDetail';
import {formatToStringBRL} from '../../utils/formatToStringBRL';

interface IRouteProps {
  budget: IBudgetProps;
}

export function BudgetDetail() {
  const route = useRoute();
  const {budget} = route.params as IRouteProps;
  const [budgetDetails, setBudgetDetails] = useState<IBudegtDetailProps[]>([]);

  useEffect(() => {
    api
      .get('/budgets', {
        params: {
          provider_id: budget.provider_id,
          culture_id: budget.culture_id,
          area_id: budget.area_id,
          productivity: budget.productivity,
        },
      })
      .then((response) => {
        const formattedData = response.data.map((item: IBudegtDetailProps) => ({
          ...item,
          amount_usage: formatToStringBRL(item.amount_usage),
          amount_quantity: parseFloat(item.amount_quantity),
          amount_cost: formatToStringBRL(item.amount_cost),
          portfolio_recommendation: formatToStringBRL(
            item.portfolio_recommendation,
          ),
          portfolio_size: formatToStringBRL(item.portfolio_size),
          portfolio_price: formatToStringBRL(item.portfolio_price),
        }));

        setBudgetDetails(formattedData);
      });
  }, [budget]);

  return (
    <Container>
      <PageTitle title="Detalhes do Orçamento" />

      <List
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Card
            style={{
              elevation: 1,
            }}>
            <CardRow>
              <CardItem>
                <CardTitle>Fornecedor</CardTitle>
                <CardInfo>{budget.provider_name}</CardInfo>
              </CardItem>

              <CardItem>
                <CardTitle>Produtividade</CardTitle>
                <CardInfo>{budget.formatted_productivity}</CardInfo>
              </CardItem>
            </CardRow>

            <CardRow>
              <CardItem>
                <CardTitle>Tam. Área</CardTitle>
                <CardInfo>{` ${budget.area_size} Hectares`}</CardInfo>
              </CardItem>

              <CardItem>
                <CardTitle>Cultura</CardTitle>
                <CardInfo>{` ${budget.culture_name} Hectares`}</CardInfo>
              </CardItem>
            </CardRow>

            <CardRow>
              <CardItem>
                <CardTitle>Produtos</CardTitle>
                <CardInfo>{`${budgetDetails.length} Produtos`}</CardInfo>
              </CardItem>

              <CardItem>
                <CardTitle>Investimento</CardTitle>
                <CardInfo>{`R$ ${budget.amount_cost}`}</CardInfo>
              </CardItem>
            </CardRow>
          </Card>
        )}
        data={budgetDetails}
        keyExtractor={(budgetDetail) => budgetDetail.id}
        renderItem={({item: budgetDetail}) => (
          <ListItem>
            <ListItemBorder
              style={{
                elevation: 1,
              }}>
              <Title>{budgetDetail.product_name}</Title>
              <LightLine>{`${budgetDetail.category_name} ${budgetDetail.subcategory_name}`}</LightLine>
              {budgetDetail.product_composition !== null && (
                <Line>{`Composição: ${budgetDetail.product_composition}`}</Line>
              )}
              <Line>{`Tamanho unitário: ${budgetDetail.portfolio_size} ${budgetDetail.measure_name}`}</Line>
              <Line>{`Valor unitário: R$ ${budgetDetail.portfolio_price}`}</Line>
              <Line />
              <BoldLine>{`Recomendação: ${budgetDetail.portfolio_recommendation} ${budgetDetail.measure_name} por hectare`}</BoldLine>
              <Line />
              <BoldLine>Composição para a Área</BoldLine>
              <Line>{`${budgetDetail.amount_quantity} unidades do produto`}</Line>
              <Line>{`Quantidade: ${budgetDetail.amount_usage}`}</Line>
              <Line>{`Investimento: R$ ${budgetDetail.amount_cost}`}</Line>
            </ListItemBorder>
          </ListItem>
        )}
      />
    </Container>
  );
}
