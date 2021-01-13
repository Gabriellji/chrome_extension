import "./content.css";

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

body[0]?.prepend(heartContainer);