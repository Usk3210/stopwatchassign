let timer_Interval;

let timer_Value = 0;
let cast_Lists = [];

function StopWatchTime(time) {
  let Hours = Math.floor(time / 3600000);
  time %= 3600000;
  let Minutes = Math.floor(time / 60000);
  time %= 60000;
  let Seconds = Math.floor(time / 1000);
  let Milliseconds = time % 1000;

  return (
    `${Hours.toString().padStart(2, '0')}:` +
    `${Minutes.toString().padStart(2, '0')}:` +
    `${Seconds.toString().padStart(2, '0')}:` +
    `${Milliseconds.toString().padStart(3, '0')}`
  );
}

function startStopWatch() {
  clearInterval(timer_Interval);
  timer_Interval = setInterval(() => {
    timer_Value += 10;
    document.getElementById("timer").textContent = StopWatchTime(timer_Value);
  }, 10);
}

function pauseStopWatch() {
  clearInterval(timer_Interval);
}

function resetStopWatch() {
  clearInterval(timer_Interval);
  timer_Value = 0;
  document.getElementById("timer").textContent = "00:00:00:000";
  cast_Lists
 = [];
  document.getElementById("cast-list").innerHTML = "";
}

function castStopWatch() {

    let castIndex = cast_Lists.length + 1;
    let castTime = document.getElementById("timer").textContent;
    let castItem = `CAST ${castIndex} - ${castTime}`;
    cast_Lists.push(castItem);
    let castListHtml = "";
    cast_Lists.forEach((item) => {
      castListHtml += `<div>${item}</div>`;
    });
    document.getElementById("cast-list").innerHTML = castListHtml;
  }

