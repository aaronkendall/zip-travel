import React from 'react';
import reqwest from 'reqwest';

import SubmitButton from './SubmitButton.jsx';
import SearchBox from './SearchBox.jsx';
import FlightsList from './FlightsList.jsx';

class TravelSearch extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.getFlightData = this.getFlightData.bind(this);
    this.createFlightList = this.createFlightList.bind(this);
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
    let self = this;
    reqwest({
      url: 'http://localhost:3000/flights',
      type: 'json',
      method: 'post',
      data: {'origin': this.state.value, 'startDate': '2016-06-20', 'endDate': 'a thing'}
    }).then(function(response) {
      self.state.results.push(response);
      self.toggleLoading();
    });
  }

  createFlightList() {
    if (this.state.results) {
      return <FlightsList data={this.state.results} />
    }
    return null
  };

  render() {
    const loadingSpinner = this.state.loading ? <img src={'../src/img/loading.gif'} /> : null;
    const flightResults = this.createFlightList();
    return(
      <div>
        {loadingSpinner}
        <SearchBox value={this.state.value} handleChange={this.handleChange} />
        <SubmitButton handleClick={this.getFlightData} />
        {flightResults}
      </div>
    );
  }
}

export default TravelSearch;
