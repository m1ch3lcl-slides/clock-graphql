import React from 'react';

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear
} from 'spectacle';

import styled from 'react-emotion';

export const SpacedListItem = styled(ListItem)`
  margin-bottom: 15px;
`;

export const FitList = styled(List)`
  width: fit-content;
  margin: 1em auto;
`;

export const LightQuote = styled(Quote)`
  border-left-color: gray;
`;
