var alarmTime = 900; //time in seconds 1499 x 60 = 24.9
var mode = "normal";
var color = "E1F0C0"; //light green 66CDAA or 98FB98 or abcdef or FFEFD5

var mins;
var secs;
var countdownID;

var worker = new Worker('countdown-worker-simple.js');
worker.addEventListener('message', function(e) {
    if (e.data == 'tick') {
        counter();
    }
});

var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var message = document.getElementById("message");

var start = document.getElementById("start");
start.addEventListener("click", startTimer, false);

var stop = document.getElementById("stop");
stop.addEventListener("click", stopTimer, false);

var reset = document.getElementById("reset");  
reset.addEventListener("click", resetTimer, false);

//COUNTDOWN
function counter() {
  console.log('started')
  
  mins = Math.floor(alarmTime / 60);
  secs = alarmTime - mins * 60;

  minutes.innerHTML = (mins < 10 ? '0' : '') + mins;
  seconds.innerHTML = (secs < 10 ? '0' : '') + secs;
  
  if (secs == 0) {
    message.innerHTML = "Slow and steady...";
  }

  if (mins == 12) {
    message.innerHTML = "Hard work pays off";
  }

  if (mins == 6) {
    message.innerHTML = "Keep up the great work!";
  }

  if (mins == 2) {
  message.innerHTML = "Almost there...";
  }

  if (mins == 0) {
    message.innerHTML = "Go on, take a breezer! You've earned it."
  }
  
  if (alarmTime == 0) {
    
    if (mode == "normal") {
       
      mode = "cooldown";    
      alarmTime = 0;
      } 
    
    else if (mode == "cooldown") {
      
      mode = "normal";    
      alarmTime = 900;  
      
      minutes.innerHTML = "15";
      seconds.innerHTML = "00";
      
      document.body.style.background = "#" + color;
      
      start.style.display = "block"; 
      stop.style.display = "none"; 
      reset.style.display = "none"; 
      
     
      worker.postMessage('stop');


      //notify
      if (Notification.permission !== "granted") {
        Notification.requestPermission();
      }
        
        var notification = new Notification('Breezer', {
        icon: 'breezer-logo-01.png',
        body: "Break time! You've earned it.",
      });
    //end notify

    //audio notify
      document.getElementById('timer-beep').play();

    }    
       
  } 
  else {
    alarmTime = alarmTime - 1; 
  }
        
}

//START
function startTimer() {
  worker.postMessage('start');
  
  //message
  message.innerHTML = "Slow and steady...";
 
  //stop button 
  start.style.display = "none"; 
  stop.style.display = "block"; 
  reset.style.display = "none"; 
} 

//STOP
function stopTimer() {
  worker.postMessage('stop');
  // You don't need this anymore, its in the worker
  // clearInterval(countdownID);

  //message
  message.innerHTML = "Don't stop now! You're almost there..";
  
  //reset button
  start.style.display = "none"; 
  stop.style.display = "none"; 
  reset.style.display = "block"; 
}

//RESET
function resetTimer() {
  console.log('reset')
  //reset alarm
  alarmTime = 900;
  minutes.innerHTML = 15;
  seconds.innerHTML = "00";
  
  //message
  message.innerHTML = "How do you feel?";
  
  //start button
  start.style.display = "block"; 
  stop.style.display = "none"; 
  reset.style.display = "none"; 
}
