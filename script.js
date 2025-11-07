const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');
// Perform calculation
const calculate = {
  '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
  '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
  '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
  '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
  '=': (firstNumber, secondNumber) => secondNumber,
};

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

// Handle number input
function sendNumberValue(number) {
  if (awaitingNextValue) {
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
  } else {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
  }
}

// Handle decimal
function addDecimal() {
  if (awaitingNextValue) return; // prevent adding decimal before number
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}


// Handle operator input
function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);

  if (operatorValue && awaitingNextValue) {
    operatorValue = operator;
    return;
  }

  if (!firstValue) {
    firstValue = currentValue;
  } else {
   
     const calculation = calculate[operatorValue](firstValue, currentValue);
    console.log('calculation',calculation);
     calculatorDisplay.textContent = calculation;
    firstValue = calculation;
  
  }

  awaitingNextValue = true;
  operatorValue = operator;

}



// Reset calculator
function resetAll() {
  firstValue = 0;
  operatorValue = '';
  awaitingNextValue = false;
  calculatorDisplay.textContent = '0';
}
// Add event listeners for numbers, operators, and decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', addDecimal);
  }
});
clearBtn.addEventListener('click', resetAll);
