document.getElementById("toggleButton").addEventListener("click", toggleImage);

function toggleImage() {
    const img = document.getElementById("boxImage");
    if (img.src.includes("redbox_blue_ribbon")) {
        img.src = "./Opening-Gift-Box_Bear.gif";
    } else {
        img.src = "./redbox_blue_ribbon.jpg";
    }
}
