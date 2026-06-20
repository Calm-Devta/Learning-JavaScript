const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === 0 || height < 0 || isNaN(height)){
        result.innerHTML = "Please give a valid height";
        return;
    }

    if(weight === 0 || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please give a valid weight";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.style.color = "blue";
    result.innerHTML = `<b>Your BMI is ${bmi}</b>`;
});