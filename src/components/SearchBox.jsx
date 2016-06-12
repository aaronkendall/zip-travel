import React from 'react';
import ReactDOM from 'react-dom';

class SearchBox extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: ''
    };
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return(
    <input
      type="text"
      placeholder="dummy search"
      value={this.state.value}
      onChange={this.handleChange}
    />
  )}
}

export default SearchBox;
