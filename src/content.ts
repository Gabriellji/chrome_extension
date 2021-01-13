import "./content.css";
import { MessageType } from "./types";

const body = document.getElementsByTagName("body");

const heartContainer = document.createElement("div");
heartContainer.className = "snowflakes";
heartContainer.setAttribute("aria-hidden", "true");

const heart = document.createElement("div");
heart.className = "snowflake";
heart.innerHTML = "<3";

for (let i = 0; i < 12; i++) {
    heartContainer.appendChild(heart.cloneNode(true));
}

chrome.runtime.sendMessage({ type: "REQ_LOVE_STATUS" });

let spreading = false;
chrome.runtime.onMessage.addListener((message: MessageType) => {
  switch (message.type) {
    case "LOVE_STATUS":
      if (message.spreading) {
        if (!spreading) {
          body[0]?.prepend(heartContainer);
        }
      } else {
        heartContainer.parentNode?.removeChild(heartContainer);
      }
      spreading = message.spreading;
      break;
    default:
      break;
  }
});