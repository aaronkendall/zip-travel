import React from 'react';

import SubmitButton from './SubmitButton.jsx';
import SearchBox from './SearchBox.jsx';

class TravelSearch extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.getFlightData = this.getFlightData.bind(this);
    this.state = {
      value: '',
      results: [],
      loading: false
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  toggleLoading() {
    this.setState({loading: !this.state.loading});
  }

  getFlightData() {
    this.toggleLoading();
    console.log(this.state.value);
  }

  render() {
    const loadingSpinner = this.state.loading ? <img src={'../src/img/loading.gif'} /> : null;
    return(
      <div>
        {loadingSpinner}
        <SearchBox value={this.state.value} handleChange={this.handleChange} />
        <SubmitButton handleClick={this.getFlightData} />
      </div>
    );
  }
}

export default TravelSearch;
