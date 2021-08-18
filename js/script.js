function pin() {
    const createPin = Math.round(Math.random() * 10000);
    const pinString = createPin + '';
    if (pinString.length == 4) {
        return createPin;
    } else {
        return pin();
    }
};

function generatePin() {
    const getpin = pin();
    const pinInput = document.getElementById('pin_input');
    pinInput.value = getpin;
};

document.getElementById('calc-key').addEventListener('click', function (event) {
    const calcNumber = event.target.innerText;
    const input = document.getElementById('display');
    if (isNaN(calcNumber)) {
        if (calcNumber == "C") {
            input.value = '';
        }
    } else {
        const inputValue = input.value;
        const newNumber = inputValue + calcNumber;
        input.value = newNumber;
    }
});

function veryfyPin() {
    const pinInput = document.getElementById('pin_input').value;
    const display = document.getElementById('display').value;
    const match = document.getElementById('matched');
    const unmatched = document.getElementById('unmatched');
    if (pinInput == display) {
        match.style.display = 'block';
        unmatched.style.display = 'none';
    } else {
        unmatched.style.display = 'block';
        match.style.display = 'none';
    }
};