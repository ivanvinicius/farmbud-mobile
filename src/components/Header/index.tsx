import React, {useMemo} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {useAuth} from '../../hooks/Auth';

import {Container, UserMessage, UserName, SignOutButtonText} from './styles';

export function Header() {
  const {user, signOut} = useAuth();

  const parsedUserName = useMemo(() => {
    const parsedName = user.name.split(' ');

    return `${parsedName[0]}`;
  }, [user]);

  return (
    <Container>
      <View>
        <UserMessage>Bem vindo</UserMessage>
        <UserName>{parsedUserName}</UserName>
      </View>

      <TouchableOpacity onPress={() => signOut()}>
        <SignOutButtonText>Sair</SignOutButtonText>
      </TouchableOpacity>
    </Container>
  );
}
