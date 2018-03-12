import React from 'react';
import Intro from './01-intro';
import ExecutiveSummary from './02-executive-summary';
import WhatIsGraphQL01 from './03-what-is-graphql';
import WhatIsGraphQL03 from './04-what-is-graphql';
import WhatIsGraphQL04 from './05-what-is-graphql';
import WhatIsGraphQL05 from './06-what-is-graphql';
import CodeExampleTypes from './07-code-example-types';
import CodeExampleExpress from './08-code-example-express';
import GraphiQLDemo from './09-graphiql-demo';
import Features from './10-features.js';
import Advantages from './11-advantages.js';
import Disadvantages from './12-disadvantages.js';
import Conclusion from './13-conclusion.js';

export default [
  Intro,
  ExecutiveSummary(),
  ExecutiveSummary(1),
  WhatIsGraphQL01,
  WhatIsGraphQL03,
  WhatIsGraphQL04,
  WhatIsGraphQL05,
  ExecutiveSummary(2),
  CodeExampleTypes,
  CodeExampleExpress,
  GraphiQLDemo('http://localhost:4000/graphql'),
  ExecutiveSummary(3),
  Features,
  GraphiQLDemo('http://localhost:4001/graphql'),
  ExecutiveSummary(4),
  Advantages,
  Disadvantages,
  Conclusion
];
