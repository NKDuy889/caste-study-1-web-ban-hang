var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function buy() {
    let order = document.getElementById('order').innerText;
    alert('Đặt hàng thành công. Chúng tôi sẽ liên lạc với bạn ngay bây giờ.')
}

var modal1 = document.getElementById("myModal");

var btn1 = document.getElementById("myBtn1");

var span = document.getElementsByClassName("close")[0];

btn1.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}


var modal2 = document.getElementById("myModal");

var btn2 = document.getElementById("myBtn2");

var span = document.getElementsByClassName("close")[0];

btn2.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


