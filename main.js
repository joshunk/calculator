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
    
    
    // First instance    
    if (previousOperand === ''){
      console.log("OINK!")
      previousOperand = currentOperand;
      currentOperand = '';
    }
    
    // //Check for previous result
    // if (result > 0){
    //   console.log("MOO!")
    //   previousOperand = result;
    // }
    
    //This should run if there's a current operand and an operator already selected...
    if (currentOperand > 0 && previousOperand > 0 && operator != ''){
      console.log("QUACK!")
      operate(operator, currentOperand, previousOperand);
      document.getElementById('display').value = result;
    }
    
    operator = button.innerHTML

    //Only assign the value once, so that multiple operator clicks don't break it.
    // if (currentOperand > 0 && previousOperand == 0){
    //   previousOperand = currentOperand
    // }

    console.log(`Operator is now ${operator}`)
    // currentOperand = ''
    // if (currentOperand == '')
    //   return
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
const operate = function(operator, num1, num2){
    num2 = parseFloat(num2);
    num1 = parseFloat(num1);
    if (operator === '+'){
        result = add(num2, num1);
        // return result
    }
    if (operator === '-'){
        result = subtract(num2, num1);
        // return result
    }
    if (operator === '*'){
        result = multiply(num2, num1);
        // return result
    }
    if (operator === '/' && num1 > 0){
        result = divide(num2, num1);
        // return result
    }
    if (operator === '/' && num1 == 0){
      alert("You can't divide by 0! The universe will implode!")
      return;
    };
    result = parseFloat(result.toFixed(3));
    previousOperand = result;
    currentOperand = '';
    document.querySelector('#display').value = previousOperand;
    console.log(`Result: ${result}`);
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
    operator = ''
    result = ''
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

