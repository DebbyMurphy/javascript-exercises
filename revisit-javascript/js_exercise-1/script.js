let number = 0;

function plusOne() {
    var count = document.getElementById('number');
    number++;
    count.innerHTML = number;
}

function minusOne() {
    var count = document.getElementById('number');
    number--;
    count.innerHTML = number;
}
