import React, { useState, useEffect } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const storedData = JSON.parse(localStorage.getItem("userData")) || {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  const [formData, setFormData] = useState(storedData);
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    validateField(name, newValue);
  };

  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "name":
        if (value.length < 3) errorMsg = "Name must be at least 3 characters.";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          errorMsg = "Enter a valid email.";
        break;
      case "password":
        if (value.length < 6 || !/[A-Z]/.test(value) || !/\d/.test(value)) {
          errorMsg =
            "Password must be at least 6 characters, include 1 uppercase letter and 1 number.";
        }
        break;
      case "confirmPassword":
        if (value !== formData.password) errorMsg = "Passwords do not match.";
        break;
      case "terms":
        if (!value) errorMsg = "You must accept the terms and conditions.";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
      setErrors({});
      localStorage.removeItem("userData");
    }, 2000);
  };

  const isFormValid =
    Object.values(errors).every((err) => err === "") &&
    Object.values(formData).every((val) => val);

  return (
    <div className="form">
      {showPopup && <div className="popup">Registration successful!</div>}
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : "success"}
          />
          {errors.name && (
            <small className="error-message">{errors.name}</small>
          )}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : "success"}
          />
          {errors.email && (
            <small className="error-message">{errors.email}</small>
          )}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error" : "success"}
          />
          {errors.password && (
            <small className="error-message">{errors.password}</small>
          )}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? "error" : "success"}
          />
          {errors.confirmPassword && (
            <small className="error-message">{errors.confirmPassword}</small>
          )}
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          <label>I accept the terms and conditions</label>
          {errors.terms && (
            <small className="error-message">{errors.terms}</small>
          )}
        </div>
        <button type="submit" disabled={!isFormValid}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
