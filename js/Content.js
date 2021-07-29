function getTime(){
    let videos = document.querySelectorAll('#playlist-items');

    let timeMinutes = 0;
    for (let video of videos){
        let timeString = video.querySelector('.td-thumbnail-overlay-time-status-renderer').textContent;
    }
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



let url = window.location.href;
if (url.indexOf('list=') !== -1){

}