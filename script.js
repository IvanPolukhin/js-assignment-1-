let string = document.getElementById('stringInput');

function numberChange(value) {
    string.value = +string.value + value;
}

function numberReset() {
    string.value = 0;
}