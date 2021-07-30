function getTime(){
    let videos = document.querySelectorAll('#playlist-items');
    videos[videos.length-1].scrollIntoView(true);
    let timeHours = 0;
    let timeStringElement;
    let containerElement;
    for (let video of videos){
        timeStringElement = video.querySelector('span#text');
        if (timeStringElement !== null){
            console.log(timeStringElement.innerText);
            timeHours += getHours(timeStringElement.innerText);
        }
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

window.onload = function(){
    let url = window.location.href;
    if (url.indexOf('list=') !== -1){
        let hours = getTime();
        console.log(hours);
    }
}