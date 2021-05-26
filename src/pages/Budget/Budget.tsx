import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {v4 as uuid} from 'uuid';

import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PageTitle} from '../../components/PageTitle';
import {api} from '../../services/api';
import {formatToStringBRL} from '../../utils/formatToStringBRL';
import {IReponseBudget, IBudgetProps} from '../../dtos/IBudgetProps';

import {
  Container,
  List,
  ListItem,
  ListItemBorder,
  Title,
  Description,
  SmallDescription,
} from '../../styles/Budget';

export function Budget() {
  const {navigate} = useNavigation();
  const [budgets, setBudgets] = useState<IBudgetProps[]>([]);

  const handleNavigate = useCallback(
    (budget: IBudgetProps) => {
      return navigate('BudgetDetail', {budget});
    },
    [navigate],
  );

  const productivityDescription = useMemo(
    () => ['Baixa Produtividade', 'Média Produtividade', 'Alta Produtividade'],
    [],
  );

  useEffect(() => {
    api.get('/budgets').then((response) => {
      const formattedData = response.data.map(
        ({
          amount_cost,
          productivity,
          season_start_at,
          season_end_at,
          ...rest
        }: IReponseBudget) => {
          const startDate = season_start_at.split('T');
          const endDate = season_end_at.split('T');

          const formattedStart = startDate[0].split('-').reverse().join('/');
          const formattedEnd = endDate[0].split('-').reverse().join('/');

          return {
            ...rest,
            id: uuid(),
            season_start_at: formattedStart,
            season_end_at: formattedEnd,
            amount_cost: formatToStringBRL(amount_cost),
            formatted_productivity:
              productivityDescription[Number(productivity) - 1],
          };
        },
      );

      setBudgets(formattedData);
    });
  }, [productivityDescription]);

  return (
    <Container>
      <PageTitle title="Orçamentos" />

      <List
        showsVerticalScrollIndicator={false}
        data={budgets}
        keyExtractor={(budget) => budget.id}
        renderItem={({item: budget}) => (
          <ListItem onPress={() => handleNavigate(budget)}>
            <ListItemBorder
              style={{
                elevation: 1,
              }}>
              <Description>{`${budget.formatted_productivity} para o ${budget.culture_name}`}</Description>

              <Title>{`Fornecedor: ${budget.provider_name}`}</Title>
              <Title>{`Investimento: R$ ${budget.amount_cost}`}</Title>
              <Text />
              <Description>{budget.area_name}</Description>
              <SmallDescription>{`${budget.area_description}`}</SmallDescription>
              <Description>{`${budget.area_size} Hectares`}</Description>
              <Text />
              <Description>{budget.season_name}</Description>
              <SmallDescription>{budget.season_description}</SmallDescription>
              <Description>{`${budget.season_start_at} e ${budget.season_end_at}`}</Description>
            </ListItemBorder>
          </ListItem>
        )}
      />
    </Container>
  );
}
