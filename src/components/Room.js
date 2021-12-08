import React from "react";
import PropTypes from "prop-types";

function Room(props) {
  return (
    <React.Fragment>
      <h3>Welcome to the {props.name}</h3>
      <p>{props.description}</p>
      <ul>Items: 
        {props.items.map((item) => {
          <li>{item.items}</li>
        })}
      </ul>
      <ul>Enemies: 
        {props.enemies.map((enemy) => {
          <li>{enemy.enemies}</li>
        })}
      </ul>
      <ul>Enemies: 
        {props.enemies.map((enemy) => {
          <li>{enemy.enemies}</li>
        })}
      </ul>
      <ul>Adjacent Rooms: 
        {props.adjacentRooms.map((adjacentRoom) => {
          <li>{adjacentRoom.adjacentRooms}</li>
        })}
      </ul>
    </React.Fragment>
  )
}

Room.PropTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  adjacentRooms: PropTypes.array,
  items: PropTypes.array,
  enemies: PropTypes.array
}

export default Room;