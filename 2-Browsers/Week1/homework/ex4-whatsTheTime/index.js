'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const currentTime = document.getElementById('time')
  currentTime.innerText = new Date();
  const hour = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
  const minute = today.getMinutes();
  const seconds = today.getSeconds();
 

    const output =  hour + ':' + minute + ':' + seconds ;

    document.write(output);
}
window.addEventListener('load',function(){
  setInterval(addCurrentTime, 1000);
} )

// TODO execute `addCurrentTime` when the browser has completed loading the page
