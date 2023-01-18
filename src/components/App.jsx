import React, { useState } from "react";

function App() {
  const [headingText, setheadingText] = useState("hello");
  const [ismousedOver, setMousedOver] = useState(false);
  // const [isMouseOut, setMouseOut] = useState(true)
  function handleClick() {
    setheadingText("submitted");
  }

  function handleMouseOver() {
    setMousedOver(true);
  }
  function handleMouseOut() {
    setMousedOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{
          backgroundColor: ismousedOver ? "black" : "white"
        }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
