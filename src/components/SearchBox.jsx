import React from 'react';

class SearchBox extends React.Component {
  constructor(props, context) {
    super(props, context);
  };

  render() {
    return(
      <div className="col-md-offset-4 col-md-4 text-center">
        <input
          type="text"
          placeholder="dummy search"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default SearchBox;
