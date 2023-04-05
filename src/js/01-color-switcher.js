
const bodyElement = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  startBtn.addEventListener('click', startChangeColor);
  stopBtn.addEventListener('click', stopChangeColor);

  let generateColor = null;

  function startChangeColor() {
    generateColor = setInterval(() => bodyElement.style.backgroundColor = getRandomHexColor(), 1000);
    startBtn.disable = true;
    stopBtn.disable = false;
  }

  
  function stopChangeColor() {
    clearInterval(generateColor);
    startBtn.disable = false;
    stopBtn.disable = true;
  }