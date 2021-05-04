import React from 'react';

import {PageTitle} from '../../../components/PageTitle';

import {Container, Content} from './styles';

export function AreaDetail() {
  return (
    <Container>
      <PageTitle title="Detalhes da Area" navigateBack />

      <Content>Area detail screen</Content>
    </Container>
  );
}
