let expectedDate = new Date("July 3, 2022 00:00:00").getTime();

let countdown = setInterval(calculatingTime, 1000);

function calculatingTime() {
    let dateToday = new Date().getTime();
    let distance = expectedDate - dateToday;
    
    let daysTimer = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hoursTimer = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesTimer = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secondsTimer = Math.floor((distance % (1000 * 60)) / 1000);

    const days = document.querySelector(".day").innerHTML = daysTimer;
    const hours = document.querySelector(".hour").innerHTML = hoursTimer;
    const minutes = document.querySelector(".minutes").innerHTML = minutesTimer;
    const seconds = document.querySelector(".second").innerHTML = secondsTimer;
}