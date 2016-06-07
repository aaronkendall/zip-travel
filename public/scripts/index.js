import React from 'react';
import ReactDOM from 'react-dom';

var Test = React.createClass({
  render: function() {
    return (
      <h1>These are some words</h1>
    );
  }
});

ReactDOM.render(
  <Test />,
  document.getElementById('container')
)
