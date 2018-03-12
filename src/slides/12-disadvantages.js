import React from 'react';
import { Slide, Heading, Appear } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Inconvénients
    </Heading>
    <div style={{ marginTop: '50px' }}>
      <FitList>
        <Appear>
          <SpacedListItem>Un outil récent (2015)</SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            Format de réponse calqué sur la structure des ressources
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            Pas de maîtrise sur les requêtes reçues (profondeur, coût
            d'extraction des données, ...)
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>Téléversement de fichiers ?</SpacedListItem>
        </Appear>
      </FitList>
    </div>
  </Slide>
);
