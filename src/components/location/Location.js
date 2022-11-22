import React from "react";

const Location = (props) => {
  return (
    <div className="location">
      <div className="location__area">
        <span className="location__area--city">{props.city}</span>

        <span className="location__area--separator"> · </span>

        <span className="location__area--distance">
          {props.distance} km away
        </span>
      </div>

      <span className="location__pickup">Pickup in {props.pickup} days</span>

      <span className="location__status">
        Closed, opens tomorrow at {props.status}
      </span>

      {props.children}
    </div>
  );
};

export default Location;
