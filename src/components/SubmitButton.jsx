import React from 'react';
import ReactDOM from 'react-dom';

class SubmitButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.state = {
      loading: false
    }
  }

  toggleLoading() {
    this.setState({loading: !this.state.loading});
  }

  handleClick() {
    this.toggleLoading();
  }

  render() {
    const loadingSpinner = this.state.loading ? <img src={'../src/img/loading.gif'} /> : null;
    return(
      <div>
        {loadingSpinner}
        <button className="btn btn-success" onClick={this.handleClick}>
          Search Things
        </button>
      </div>
    );
  }
}

export default SubmitButton;
