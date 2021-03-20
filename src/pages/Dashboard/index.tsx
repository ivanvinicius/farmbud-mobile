import React from 'react';
import {Button} from 'react-native';

import {useAuth} from '../../hooks/Auth';

import {Container, Title} from './styles';

export function Dashboard() {
  const {signOut} = useAuth();

  return (
    <Container>
      <Title>Dashboard Page</Title>

      <Button title="Sair" onPress={() => signOut()} />
    </Container>
  );
}
