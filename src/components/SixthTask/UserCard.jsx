import React from "react";
import PropTypes from "prop-types";
import "./UserCard.css";

const UserCard = ({ name, email, age, address, onButtonClick }) => {
  if (typeof name !== "string") {
    console.warn("Warning: name should be a string!");
  }
  if (typeof email !== "string") {
    console.warn("Warning: email should be a string!");
  }
  if (typeof age !== "number") {
    console.warn("Warning: age should be a number!");
  }
  if (typeof address !== "object" || !address.city || !address.country) {
    console.warn("Warning: address should be an object with city and country!");
  }

  return (
    <div className="cards">
      <div className="user-card">
        <div className="user-info">
          <h2 className="user-name">{name}</h2>
          <p className="user-email">{email}</p>
          <p className="user-age">Age: {age}</p>
          <p className="user-address">
            Address: {address.city}, {address.country}
          </p>
          <button onClick={onButtonClick}>Click Me</button>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default UserCard;
