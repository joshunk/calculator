const numberButtons = document.querySelectorAll('.numbers')
const operatorButtons = document.querySelectorAll('.operators')
const equalsButton = document.querySelector('.equals')
const clearButton = document.querySelector('#clear')
const display = document.querySelector('#display')
let currentOperand = ''
let previousOperand = ''
let result = '0'
let operator = ''

function appendNumber(number){
  currentOperand += number
}

function updateDisplay(){
  currentOperand.innerText = currentOperand;
}

function displayClear(){
  document.getElementById('display').value = "";
}

//add numbers to the currentOperand
numberButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    appendNumber(button.innerText)
    updateDisplay
    console.log(`Current operand is now ${currentOperand}`)
    console.log(`Previous operand is now ${previousOperand}`)
  })
})

// Operator logic
operatorButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    operator = button.innerHTML
    console.log(`Operator is now ${operator}`)
    previousOperand = currentOperand
    if (currentOperand == '')
      return
    currentOperand = ''
    displayClear()
    console.log(`Current operand is now ${currentOperand}`)
    console.log(`Previous operand is now ${previousOperand}`)

  })
})

// Equals logic
equalsButton.addEventListener('click', () =>{
  console.log('Equal Button Clicked')
  operate(operator, currentOperand, previousOperand);
  document.getElementById('display').value = result;
})

// Defines basic operations
const add = function(previousOperand, currentOperand) {
	return(previousOperand + currentOperand );
};

const subtract = function(previousOperand, currentOperand) {
  return(previousOperand - currentOperand)
};

const multiply = function(previousOperand, currentOperand) {
  return(previousOperand * currentOperand)
};

const divide = function(previousOperand, currentOperand) {
  return(previousOperand / currentOperand)
};

// Main logic for operations and inputs
const operate = function(operator, currentOperand, previousOperand){
    previousOperand = parseFloat(previousOperand);
    currentOperand = parseFloat(currentOperand);
    if (operator === '+'){
        result = add(previousOperand, currentOperand);
        // return result
    }
    if (operator === '-'){
        result = subtract(previousOperand, currentOperand);
        // return result
    }
    if (operator === '*'){
        result = multiply(previousOperand, currentOperand);
        // return result
    }
    if (operator === '/'){
        result = divide(previousOperand, currentOperand);
        // return result
    }
    console.log(`Result: ${result}`);
    console.log(`Current operand is now ${currentOperand}`);
    console.log(`Previous operand is now ${previousOperand}`);
  }

// Event listenener to add button content to text input
document.querySelector('#buttons')
  .addEventListener('click', event => 
  {
    let target = event.target;
    if (target.matches('button'))
    {
      let value = target.innerHTML;

      document.querySelector('#display').value += value
    }
  })

  
  //Clear the input field
  document.getElementById('clear').addEventListener('click', clearField)
  
  function clearField(){
    document.getElementById('display').value = "";
    currentOperand = ''
    previousOperand = ''
    updateDisplay
  }
  

// add(5,5)
// subtract(5,5)
// multiply(5,5)
// divide(5,5)

// console.log(add(numA,numB))
// console.log(subtract(numA,numB))
// console.log(multiply(numA,numB))
// console.log(divide(numA,numB))

