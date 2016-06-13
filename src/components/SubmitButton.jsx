import React from 'react';

class SubmitButton extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <div>
        <button className="btn btn-success" onClick={this.props.handleClick}>
          Search Things
        </button>
      </div>
    );
  }
}

export default SubmitButton;
