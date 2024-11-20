const redBox = document.getElementById("first");
redBox.addEventListener("click", blueBoxToGreen);

const blueBox = document.getElementById("second");
blueBox.addEventListener("click", redBoxToYellow);

const button = document.getElementById("myButton")
button.addEventListener("click", reset);

function blueBoxToGreen() {
    // When you click on red box, 
    // the blue box color changes to green
    document.getElementById("second").style.backgroundColor = "green";
};

function redBoxToYellow(){
    // When you click on blue box, 
    // the red box color changes to yellow
    document.getElementById("first").style.backgroundColor = "yellow";
}

function reset() {
    // When you click on the button, 
    // the boxes show the original colors of red and blue.
    document.getElementById("first").style.backgroundColor = "red";
    document.getElementById("second").style.backgroundColor = "blue";
}