import React from "react";

export default class SearchBar extends React.Component {
    state = { term: "" };
    

    //event callback should be arrow function
    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        
        this.props.onFormSubmit(this.state.term)
}
    

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video SearchBar</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
