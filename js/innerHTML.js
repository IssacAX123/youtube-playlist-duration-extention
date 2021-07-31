// the code that is inside html to dynamically change speed

let timesObject = {
    "1.00":{
        "days": 2,
        "hours": 14,
        "minutes": 9,
        "seconds": 42,
    },
    "1.25":{
        "days": 2,
        "hours": 1,
        "minutes": 43,
        "seconds": 45,
    },
    "1.50":{
        "days": 1,
        "hours": 17,
        "minutes": 26,
        "seconds": 28,
    }
}
function selectSpeed(speedElement){
    let timestamp = timesObject[speedElement.value];
    let daysWrapper = document.querySelector('#daysWrapper');
    if (timestamp["days"] === 0){
        daysWrapper.style.display = "none";
    }else{
        daysWrapper.style.display = "inline";
        let days = document.querySelector('#daysValue');
        days.innerText = timestamp["days"].toString();
    }
    let hours = document.querySelector('#hoursValue');
    hours.innerText = timestamp["hours"].toString();

    let minutes = document.querySelector('#minutesValue');
    minutes.innerText = timestamp["minutes"].toString();

    let seconds = document.querySelector('#secondsValue');
    seconds.innerText = timestamp["seconds"].toString();
}