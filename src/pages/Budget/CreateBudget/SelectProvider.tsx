import React from 'react';
import {useRoute} from '@react-navigation/native';

import {Container} from '../../../styles/Provider';
import {PageTitle} from '../../../components/PageTitle';

interface IRouteProps {
  area: {
    id: string;
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
  const route = useRoute();
  const param = route.params as IRouteProps;

  console.log(param); //eslint-disable-line

  return (
    <Container>
      <PageTitle title="Fornecedores" />
    </Container>
  );
}
