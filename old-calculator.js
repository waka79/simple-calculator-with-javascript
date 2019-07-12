var button = document.querySelector(".container-button");
var layer = document.querySelector("#layer");
var resetLayar = false;
var count = false;
var tempVal = '';
var operator = '';

button.addEventListener("click", function (e) {

    var buttonClick = e.target;
    var buttonValue = buttonClick.innerText;


    if (buttonValue === "C") {
        layer.value = "";
    } else if (buttonValue === "<") {
        layer.value = layer.value.slice(0, -1);
    } else if (buttonValue === "=") {
        if (count === true) {
            layer.value = eval(tempVal + operator + layer.value);
            count = false;
        }
    } else if (buttonClick.classList.contains('operator')) {
        if (count === true) {
            layer.value = eval(tempVal + operator + layer.value);
            count = false;
        }

        tempVal = layer.value;
        operator = buttonValue;
        resetLayar = true;
    } else {
        if (resetLayar === true) {
            layer.value = buttonValue;
            resetLayar = false;
            count = true;
        } else {
            layer.value = layer.value + buttonValue;
        }
    }
});