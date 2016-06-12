import React from 'react';
import ReactDOM from 'react-dom';

class SearchBox extends React.Component {
  constructor(props, context) {
    super(props, context);
  };

  render() {
    return(
      <input
        type="text"
        placeholder="dummy search"
        value={this.props.value}
        onChange={this.props.handleChange}
      />
    );
  }
}

export default SearchBox;
