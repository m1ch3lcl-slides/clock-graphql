import React from 'react';
import { Slide, Heading, BlockQuote, Cite, Appear, Text } from 'spectacle';
import { FitList, LightQuote, SpacedListItem } from '../tags';

export default (
  <Slide bgColor="primary" padding="100px">
    <Heading size={3} textColor="tertiary">
      Qu'est-ce que GraphQL ?
    </Heading>
    <Text margin="50px 0 0">
      Graph Query Language{' '}
      <Appear>
        <span>
          ou plutôt <strong>Data Query Language</strong>
        </span>
      </Appear>
    </Text>

    <Appear>
      <BlockQuote>
        <LightQuote textColor="secondary" bold={false}>
          <p>
            GraphQL isn't tied to any specific database or storage engine and is
            instead <strong>backed by your existing code and data.</strong>
          </p>
        </LightQuote>
        <Cite>http://graphql.org/learn/</Cite>
      </BlockQuote>
    </Appear>
    <FitList margin="1em auto">
      <Appear>
        <SpacedListItem>
          Une base de données MySQL, MongoDB, Neo4J, ...
        </SpacedListItem>
      </Appear>
      <Appear>
        <SpacedListItem>
          relationnelle, orientée documents, orientée graphes, ...
        </SpacedListItem>
      </Appear>
      <Appear>
        <SpacedListItem>
          ou un service externe disponible via une API
        </SpacedListItem>
      </Appear>
      <Appear>
        <SpacedListItem>ou tout à la fois !</SpacedListItem>
      </Appear>
    </FitList>
  </Slide>
);
