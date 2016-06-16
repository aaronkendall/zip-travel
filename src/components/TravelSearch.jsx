import React from 'react';
import reqwest from 'reqwest';

import SubmitButton from './SubmitButton.jsx';
import SearchBox from './SearchBox.jsx';
import FlightsList from './FlightsList.jsx';
import { DateField, Calendar } from 'react-date-picker';

class TravelSearch extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.getFlightData = this.getFlightData.bind(this);
    this.createFlightList = this.createFlightList.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
    this.state = {
      value: '',
      results: [],
      loading: false,
      startDate: '',
      endDate: ''
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
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

  getFlightData() {
    this.toggleLoading();
    let self = this;
    reqwest({
      url: 'http://localhost:3000/flights',
      type: 'json',
      method: 'post',
      data: {
        'origin': this.state.value,
        'startDate': this.state.startDate,
        'endDate': this.state.endDate
      }
    }).then(function(response) {
      self.state.results.push(response);
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
          <SearchBox value={this.state.value} handleChange={this.handleChange} />
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
