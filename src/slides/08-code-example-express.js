import React from 'react';
import CodeSlide from 'spectacle-code-slide';
import { Slide, Heading, Appear, Text } from 'spectacle';
import { FitList, SpacedListItem } from '../tags';

const code = `const express = require('express');

const { makeExecutableSchema } = require('graphql-tools');

const graphqlHTTP = require('express-graphql');

const db = require('./bdd');
const typeDefs = require('./types');

const resolvers = {
  Query: {
    getUser: (context, { id }) => db.getUser(id),
    getPost: (context, { id }) => db.getPost(id),
    getComment: (context, { id }) => db.getComment(id)
  },
  Post: {
    author: (context) => db.getUser(context.authorId)
  },
  Comment: {
    author: (context) => db.getUser(context.authorId),
    post: (context) => db.getPost(context.postId)
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => console.log('Running a GraphQL API server at localhost:4000/graphql'));
`;

export default (
  <CodeSlide
    className="code-slide"
    textColor="secondary"
    transition={[]}
    lang="javascript"
    code={code}
    ranges={[
      { loc: [0, 0], title: 'Mise en place du serveur' },
      { loc: [0, 1], note: `Import d'Express` },
      { loc: [2, 3], note: `Import des outils GraphQL` },
      { loc: [4, 5], note: `Import du binding Express-GraphQL` },
      { loc: [6, 7], note: `Service générique pour les données` },
      { loc: [7, 8], note: `Import des types` },
      { loc: [9, 23], note: `Résolution des données` },
      { loc: [10, 15], note: `Points d'entrée de l'API` },
      { loc: [15, 18], note: `Construction de l'objet Post` },
      { loc: [18, 22], note: `Construction de l'objet Comment` },
      {
        loc: [24, 28],
        note: `Mise en correspondance des types et des méthodes`
      },
      { loc: [29, 37], note: `Lancement du serveur Express` }
    ]}
  />
);
