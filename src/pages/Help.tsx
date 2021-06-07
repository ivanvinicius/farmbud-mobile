import React from 'react';
import {ScrollView} from 'react-native';

import {PageTitle} from '../components/PageTitle';

import {Container, ContentContainer, Title, Description} from '../styles/Help';

export function Help() {
  return (
    <Container>
      <PageTitle title="Ajuda" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentContainer style={{elevation: 1}}>
          <Title>Novo Orçamento</Title>
          <Description>
            Para criar um novo orçamento basta clicar na funcionalidade Novo
            Orçamento presente na tela inicial da aplicação. Após a navegação,
            selecione a Área desejada no mapa, onde o próximo passo é informar a
            Cultura a ser cultivada nesta área. Também é necessário informar o
            Nível de Produtividade esperado para a cultura, essa caracterisitica
            indica o nível de qualidade dos produtos que serão usados no manejo
            da lavoura. Para que haja um melhor controle de histórico de
            orçamentos, será preciso indicar uma Temporada de Plantio na próxima
            tela. Pronto, já será possível visualizar todos os Fornecedores, com
            produtos disponíveis para a orçamentação. Clicando sobre os mesmos,
            é possivel ver os detalhes do orçamento.
          </Description>

          <Title>Meus orçamentos</Title>
          <Description>
            Para visualiar os orçamentos criados anteriormente, basta acessar a
            funcionalidade Meus Orçamentos na tela incial da aplicação. Na nova
            tela, clique sobre um dos orçamentos para ver mais detalhes.
          </Description>

          <Title>Minhas Áreas</Title>
          <Description>
            Para criar um novo orçamento basta clicar na funcionalidade presente
            na tela inicial da aplicação
          </Description>

          <Title>Criar Área</Title>
          <Description>
            Para criar um novo orçamento basta clicar na funcionalidade presente
            na tela inicial da aplicação
          </Description>

          <Title>Minhas Temporadas</Title>
          <Description>
            Para criar um novo orçamento basta clicar na funcionalidade presente
            na tela inicial da aplicação
          </Description>

          <Title>Criar Temporada</Title>
          <Description>
            Para criar um novo orçamento basta clicar na funcionalidade presente
            na tela inicial da aplicação
          </Description>
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}
