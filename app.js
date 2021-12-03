console.log('Welcome');

const alarmSubmit = document.getElementById('alarmSubmit');

//Add an Event Listener for submit
alarmSubmit.addEventListener('click',setAlarm);

let audio = new Audio('Alarm.mp3');

function ringBell(){
    audio.play();
}

function setAlarm(e){
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    
    alarmDate = new Date(alarm.value);                      // input Date
    console.log(`Setting ${alarmDate} Alarm...`);
    now = new Date();                                      // present Date

    let timetoAlarm = alarmDate - now;
    console.log(timetoAlarm);

    if(timetoAlarm>=0)
    {
        setTimeout(() => {
            ringBell();
        }, timetoAlarm);
    }
}