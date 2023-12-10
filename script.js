//your JS code here. If required.
const line = document.querySelector("#line");

let angle = 0;

setInterval(() => {
  //rotate 0.36 degress
  angle += 2;
  line.style.transform = `rotate(${angle}deg)`;
}, 20);