import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './src/hello.jsx';
import World from './src/world.jsx';

ReactDOM.render(
  <div>
    <Hello />
    <World />
  </div>,
  document.getElementById('container')
);
