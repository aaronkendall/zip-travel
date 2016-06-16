import React from 'react';

class SubmitButton extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <div className="col-md-offset-4 col-md-4 text-center">
        <button className="btn btn-success" onClick={this.props.handleClick}>
          Search Things
        </button>
      </div>
    );
  }
}

export default SubmitButton;
