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
    createScript(timesObject);
    let playlist = document.querySelector("#secondary-inner");
    let related = playlist.querySelector("#related");
    let div = createDiv();
    let select = createSelect();
    let p = createTextPlaceholder();
    div.appendChild(select);
    div.appendChild(p);
    playlist.insertBefore(div, related);
    let event = new Event('change');
    select.dispatchEvent(event)
}

function createScript(timesObject){
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "let timesObject = " + JSON.stringify(timesObject) + "\nfunction selectSpeed(speedElement){\n" +
        "    let timestamp = timesObject[speedElement.value];\n" +
        "    let daysWrapper = document.querySelector('#daysWrapper');\n" +
        "    if (timestamp[\"days\"] === 0){\n" +
        "        daysWrapper.style.display = \"none\";\n" +
        "    }else{\n" +
        "        daysWrapper.style.display = \"inline\";\n" +
        "        let days = document.querySelector('#daysValue');\n" +
        "        days.innerText = timestamp[\"days\"].toString();\n" +
        "    }\n" +
        "    let hours = document.querySelector('#hoursValue');\n" +
        "    hours.innerText = timestamp[\"hours\"].toString();\n" +
        "\n" +
        "    let minutes = document.querySelector('#minutesValue');\n" +
        "    minutes.innerText = timestamp[\"minutes\"].toString();\n" +
        "\n" +
        "    let seconds = document.querySelector('#secondsValue');\n" +
        "    seconds.innerText = timestamp[\"seconds\"].toString();\n" +
        "}";
    document.head.appendChild(script);
}
function createDiv(){
    let div = document.createElement("div");
    div.classList.add("timer");
    div.classList.add("style-scope");
    div.classList.add("ytd-watch-flexy");
    div.style = "width: 100%; background-color: #ECECEC; margin: 0 0 1.5em 0; border: 0.5px #FF0000 solid;"
    return div
}

function createSelect(){
    let speeds = ["0.25", "0.50", "0.75", "1.00", "1.25", "1.50", "1.75", "2.00"];
    let  select = document.createElement("select");
    select.setAttribute("onchange", "selectSpeed(this)");
    select.name = "speed";
    select.id = "speedChange";
    select.style = "margin: 1em; margin-top: 0.5em, margin-bottom:0.5em; border: none; background-color: #ECECEC; font-size: 1.2em; font-weight: number; color: #FF0000; text-align: center;"
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
    select.style.display = "inline"
    return select;
}

function createTextPlaceholder(){
    let p = document.createElement('p');
    p.innerHTML = "<span id='daysWrapper'><span id='daysValue'></span> Days,</span> <span id='hoursValue'></span> Hours, <span id='minutesValue'></span> Minutes, <span id='secondsValue'></span> Seconds";
    p.style = "margin: 1em; margin-top: 0.5em; margin-bottom:0.5em; text-align: center;"
    p.style.display = "inline";
    p.style.textAlign = "center";
    p.style.fontSize = "1.4em"
    p.style.fontFamily = "Roboto, Arial, sans-serif"
    let spans = p.querySelectorAll("span");
    for(span of spans){
        if (span.id !== "daysWrapper"){
            span.style.fontSize = "1.5em";
            span.style.fontWeight = "number";
        }
    }
    return p;
}

function getTimesObject(){
    let hours100 = getTime();
    let hours025 = hours100 / 0.25;
    let hours050= hours100 / 0.50;
    let hours075 = hours100 / 0.75;
    let hours125 = hours100 / 1.25;
    let hours150= hours100 / 1.50;
    let hours175 = hours100 / 1.75;
    let hours200 = hours100 / 2.0;
    let timesObject = {
        "0.25": convertTimeToObject(hours025),
        "0.50": convertTimeToObject(hours050),
        "0.75": convertTimeToObject(hours075),
        "1.00": convertTimeToObject(hours100),
        "1.25": convertTimeToObject(hours125),
        "1.50": convertTimeToObject(hours150),
        "1.75": convertTimeToObject(hours175),
        "2.00": convertTimeToObject(hours200),
    }
    return timesObject;
}
function run(){
    let url = window.location.href;
    if (url.indexOf('&list=') !== -1) {
        timesObject = getTimesObject();
        displayResult(timesObject);
    }
}

run()

