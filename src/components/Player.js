import React from "react";
import PropTypes from "prop-types";

function Player(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>Current HP: {props.hp}</p>
      <p>Current ATT: {props.attack}</p>
      <p>Current Room: {props.currentRoom}</p>
    </React.Fragment>
  )
}


Player.propTypes = {
  name: PropTypes.string,
  hp: PropTypes.number,
  attack: PropTypes.number,
  currentRoom: PropTypes.string,
  inventory: PropTypes.array
}

export default Player;