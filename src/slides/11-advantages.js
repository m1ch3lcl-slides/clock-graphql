import React from 'react';
import { Slide, Heading, Appear } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Avantages
    </Heading>
    <div style={{ marginTop: '50px' }}>
      <FitList>
        <Appear>
          <SpacedListItem>Facilité de mise en œuvre</SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            API définie par un schéma fortement typé
          </SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>Conception modulaire</SpacedListItem>
        </Appear>
        <Appear>
          <SpacedListItem>
            Un écosystème en plein développement : GraphCool (Backend as a
            Service), Apollo
          </SpacedListItem>
        </Appear>
      </FitList>
    </div>
  </Slide>
);
