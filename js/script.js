function getTime(){
    let videos = document.querySelectorAll('#playlist-items');
    let timeHours = 0;
    let timeStringElement;
    for (let video of videos){
        timeStringElement = video.querySelector('span.style-scope.ytd-thumbnail-overlay-time-status-renderer');
        timeHours += getHours(timeStringElement.innerText);
    }
    return timeHours;
}
function getHours(time){
    let timeList = time.split(':').reverse();
    let timeHours = 0.0;
    let multiplier = 1/3600;
    for (let timeValue of timeList){
        timeHours += timeValue*multiplier;
        multiplier *= 60;
    }
    return timeHours;
}

function convertTimeToObject(hours){
    let timeObject = {
        "days": 0,
        "hours": 0,
        "minutes": 0,
        "seconds": 0
    }
    timeObject["days"] = Math.floor(hours / 24)
    timeObject["hours"] = Math.floor(hours - timeObject["days"]*24)
    timeObject["minutes"] = Math.floor((hours - timeObject["days"]*24 - timeObject["hours"])*60)
    timeObject["seconds"] = Math.floor(((hours - timeObject["days"]*24 - timeObject["hours"])*60 -timeObject["minutes"])*60)
    return timeObject;
}

function displayResult()
function run(){
    let url = window.location.href;
    if (url.indexOf('list=') !== -1) {
        let hours100 = getTime();
        let hours025 = hours100 / 0.25;
        let hours050= hours100 / 0.50;
        let hours075 = hours100 / 0.75;
        let hours125 = hours100 / 1.25;
        let hours150= hours100 / 1.50;
        let hours175 = hours100 / 1.75;
        let hours200 = hours100 / 2.0;
        let time025 = convertTimeToObject(hours025);
        let time050 = convertTimeToObject(hours050);
        let time075 = convertTimeToObject(hours075);
        let time100 = convertTimeToObject(hours100);
        let time125 = convertTimeToObject(hours125);
        let time150 = convertTimeToObject(hours150);
        let time175 = convertTimeToObject(hours175);
        let time200 = convertTimeToObject(hours200);

    }
}

run()

