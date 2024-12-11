
const box = document.getElementById("box");
let position = 0;

function moveBox() {
    if (position < 2000) {
        position += 2;
        box.style.left = position + "px";
        requestAnimationFrame(moveBox);
    }
    box.style.background = `rgb(${position}, ${100}, ${200})`;
}

moveBox();