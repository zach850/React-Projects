import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "./style/App.css"

export default class App extends React.Component {
  //   constructor(props) {
  //     //super is reference to the parents constructor function and must be called every time
  //     super(props);

  //     // default value to null since we don't know what it is just yet
  //     // This is the only time we do direct assignment to this.state
  //     this.state = { lat: null, errorMessage: "" };
  //     }
  //Equivalent to using constructor function above
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component rerendered/ updated");
  }


//put conditional logic in a helper method due to multiple return statements
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
