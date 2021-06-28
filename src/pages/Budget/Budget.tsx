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
  Line,
  BoldLine,
  LightLine,
  WarnMessage,
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
            productivity,
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

      {!budgets || budgets.length === 0 || budgets === undefined ? (
        <WarnMessage>Nenhum orçamento foi cadastrado até o momento</WarnMessage>
      ) : (
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
                <Line>{`${budget.formatted_productivity} para o ${budget.culture_name}`}</Line>
                <Title>{`Fornecedor: ${budget.provider_name}`}</Title>
                <Title>{`Investimento: R$ ${budget.amount_cost}`}</Title>
                <Text />
                <BoldLine>{budget.area_name}</BoldLine>
                <Line>{`Tam. Área: ${budget.area_size} Hectares`}</Line>
                <LightLine>{`${budget.area_description}`}</LightLine>
                <Text />
                <BoldLine>{budget.season_name}</BoldLine>
                <Line>{`${budget.season_start_at} e ${budget.season_end_at}`}</Line>
                <LightLine>{budget.season_description}</LightLine>
              </ListItemBorder>
            </ListItem>
          )}
        />
      )}
    </Container>
  );
}
