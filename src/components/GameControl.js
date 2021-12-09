import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import 'firebase/compat/auth';
import Player from './Player';
import Room from './Room';

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentRoom: "Start"
      // inBattle: false 
    };
  }

  handleClick = () => {
    if (this.state.currentRoom != null) {
      this.setState({
        currentRoom: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleChangingCurrentRoom = (id) => {
    this.props.firestore.get({ collection: 'rooms', doc: id }).then((room) => {
      const firestoreRoom = {
        name: room.get("name"),
        description: room.get("description"),
        adjacentRooms: room.get("adjacentRooms"),
        items: room.get("items"),
        enemies: room.get("enemies"),
        id: room.id
      }
      this.setState({ currentRoom: firestoreRoom });
    });
  }

  render() {

    return (
      <React.Fragment>
        {/* {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> */}
        <Player />
      </React.Fragment>
    );
  }
}

export default GameControl;