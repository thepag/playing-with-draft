import React from 'react';
import ReactDOM from 'react-dom';
import Editor from 'modules/editor';

ReactDOM.render(
  <div>
    <h1>draft.js</h1>
    <div style={{ backgroundColor: '#eee' }}>
      <Editor />
    </div>
  </div>,
  document.getElementById('root'),
);
