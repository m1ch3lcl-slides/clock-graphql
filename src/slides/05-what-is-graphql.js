import React from 'react';
import { Slide, Heading, BlockQuote, Cite, Appear } from 'spectacle';
import { FitList, SpacedListItem, LightQuote } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Qu'est-ce que GraphQL ?
    </Heading>
    <BlockQuote>
      <LightQuote textColor="secondary" bold={false} textSize="4rem">
        <p>
          GraphQL is a <strong>query language</strong> for your API, and a{' '}
          <strong>server-side runtime</strong> for executing queries by using a{' '}
          <strong>type system</strong> you define for your data.
        </p>
      </LightQuote>
      <Cite>http://graphql.org/learn/</Cite>
    </BlockQuote>
    <FitList margin="1em auto">
      <Appear>
        <SpacedListItem>
          Les données sont décrites dans des fichiers de typage
        </SpacedListItem>
      </Appear>
      <Appear>
        <SpacedListItem>
          Traduit les requêtes en appels de méthodes
        </SpacedListItem>
      </Appear>
    </FitList>
  </Slide>
);
