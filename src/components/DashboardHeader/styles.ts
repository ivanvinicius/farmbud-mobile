import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 30px 0;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalContent = styled.View`
  flex: 1;

  width: 300px;
  height: 150px;

  margin: 75% auto;
  padding: 16px;
  justify-content: center;

  border-radius: 8px;
  border: 1px solid #e6e6f0;

  background-color: #f8f8fc;
`;

export const ModalMessage = styled.Text`
  color: #6a6180;

  font-size: 16px;
  font-family: 'Poppins-Regular';
`;

export const ModalActions = styled.View`
  margin-top: 20px;

  flex-direction: row;
  justify-content: space-evenly;
`;

export const TextSignOut = styled.Text`
  color: #de5431;

  font-size: 16px;
  font-family: 'Poppins-Medium';
`;

export const TextCancel = styled.Text`
  color: #7620d8;

  font-size: 16px;
  font-family: 'Poppins-Medium';
`;

export const UserMessage = styled.Text`
  color: #383838;

  font-size: 16px;
  font-family: 'Poppins-Regular';
`;

export const UserName = styled.Text`
  color: #383838;

  font-size: 22px;
  font-family: 'Poppins-Medium';

  line-height: 22px;
`;

export const SignOutButtonText = styled.Text`
  font-size: 16px;
  color: #de5431;
  font-family: 'Poppins-Regular';
`;
