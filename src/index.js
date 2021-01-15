import "./styles.css";

const timeLine = document.querySelector("h3");

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  let today = Date.now();
  let result = xmasDay - today - NINE_HOURS_MILLISECONDS;
  timeLine.innerHTML = result;
  var days = Math.floor(result / (1000 * 60 * 60 * 24));
  var hours = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((result % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  timeLine.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

function init() {
  setInterval(getTime, 1000);
}
init();
