let currentIndex = 0;
const images = [
    "pix3/birds01.png",
    "pix3/birds02.png",
    "pix3/birds03.png",
    "pix3/birds04.png",
    "pix3/birds05.png"
];

function showbig(src) {
    document.getElementById("bigpic").src = src;
}

function calcslide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showbig(images[currentIndex]);
}
