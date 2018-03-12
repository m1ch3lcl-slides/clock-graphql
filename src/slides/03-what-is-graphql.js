import React from 'react';
import { Slide, Heading, Appear, Text } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Qu'est-ce que GraphQL ?
    </Heading>
    <Text margin="50px 0 0">Un langage de requête :</Text>
    <FitList margin="1em auto">
      <Appear>
        <SpacedListItem>
          Développé en interne par <strong>Facebook</strong> depuis{' '}
          <strong>2012</strong>
        </SpacedListItem>
      </Appear>
      <Appear>
        <SpacedListItem>
          Spécification publiée en <strong>2015</strong>
        </SpacedListItem>
      </Appear>
      <Appear>
        <SpacedListItem>
          Permettant de récupérer des données depuis un serveur (API)
        </SpacedListItem>
      </Appear>
      <Appear>
        <SpacedListItem>Une alternative à REST, SOAP, etc.</SpacedListItem>
      </Appear>
    </FitList>
  </Slide>
);
