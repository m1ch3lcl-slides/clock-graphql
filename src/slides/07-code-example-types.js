import React from 'react';
import CodeSlide from 'spectacle-code-slide';

const code = `type User {
  id: Int
  name: String
}

type Post {
  id: Int
  author: User
  message: String
}

type Comment {
  id: Int
  author: User
  post: Post
  message: String
}

type Query {
  getUser(id: Int!): User
  getPost(id: Int!): Post
  getComment(id: Int!): Comment
}
`;

export default (
  <CodeSlide
    className="code-slide"
    textColor="secondary"
    transition={[]}
    lang="graphql"
    code={code}
    ranges={[
      { loc: [0, 24], title: 'Déclaration des types' },
      { loc: [0, 4], note: `Définition du type User` },
      { loc: [5, 10], note: `Définition du type Post` },
      { loc: [11, 17], note: `Définition du type Comment` },
      { loc: [18, 23], note: `Points d'entrée de l'API` }
    ]}
  />
);
