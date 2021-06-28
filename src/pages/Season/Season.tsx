import React, {useEffect, useState} from 'react';
import {useNavigation, useIsFocused} from '@react-navigation/native';

import {PageTitle} from '../../components/PageTitle';
import {api} from '../../services/api';
import {ISeasonProps} from '../../dtos/ISeasonProps';

import {
  Container,
  SpaceFooter,
  List,
  ListItem,
  ListItemBorder,
  ListItemTitle,
  ListItemDescription,
  ListItemSubTitle,
  AddButton,
  AddButtonText,
  WarnMessage,
} from '../../styles/Season';

export function Season() {
  const [seasons, setSeasons] = useState<ISeasonProps[]>([]);
  const {navigate} = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    api.get('/seasons').then((response) => {
      if (isFocused) {
        const formattedData = response.data.map(
          ({start_at, end_at, ...rest}: ISeasonProps) => {
            const startDate = start_at.split('T');
            const endDate = end_at.split('T');

            const formattedStart = startDate[0].split('-').reverse().join('/');
            const formattedEnd = endDate[0].split('-').reverse().join('/');

            return {
              ...rest,
              start_at: formattedStart,
              end_at: formattedEnd,
            };
          },
        );

        setSeasons(formattedData);
      }
    });
  }, [isFocused]);

  return (
    <Container>
      <PageTitle title="Temporadas" />

      {!seasons || seasons.length === 0 || seasons === undefined ? (
        <WarnMessage>
          Nenhuma temporada foi cadastrada até o momento
        </WarnMessage>
      ) : (
        <List
          showsVerticalScrollIndicator={false}
          data={seasons}
          ListFooterComponent={() => <SpaceFooter />}
          keyExtractor={(season) => season.id}
          renderItem={({item: season}) => (
            <ListItem>
              <ListItemBorder
                style={{
                  elevation: 1,
                }}>
                <ListItemTitle>{season.name}</ListItemTitle>
                <ListItemDescription>{season.description}</ListItemDescription>
                <ListItemSubTitle>{`${season.start_at} - ${season.end_at}`}</ListItemSubTitle>
              </ListItemBorder>
            </ListItem>
          )}
        />
      )}

      <AddButton onPress={() => navigate('CreateSeason')}>
        <AddButtonText>Nova Temporada</AddButtonText>
      </AddButton>
    </Container>
  );
}
