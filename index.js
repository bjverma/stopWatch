let sec = 0;
let min = 0;
let hour = 0;
let showSec = 0;
let showMin = 0;
let showHour = 0;
let status = false
let interval = null


function stopWatch() {
    sec += 1;
    if (sec / 60 === 1) {
        sec = 0;
        min++;
        if (min / 60 === 1) {
            min = 0;
            hour += 1;
        }
    }
    if (sec < 10) {
        showSec = "0" + sec.toString()
    } else {
        showSec = sec
    }

    if (min < 10) {
        showMin = "0" + min.toString()
    } else {
        showMin = min
    }
    if (hour < 10) {
        showHour = "0" + hour.toString()
    } else {
        showHour = hour
    }

    document.getElementById("display").innerHTML = showHour + ":" + showMin + ":" + showSec;

}


let startBtn = document.getElementById("start")
startBtn.addEventListener('click', startStop)

function startStop() {
    if (status == false) {
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById('start').innerHTML = 'Stop';
        status = true
    } else {
        window.clearInterval(interval);
        document.getElementById('start').innerHTML = 'Start';
        status = false
    }
}

let resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', reset);

function reset() {
    window.clearInterval(interval);
    sec = 0;
    min = 0;
    hour = 0;
    document.getElementById('display').innerHTML = "00:00:00";
    document.getElementById('start').innerHTML = 'Start';

}