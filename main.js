const numberButtons = document.querySelectorAll('.numbers')
const operatorButtons = document.querySelectorAll('.operators')
const equalsButton = document.querySelector('.equals')
const clearButton = document.querySelector('#clear')
const display = document.querySelector('#display')
let firstOperand = ''
let secondOperand = ''
let result = '0'
let operator = ''

function appendNumber(number){
  firstOperand += number
}

function updateDisplay(){
  firstOperand.innerText = firstOperand;
}

function displayClear(){
  document.getElementById('display').value = "";
}

//add numbers to the firstOperand
numberButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    appendNumber(button.innerText)
    updateDisplay
    console.log(`First operand is now ${firstOperand}`)
    console.log(`Second operand is now ${secondOperand}`)
  })
})

// Operator logic
operatorButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    operator = button.innerHTML
    console.log(`Operator is now ${operator}`)
    secondOperand = firstOperand
    if (firstOperand == '')
      return
    firstOperand = ''
    displayClear()
    console.log(`First operand is now ${firstOperand}`)
    console.log(`Second operand is now ${secondOperand}`)

  })
})

// Equals logic
equalsButton.addEventListener('click', () =>{
  console.log('Equal Button Clicked')
  operate(operator, firstOperand, secondOperand);
  document.getElementById('display').value = result;
})

// Defines basic operations
const add = function(firstOperand, secondOperand) {
	return(firstOperand + secondOperand );
};

const subtract = function(firstOperand, secondOperand) {
  return(firstOperand - secondOperand)
};

const multiply = function(firstOperand, secondOperand) {
  return(firstOperand * secondOperand)
};

const divide = function(firstOperand, secondOperand) {
  return(firstOperand / secondOperand)
};

// Main logic for operations and inputs
const operate = function(operator, firstOperand, secondOperand){
    num1 = parseFloat(firstOperand);
    num2 = parseFloat(secondOperand);
    if (operator === '+'){
        result = add(num1, num2);
        return result
    }
    if (operator === '-'){
        result = subtract(num1, num2);
        return result
    }
    if (operator === '*'){
        result = multiply(num1, num2);
        return result
    }
    if (operator === '/'){
        result = divide(num1, num2);
        return result
    }
    else{
        console.log("It's broken.")
    }
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
    firstOperand = ''
    secondOperand = ''
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

