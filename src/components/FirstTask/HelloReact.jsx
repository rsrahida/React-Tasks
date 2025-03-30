import React, { useEffect, useState } from "react";
import "./HelloReact.css";

const HelloReact = () => {
  const [greeting, setGreeting] = useState("");

  const updateGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  };

  useEffect(() => {
    updateGreeting();
  }, []);

  return (
    <div className="greeting-container">
      <h1 className="greeting-text">{greeting}, My name is Rahida!</h1>
    </div>
  );
};

export default HelloReact;
