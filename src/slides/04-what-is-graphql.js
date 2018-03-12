import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Qu'est-ce que GraphQL ?
    </Heading>
    <Appear>
      <div>
        <Text margin="50px">
          <strong>On définit côté serveur</strong>
        </Text>
        <FitList margin="1em auto">
          <SpacedListItem>
            la structure des ressources manipulées
          </SpacedListItem>
          <SpacedListItem>
            comment récupérer une donnée en fonction de son type et du contexte
          </SpacedListItem>
        </FitList>
      </div>
    </Appear>
    <Appear>
      <div>
        <Text margin="50px">
          <strong>On définit pour chaque requête</strong>
        </Text>
        <FitList margin="1em auto">
          <SpacedListItem>le point d'entrée de l'API</SpacedListItem>
          <SpacedListItem>la structure de la réponse</SpacedListItem>
        </FitList>
      </div>
    </Appear>
  </Slide>
);
