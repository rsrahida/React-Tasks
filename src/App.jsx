import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HelloReactPage from "./pages/HelloReactPage";
import ProfileCardPage from "./pages/ProfileCardPage";
import CounterDashboard from "./components/ThirdTask/CounterDashboard";
import TodoListPage from "./pages/TodoListPage";
import TemperatureConverterPage from "./pages/TemperatureConverterPage";
import UserCardPage from "./pages/UserCardPage";
import RegistrationFormPage from "./pages/RegistrationFormPage";
import ContentTogglerPage from "./pages/ContentTogglerPage";
import Navbar from "./shared/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element=<HelloReactPage /> />
          <Route path="/profilecard" element=<ProfileCardPage /> />
          <Route path="/counterdashboard" element=<CounterDashboard /> />
          <Route path="/todolist" element=<TodoListPage /> />
          <Route
            path="/temperatureconverter"
            element=<TemperatureConverterPage />
          />
          <Route path="/usercard" element=<UserCardPage /> />
          <Route path="/registrationform" element=<RegistrationFormPage /> />
          <Route path="/contenttoggler" element=<ContentTogglerPage /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
