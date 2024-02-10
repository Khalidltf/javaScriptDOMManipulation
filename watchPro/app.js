/* let start__btn = document.querySelector(".s_btn");
let reset__btn = document.querySelector(".r_btn");
let timer = document.querySelector(".timer");

let hours = 0;
let minutes = 0;
let seconds = 0;

let leadingHours = 0;
let leadingMinutes = 0;
let leadingSeconds = 0;

let timerInterval = null;
let timerStatus = null;

const start = () => {
  seconds++;
  if (seconds / 60 == 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 == 1) {
      minutes = 0;
      hours++;
    }
  }

  // seconds
  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  // minutes
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  // seconds
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  timer.textContent = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
};

// window.setInterval(start, 1);

start__btn.addEventListener("click", () => {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(start, 1000);
    start__btn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    start__btn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

reset__btn.addEventListener("click", () => {
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  timer.textContent = "00:00:00";
  start__btn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
});
*/

let start = document.querySelector(".s_btn");
let reset = document.querySelector(".r_btn");
let timer = document.querySelector(".timer");

let seconds = 0;
let minutes = 0;
let hours = 0;
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerStatus = "started";
let timerInterval = null;

function tikTok() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  timer.textContent = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

start.addEventListener("click", () => {
  console.log(timerStatus);
  if (timerStatus === "started") {
    console.log("task 1");
    timerInterval = window.setInterval(tikTok, 1000);
    start.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "stopped";
  } else {
    console.log("task 2");
    window.clearInterval(timerInterval);
    start.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "started";
  }
});

reset.addEventListener("click", () => {
  console.log('reset');
  window.clearInterval(timerInterval);
  seconds = 0;
  minute = 0;
  hours = 0;

  timer.textContent = "00:00:00";
  start.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
});
