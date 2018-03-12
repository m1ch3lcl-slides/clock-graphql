import React from 'react';
import { Slide, Heading } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

const getColor = (activeIndex, i) =>
  activeIndex && activeIndex !== i ? '#ccc' : null;

export default activeIndex => (
  <Slide bgColor="primary">
    <Heading size={2} textColor="tertiary">
      Sommaire
    </Heading>
    <div style={{ height: '50px' }} />
    <FitList ordered start={1}>
      <SpacedListItem textSize="4rem" textColor={getColor(activeIndex, 1)}>
        Qu'est-ce que GraphQL ?
      </SpacedListItem>
      <SpacedListItem textSize="4rem" textColor={getColor(activeIndex, 2)}>
        Mise en place dans un projet Web
      </SpacedListItem>
      <SpacedListItem textSize="4rem" textColor={getColor(activeIndex, 3)}>
        Types d'interactions
      </SpacedListItem>
      <SpacedListItem textSize="4rem" textColor={getColor(activeIndex, 4)}>
        Avantages/Inconvénients
      </SpacedListItem>
    </FitList>
  </Slide>
);
