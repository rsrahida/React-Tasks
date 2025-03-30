import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        HelloReact
      </Link>
      <Link
        to="/profilecard"
        className={location.pathname === "/profilecard" ? "active" : ""}
      >
        ProfileCard
      </Link>
      <Link
        to="/counterdashboard"
        className={location.pathname === "/counterdashboard" ? "active" : ""}
      >
        CounterDashboard
      </Link>
      <Link
        to="/todolist"
        className={location.pathname === "/todolist" ? "active" : ""}
      >
        TodoList
      </Link>
      <Link
        to="/temperatureconverter"
        className={location.pathname === "/temperature" ? "active" : ""}
      >
        TemperatureConverter
      </Link>
      <Link
        to="/usercard"
        className={location.pathname === "/usercard" ? "active" : ""}
      >
        UserCard
      </Link>
      <Link
        to="/registrationform"
        className={location.pathname === "/registrationform" ? "active" : ""}
      >
        RegistrationForm
      </Link>
      <Link
        to="/contenttoggler"
        className={location.pathname === "/contenttoggler" ? "active" : ""}
      >
        ContentToggler
      </Link>
    </div>
  );
};

export default Navbar;
