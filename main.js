//設定
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let h = document.getElementById("h");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let msec = document.getElementById("msec");
let calH = 0;
let calMin = 0;
let calSec = 0;
let calMsec = 0;
let interval;

//時間を進める機能
function stopWatch() {
  calMsec++;
  if (calMsec % 10 == 0) {
    calSec++;
    calMsec = 0;
  } 
  if (calSec !=0 && calSec % 60 == 0) {
    calMin++;
    calSec = 0;
  } 
  if (calMin !=0 && calMin % 60 == 0) {
    calH++;
    calMin = 0;
  }
  
  h.innerHTML = ("0" + calH).slice(1);
  min.innerHTML = ("0" + calMin).slice(1);
  sec.innerHTML = ("0" + calSec).slice(1);
  msec.innerHTML = calMsec;
}

//スタート押下
function eventStart() {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
  
  interval = setInterval(stopWatch, 100);
}

//ストップ押下
function eventStop() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
  
  clearInterval(interval);
}

//リセット押下
function eventReset() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
  
  clearInterval(interval);
  
  h.innerHTML = 0;
  min.innerHTML = 0;
  sec.innerHTML = 0;
  msec.innerHTML = 0;
  calH = 0;
  calMin = 0;
  calSec = 0;
  calMsec = 0;
}