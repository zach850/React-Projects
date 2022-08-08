import React from "react";

export default class SearchBar extends React.Component {
  state = { term: "" };

  //keeps the browser from submitting the form automatically/refreshing the page, use this often for forms
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search: </label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              // onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}
