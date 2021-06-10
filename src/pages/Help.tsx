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
            Para visualizar os orçamentos criados anteriormente, basta acessar a
            funcionalidade Meus Orçamentos na tela incial da aplicação. Na nova
            tela, clique sobre um dos orçamentos para ver mais detalhes.
          </Description>

          <Title>Minhas Áreas</Title>
          <Description>
            Para visualizar todas as áreas cadastradas anteriomente, basta
            acessar a funcionalidade Minhas Áreas na tela inical da aplicação.
            Na nova aba, todas as áreas cadastras serão listadas no mapa.
          </Description>

          <Title>Criar Área</Title>
          <Description>
            Para criar uma nova área basta clicar no botão de + no canto
            inferior da tela Minhas Áreas. O proxímo passo é fazer a seleção de
            um novo ponto no mapa e prosseguir para o o formulário de detalhes,
            onde devem ser informados campos como nome, descrição e tamanho
            total da área em hectares,
          </Description>

          <Title>Minhas Temporadas</Title>
          <Description>
            Para visualizar todas as temporadas cadastradas anteriomente basta
            acessar a funcionalidade Minhas Temporadas na tela inicial da
            aplicação. Na nova aba será possível ver informações datalhadas de
            todas as temporadas de plantio.
          </Description>

          <Title>Criar Temporada</Title>
          <Description>
            Para criar uma nova temporada basta acessar a funcionlidade de
            Adicionar presente na tela de Minhas Temporadas. O próximo passo é
            informar os campos do formulário, como o nome, data inicial e data
            final da temporada de plantio.
          </Description>
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}
