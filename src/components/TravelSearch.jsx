import React from 'react';
import reqwest from 'reqwest';

import SubmitButton from './SubmitButton.jsx';
import SearchBox from './SearchBox.jsx';
import FlightsList from './FlightsList.jsx';
import { DateField, Calendar } from 'react-date-picker';

class TravelSearch extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.getFlightData = this.getFlightData.bind(this);
    this.createFlightList = this.createFlightList.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
    this.handleSuggestionSelection = this.handleSuggestionSelection.bind(this);
    this.state = {
      searchValue: '',
      searchId: '',
      results: [],
      loading: false,
      startDate: '',
      endDate: ''
    }
  }

  startDateChange(dateString, { dateMoment, timestamp }) {
    this.setState({startDate: dateString});
  }

  endDateChange(dateString, { dateMoment, timestamp }) {
    this.setState({endDate: dateString});
  }

  toggleLoading() {
    this.setState({loading: !this.state.loading});
  }

  handleSuggestionSelection(suggestion) {
    this.setState({
      searchValue: suggestion.PlaceName,
      searchId: suggestion.PlaceId
    });
  }

  getFlightData() {
    this.toggleLoading();
    const self = this;
    reqwest({
      url: 'http://localhost:3000/flights',
      type: 'json',
      method: 'post',
      data: {
        'origin': this.state.searchId,
        'startDate': this.state.startDate,
        'endDate': this.state.endDate
      }
    }).then((response) => {
      self.setState({results: response});
      self.toggleLoading();
    });
  }

  createFlightList() {
    if (this.state.results.length != 0) {
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
        <div className="row">
          <SearchBox handleClick={this.handleSuggestionSelection} />
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <DateField dateFormat="YYYY-MM-DD" date={this.state.startDate} onChange={this.startDateChange}/>
            <DateField dateFormat="YYYY-MM-DD" date={this.state.endDate} onChange={this.endDateChange}/>
          </div>
        </div>
        <div className="row">
          <SubmitButton handleClick={this.getFlightData} />
        </div>
        {flightResults}
      </div>
    );
  }
}

export default TravelSearch;
