import React from "react";

//Always import connect
import { connect } from "react-redux";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
      return <div className="ui divided list">{ this.renderList()}</div>;
  }
}

//Always going to define this in redux to connect to component. Always going to get first arg of state
// And Always going to return an object that shows up as props inside of the component
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

//Always call connect and pass in component as second function call
export default connect(mapStateToProps)(SongList);
