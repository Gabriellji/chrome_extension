import { MessageType } from "./types";

const sendLoveStatus = (spreading: boolean) => {
    const message = { type: "LOVE_STATUS", spreading };

    // send message to popup
    chrome.runtime.sendMessage(message);

    // send message to every active tab
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
            if (tab.id) {
                chrome.tabs.sendMessage(tab.id, message);
            }
        });
    });
};

let spreading = false;

// Get locally stored value
chrome.storage.local.get("spreading", (res) => {
    if (res["spreading"]) {
        spreading = true;
    } else {
        spreading = false;
    }
});

chrome.runtime.onMessage.addListener((message: MessageType) => {
    switch (message.type) {
        case "REQ_LOVE_STATUS":
            sendLoveStatus(spreading);
            break;
        case "TOGGLE_LOVE":
            spreading = message.spreading;
            chrome.storage.local.set({ spreading: spreading });
            sendLoveStatus(spreading);
            break;
        default:
            break;
    }
});