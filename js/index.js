const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const { body } = document;

let intervalId;

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorChange = (e) => {
  const btnAction = e.target.dataset.action;
  const btnStart = document.querySelector("button[data-action='start']");

  if (btnAction === "start") {
    e.target.disabled = true;

    intervalId = setInterval(() => {
      body.style.backgroundColor = colors[randomNumber(0, colors.length - 1)];
    }, 1000);
  }

  if (btnAction === "stop") {
    btnStart.disabled = false;

    clearInterval(intervalId);
  }
};

body.addEventListener("click", colorChange);
