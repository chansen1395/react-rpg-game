import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import 'firebase/compat/auth';

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentRoom: "Start"
      // inBattle: false
    };
  }

  render() {

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}