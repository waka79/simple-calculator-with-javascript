var button = document.querySelector(".container-button");
var layer = document.querySelector("#layer");

button.addEventListener("click", function (e) {

    var buttonClick = e.target;
    var buttonValue = buttonClick.innerText;


    if (buttonValue === "C") {
        layer.value = "";
    } else if (buttonValue === "<") {
        layer.value = layer.value.slice(0, -1);
    } else if (buttonValue === "=") {
        layer.value = eval(layer.value);
    } else {
        layer.value = layer.value + buttonValue;
    }
});