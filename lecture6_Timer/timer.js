// the day we're counting to
let countDownDate = new Date("Aug 7, 2025").getTime();

// execute the function, update every 1 sec
setInterval("runClock()",1000);

function runClock() {
    // Get today's date and time
    let now = new Date().getTime();

    let distance = countDownDate - now;

    // Display val
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

    if (distance < 0)
    {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }


}