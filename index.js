// document.getElementById('submit').addEventListener('click', converter);

const text = document.getElementById('text');
const celcius = document.getElementById('to-celcius');
const fahrenheit = document.getElementById('to-fahrenheit');
const result = document.getElementById('result');


function converter() {
   
    let temp;
    if (celcius.checked) {
        temp = Number(text.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(2) + " °C";
    } else if (fahrenheit.checked) {
        temp = Number(text.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(2) + " °F";
    } else {
        result.textContent = "Please select a conversion option.";
    }
}
