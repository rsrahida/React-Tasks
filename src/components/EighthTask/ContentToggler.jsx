import React, { useState } from "react";
import "./ContentToggler.css";

const ContentToggler = () => {
  const [activeSection, setActiveSection] = useState(1);

  const content = {
    1: "This is the content of Section 1.",
    2: "This is the content of Section 2.",
    3: "This is the content of Section 3.",
  };

  const handleSectionChange = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  return (
    <div className="content-toggler">
      <div className="nav-menu">
        <button
          className={activeSection === 1 ? "active" : ""}
          onClick={() => handleSectionChange(1)}
        >
          Section 1
        </button>
        <button
          className={activeSection === 2 ? "active" : ""}
          onClick={() => handleSectionChange(2)}
        >
          Section 2
        </button>
        <button
          className={activeSection === 3 ? "active" : ""}
          onClick={() => handleSectionChange(3)}
        >
          Section 3
        </button>
      </div>
      <div className="content-section">
        <p>{content[activeSection]}</p>
      </div>
    </div>
  );
};

export default ContentToggler;
