let timerDisplay=document.getElementById('timerDisplay');
let startButton=document.getElementById('startButton');
let stopButton=document.getElementById('stopButton');
let resetButton=document.getElementById('resetButton');
let milisec=00;
let sec=00;
let mins=00;

let timerId=null;


startButton.addEventListener('click',function(){
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId=setInterval(startTimer, 10);
});

stopButton.addEventListener('click',function(){
        clearInterval(timerId);
    });

resetButton.addEventListener('click',function(){   
            clearInterval(timerId);
            timerDisplay.innerHTML=`00 : 00 : 00`;
            milisec=sec=mins=00;
        });

function startTimer(){
   milisec++;
   if(milisec==100){
    milisec=0;
    sec++;
    
    if(sec==60){
        sec=0;
        mins++;
    }
   }
   let milisecString = milisec < 10 ? `0${milisec}` : milisec;
   let secString  = sec < 10  ? `0${sec}` : sec;
   let minsString  =  mins  < 10  ?  `0${mins}` : mins;
   timerDisplay.innerHTML=`${minsString} :${secString}:${milisecString}`;
}