import React, {useMemo} from 'react';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {useAuth} from '../../hooks/Auth';

import {
  Container,
  // ModalContent,
  // ModalMessage,
  // ModalActions,
  // TextSignOut,
  // TextCancel,
  UserMessage,
  UserName,
  SignOutButtonText,
} from './styles';

export function DashboardHeader() {
  const {user, signOut} = useAuth();
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  const parsedUserName = useMemo(() => {
    const parsedName = user.name.split(' ');

    return `${parsedName[0]}`;
  }, [user]);

  // const toggleModal = useCallback(() => {
  //   setModalIsOpen(!modalIsOpen);
  // }, [modalIsOpen]);

  return (
    <Container>
      {/* <Modal
        animationType="none"
        transparent
        visible={modalIsOpen}
        onRequestClose={toggleModal}>
        <ModalContent>
          <ModalMessage>Tem certeza que deseja sair?</ModalMessage>

          <ModalActions>
            <Pressable onPress={signOut}>
              <TextSignOut>Sair</TextSignOut>
            </Pressable>

            <Pressable onPress={toggleModal}>
              <TextCancel>Cancelar</TextCancel>
            </Pressable>
          </ModalActions>
        </ModalContent>
      </Modal> */}

      <View>
        <UserMessage>Bem vindo</UserMessage>
        <UserName>{parsedUserName}</UserName>
      </View>

      <RectButton onPress={() => signOut()}>
        <SignOutButtonText>Sair</SignOutButtonText>
      </RectButton>
    </Container>
  );
}
