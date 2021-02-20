import React, { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [nameButton, setNameButton] = useState("blue");
  const handleButtonColor = () => {
    if (buttonColor === "red") {
      setButtonColor("blue");
    } else {
      setButtonColor("red");
    }
  };
  const handleButtonText = () => {
    if (nameButton === "blue") {
      setNameButton("red");
    } else {
      setNameButton("blue");
    }
  };
  return (
    <div>
      <button
        style={{ background: buttonColor }}
        onClick={() => {
          handleButtonColor();
          handleButtonText();
        }}
      >
        <p>Change to {nameButton} </p>
      </button>
    </div>
  );
}

export default App;
