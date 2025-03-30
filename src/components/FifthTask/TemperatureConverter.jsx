import React, { useState } from "react";
import "./TemperatureConverter.css";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [isCelsius, setIsCelsius] = useState(true);

  const convertTemperature = () => {
    if (temperature === "") {
      return "";
    }
    const tempValue = parseInt(temperature);
    return isCelsius
      ? ((tempValue * 9) / 5 + 32).toFixed(2) + " °F"
      : (((tempValue - 32) * 5) / 9).toFixed(2) + " °C";
  };
  return (
    <div className="weather">
      <div className="weather-container">
        <h2 className="title">Live Weather Converter</h2>
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="Enter temperature"
          className="temperature-input"
        />
        <div className="toggle-container">
          <span>°C</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={!isCelsius}
              onChange={() => setIsCelsius(!isCelsius)}
            />
            <span className="slider"></span>
          </label>
          <span>°F</span>
        </div>
        <div className="result">
          Converted Temperature: <strong>{convertTemperature()}</strong>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
