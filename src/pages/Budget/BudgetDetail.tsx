import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {PageTitle} from '../../components/PageTitle';
import {api} from '../../services/api';
import {IBudgetProps} from '../../dtos/IBudgetProps';

import {Container} from '../../styles/BudgetDetail';

interface IRouteProps {
  budget: IBudgetProps;
}

export function BudgetDetail() {
  const route = useRoute();
  const {budget} = route.params as IRouteProps;
  const [budgetDetails, setBudgetDetails] = useState([]);

  useEffect(() => {
    api
      .get('/budgets', {
        params: {
          provider_id: budget.provider_id,
          culture_id: budget.culture_id,
          productivity: budget.productivity,
        },
      })
      .then((response) => setBudgetDetails(response.data));
  }, [budget]);

  return (
    <Container>
      <PageTitle title="Detalhes do Orçamento" />

      <Text>here</Text>
    </Container>
  );
}
