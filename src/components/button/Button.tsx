import * as React from "react";
import "./Button.css";

export const Button = () => {
  const [love, setLove] = React.useState(true);

  const onClick = () => {
    setLove(!love);
    chrome.runtime.sendMessage("Hello from the popup!");
  };

  return (
    <div className="buttonContainer">
      <button className="loveButton" onClick={onClick}>
        {love ? "Disable love 💔" : "Love is everywhere! ❤"}
      </button>
    </div>
  );
};