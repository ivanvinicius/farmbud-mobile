import React from 'react';

import {PageTitle} from '../../components/PageTitle';

import {Container, Header, MapContainer} from './styles';

export function Areas() {
  return (
    <Container>
      <Header>
        <PageTitle title="Areas" navigateBack />
      </Header>

      <MapContainer />
    </Container>
  );
}
