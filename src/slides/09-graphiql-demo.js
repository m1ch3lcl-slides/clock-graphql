import React from 'react';

import { Slide, Heading } from 'spectacle';

import '../browser-frame.css';

export default url => (
  <Slide bgColor="primary" padding="100px" className="full-height">
    <Heading size={3} textColor="tertiary" margin="20px">
      Démonstration
    </Heading>
    <div className="browser-frame">
      <div className="titlebar">
        <span className="icon icon-0" />
        <span className="icon icon-1" />
        <span className="icon icon-2" />
        <div className="title">Express-GraphQL</div>
      </div>
      <div className="toolbar">
        <input type="text" value={url} disabled />
      </div>
      <iframe
        title="exemple 1 avec iframe"
        src={url}
        style={{
          width: '100%',
          border: 'none',
          flex: 1
        }}
      />
    </div>
  </Slide>
);
