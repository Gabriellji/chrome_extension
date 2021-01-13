// Popup or content script requesting the current status
interface LoveRequest {
    type: "REQ_LOVE_STATUS";
  }
  
  // Background script broadcasting current status
  interface LoveResponse {
    type: "LOVE_STATUS";
    spreading: boolean;
  }
  
  // Popup requesting background script for status change
  interface LoveToggle {
    type: "TOGGLE_LOVE";
    spreading: boolean;
  }
  
  export type MessageType = LoveRequest | LoveResponse | LoveToggle;