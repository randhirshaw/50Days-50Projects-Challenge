let currentHours;
let currentMinutes;
let currentMeridian;
let Meridian;
let Hour;
let Minute;
let setMeridian;
let setHour;
let setMinute;
let AlarmSetFlag = 0;
let lowerContainer = document.getElementById('lower-container');

function updateTime() {
  let currentTime = new Date();
  currentHours = currentTime.getHours();
  currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();
  let clock = document.getElementById("clock");
  let str;

  currentMeridian = currentHours >= 12 ? "PM" : "AM";
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
  currentHours = currentHours > 12 ? currentHours - 12 : currentHours;
  currentHours = currentHours == 0 ? 12 : currentHours;
  currentHours = (currentHours < 10 ? "0" : "") + currentHours;

  str =currentHours +" : " +currentMinutes +" : " +currentSeconds +" " +currentMeridian;
  clock.innerHTML = str;
}


function setTime() {
  setHour = document.getElementById("hour-slider");
  setMinute = document.getElementById("minute-slider");

  let alarmTime = document.getElementById("show-alarm-time");
  let str;
  setHour = setHour.value;
  setMinute = setMinute.value;
  setMeridian = setHour >= 12 ? "PM" : "AM";
  setHour = setHour > 12 ? setHour - 12 : setHour;
  setHour = setHour == 0 ? 12 : setHour;
  setHour = (setHour < 10 ? "0" : "") + setHour;
  setMinute = (setMinute < 10 ? "0" : "") + setMinute;
  str = setHour + ":" + setMinute + setMeridian;
  alarmTime.innerHTML = str;
}



let Ringtone1 = new Audio("audio/ringtone1.mp3");
let Ringtone2 = new Audio("audio/ringtone2.mp3");
let Ringtone3 = new Audio("audio/ringtone3.mp3");

let flag = 0;
 
function setRingtone() {

  let btn1 = document.getElementById("ringtone1");
  let btn2 = document.getElementById("ringtone2");
  let btn3 = document.getElementById("ringtone3");

  btn1.onclick = function () {
    btn1.classList.add("ringtone-btn-select");
    btn2.classList.remove("ringtone-btn-select");
    btn3.classList.remove("ringtone-btn-select");
    Ringtone1.currentTime = 0;
    Ringtone1.play();
    Ringtone2.pause();
    Ringtone3.pause();
    flag = 1;
  };
  btn2.onclick = function () {
    btn2.classList.add("ringtone-btn-select");
    btn1.classList.remove("ringtone-btn-select");
    btn3.classList.remove("ringtone-btn-select");
    Ringtone2.currentTime = 0;
    Ringtone2.play();
    Ringtone1.pause();
    Ringtone3.pause();
    flag = 2;
  };
  btn3.onclick = function () {
    btn3.classList.add("ringtone-btn-select");
    btn2.classList.remove("ringtone-btn-select");
    btn1.classList.remove("ringtone-btn-select");
    Ringtone3.currentTime = 0;
    Ringtone3.play();
    Ringtone1.pause();
    Ringtone2.pause();
    flag = 3;
  };
}



let Ringtone;
function checkAlarm() {
  if (currentHours == Hour && currentMinutes == Minute && currentMeridian == Meridian) {
    clearInterval(alarmExecute);
    Ringtone.currentTime = 0;
    Ringtone.play();
    Ringtone.loop = true;
    lowerContainer.classList.add('gif');
    setTimeout(() => {
      Ringtone.pause();
      AlarmSetFlag = 0;
      lowerContainer.classList.remove('gif');

    }, 30000);
  }
}


let buttonSound = new Audio('audio/button-press.mp3');

function setAlarm() {
  buttonSound.currentTime = 0;
  buttonSound.play();
  if (flag == 1) {
    Ringtone = Ringtone1;
  }
  else if (flag == 2) {
    Ringtone = Ringtone2;
  }
  else if (flag == 3) {
    Ringtone = Ringtone3;
  }
  else {
    Ringtone = Ringtone1;
  }
  Hour = parseInt(setHour);
  Minute = parseInt(setMinute);
  Meridian = setMeridian;

  if (AlarmSetFlag == 0) {
    AlarmSetFlag = 1;
    alarmExecute = setInterval(() => {
      checkAlarm();
    }, 100);
  }
}


function clearAlarm() {
  buttonSound.currentTime = 0;
  buttonSound.play();
  lowerContainer.classList.remove('gif');
  Ringtone3.pause();
  Ringtone1.pause();
  Ringtone2.pause();
  Ringtone.loop = false;
  AlarmSetFlag = 0;
  Ringtone.pause();
  clearInterval(alarmExecute);
}