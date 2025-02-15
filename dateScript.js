// day counter:
const startDate = new Date('2024-04-08T21:08:00'); 
const oneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * ms
const oneHour = 60 * 60 * 1000; // mins * secs * ms
const oneMinute = 60 * 1000; // secs * ms
const oneSecond = 1000; // ms

function addZero(number) {
    return number < 10 ? `0${number}` : number; 
}
function updateCounter() {
    const endDate = new Date(); 
    const diffTime = endDate - startDate;
    const diffDays = Math.floor(diffTime / oneDay);
    const diffHours = Math.floor(diffTime % oneDay / oneHour);
    const diffMinute = Math.floor(diffTime % oneHour / oneMinute);
    const diffSecond = Math.floor(diffTime % oneMinute / oneSecond);

    const formattedDays = addZero(diffDays);
    const formattedHours = addZero(diffHours);
    const formattedMinutes = addZero(diffMinute);
    const formattedSeconds = addZero(diffSecond);

    document.getElementById('result').textContent = `${formattedDays} : ${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
}

setInterval(updateCounter, 1000); // update every 1000 ms
