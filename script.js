//your JS code here. If required.
const line = document.querySelector("#line");

let angle = 0;

setInterval(() => {
  //rotate 2 degree
  angle += 2;
  line.style.transform = `rotate(${angle}deg)`;
}, 20);