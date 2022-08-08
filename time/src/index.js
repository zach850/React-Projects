import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
    state = {time: new Date().toLocaleTimeString()}

    componentDidMount() {
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()})
        }, 1000)
    }



  render() {
      return <div className="time">This time is: {this.state.time }</div>;
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));