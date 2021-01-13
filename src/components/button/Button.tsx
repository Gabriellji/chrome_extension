import * as React from "react";
import { MessageType } from "../../types";
import "./Button.css";

export const Button = () => {
  const [love, setLove] = React.useState(true);

  React.useEffect(() => {
    chrome.runtime.sendMessage({ type: "REQ_LOVE_STATUS" });

    chrome.runtime.onMessage.addListener((message: MessageType) => {
      switch (message.type) {
        case "LOVE_STATUS":
          setLove(message.spreading);
          break;
        default:
          break;
      }
    });
  }, []);

  const onClick = () => {
    chrome.runtime.sendMessage({ type: "TOGGLE_LOVE", spreading: !love });
  };

  return (
    <div className="buttonContainer">
      <button className="snowButton" onClick={onClick}>
        {love ? "Disable 💔" : "Love is everywhere ❤️ !!!"}
      </button>
    </div>
  );
};