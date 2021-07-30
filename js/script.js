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

function displayResult(timesObject){
    let playlist = document.querySelector("#playlist");
    let div = createDiv();
    let select = createSelect();
    let p = createTextPlaceholder();
    div.appendChild(p);
    div.appendChild(select);
    playlist.appendChild(div);
}

function createDiv(){
    let div = document.createElement("div");
    div.classList.add("style-scope");
    div.classList.add("timer");
    div.classList.add("ytd-playlist-panel-renderer");
    div.style = "width: 100%; background-color: #ECECEC"
}

function createSelect(){
    let speeds = ["0.25", "0.50", "0.75", "1.00", "1.25", "1.50", "1.75", "2.00"];
    let  select = document.createElement("select");
    select.name = "speed";
    select.id = "speedChange";
    select.style = "margin: 1em;"
    let option;
    for (const speed of speeds)
    {
        option = document.createElement("option");
        option.value = speed;
        option.text = speed;
        if (speed === "1.00"){
            option.selected = true;
        }
        select.appendChild(option);
    }
    return select;
}

function createTextPlaceholder(){
    let p = document.createElement('p');
    p.innerHTML = "<span id='daysWrapper'><span id='daysValue'></span> Days</span>, <span id='hoursValue'></span> Hours, <span id='minutesValue'></span> Minutes, <span id='secondsValue'></span> Seconds";
    return p;
}

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

