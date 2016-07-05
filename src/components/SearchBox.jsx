import React from 'react';
import reqwest from 'reqwest';

class SearchBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.getAutoSuggestion = this.getAutoSuggestion.bind(this);
        this.selectSuggestion = this.selectSuggestion.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            searchQuery: '',
            autoSuggestions: []
        };
    };

    handleChange(event) {
      this.setState({searchQuery: event.target.value});
      this.getAutoSuggestion(event.target.value);
    }

    getAutoSuggestion(query) {
        const self = this;
        reqwest({
            url: 'http://localhost:3000/autosuggest?query=' + query,
            type: 'json',
            method: 'get'
        }).then((response) => {
            self.setState({autoSuggestions: response.Places});
        });
    }

    selectSuggestion(suggestion) {
        this.setState({autoSuggestions: []});
        this.props.handleClick(suggestion)
    }

    render() {
        return(
            <div className="col-md-offset-4 col-md-4 text-center">
                <div className="row">
                    <input
                        type="text"
                        placeholder="dummy search"
                        value={this.state.searchQuery}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="row">
                  <div className="list-group">
                      {this.state.autoSuggestions.map((suggestion) => {
                          <button key={suggestion.PlaceId} type="button" className="list-group-item"
                          onClick={this.props.handleClick(suggestion)}>
                              {suggestion.PlaceName}
                          </button>
                      })}
                  </div>
                </div>
            </div>
        );
    }
}

export default SearchBox;
