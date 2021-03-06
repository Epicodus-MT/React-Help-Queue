import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function Ticket(props){
  return (
    <div>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <p>{props.timeOpened}</p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  timeOpened: PropTypes.string.isRequired
};

export default Ticket;
