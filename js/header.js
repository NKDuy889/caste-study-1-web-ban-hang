let image = ["../assets/adorable-cat.jpg"
    , "../assets/cat-looking-at-butterfly-digital-art-w5.jpg", "../assets/Cute-Cat-Wallpapers-Full-HD-Free-Download-Wallpaperxyz.com-4.jpg"];


let interval = setInterval(next, 2000);
let index = 0;

function currentSlide(nextIndex) {
    index = nextIndex;
    nextSlide();
}

function next() {
    if (index < image.length - 1) {
        index++;
    } else {
        index = 0;
    }
    nextSlide();
}

function nextSlide() {
    for (let i = 0; i < image.length; i++) {
        if (index != i) {
            document.getElementById('dot' + i).className = 'dot';
        } else {
            document.getElementById('dot' + i).className = 'dot dot-active';
        }
    }
    document.getElementById('carousel').style.background = "url('" + image[index] + "')";
}


