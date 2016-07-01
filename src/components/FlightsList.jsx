import React from 'react';

class FlightsList extends React.Component {

  render() {
    return(
      <div>
        {this.props.data.map(function(quote) {
          return(
          <div key={quote.id} classNamme="col-md-12 well well-lg">
            <div className="col-md-10 text-center">
              <div className="col-md-6">
                <h3>Depart {quote.outboundFlight.departureDate}</h3>
                <p>{quote.outboundFlight.destinationCity}</p>
                <p>{quote.outboundFlight.originAirport} To {quote.outboundFlight.destinationAirport}</p>
                <p>Flying with {quote.outboundFlight.carrierName}</p>
              </div>
              <div className="col-md-6">
                <h3>Return {quote.inboundFlight.departureDate}</h3>
                <p>{quote.inboundFlight.destinationCity}</p>
                <p>{quote.inboundFlight.originAirport} To {quote.inboundFlight.destinationAirport}</p>
                <p>Flying with {quote.inboundFlight.carrierName}</p>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <button className="btn btn-success">Book Now £{quote.price}</button>
            </div>
          </div>
          )
        })}
      </div>
    )
  };
};

export default FlightsList;
