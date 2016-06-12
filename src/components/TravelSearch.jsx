import React from 'react';

import SubmitButton from './SubmitButton.jsx';
import SearchBox from './SearchBox.jsx';

class TravelSearch extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return(
      <div>
        <SearchBox value={this.state.value} handleChange={this.handleChange} />
        <SubmitButton value={this.state.value} />
      </div>
    );
  }
}

export default TravelSearch;
