import React from 'react';
import { Slide, Heading, BlockQuote, Cite, Appear } from 'spectacle';
import { FitList, SpacedListItem, LightQuote } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Types d'interaction
    </Heading>
    <div style={{ marginTop: '50px' }}>
      <FitList>
        <Appear>
          <SpacedListItem>
            <strong>Query</strong> : récupération de ressources
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            <strong>Mutation</strong> : modification/ajout/suppression de
            ressources
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            <strong>Subscription</strong> : écoute d'évènements
          </SpacedListItem>
        </Appear>
      </FitList>
    </div>
  </Slide>
);
