import React from 'react';
import ReactDOM from 'react-dom';

import SearchBox from './components/SearchBox.jsx';
import SubmitButton from './components/SubmitButton.jsx';

ReactDOM.render(
  <div>
    <SearchBox />
    <SubmitButton />
  </div>,
  document.getElementById('container')
);
