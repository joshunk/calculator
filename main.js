const numberButtons = document.querySelectorAll('.numbers')
const operatorButtons = document.querySelectorAll('.operators')
const equalsButton = document.querySelector('.equals')
const clearButton = document.querySelector('#clear')
const display = document.querySelector('#display')
let firstOperand = ''
let secondOperand = ''

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


operatorButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    secondOperand = firstOperand
    if (firstOperand == '')
      return
    firstOperand = ''
    console.log(`First operand is now ${firstOperand}`)
    console.log(`Second operand is now ${secondOperand}`)
    displayClear

  })
})


// Defines basic operations
const add = function(arg1, arg2) {
	return(arg1 + arg2 );
};

const subtract = function(arg1, arg2) {
  return(arg1 - arg2)
	
};

const multiply = function(arg1, arg2) {
  return(arg1 * arg2)
};

const divide = function(arg1, arg2) {
  return(arg1 / arg2)
};

// Main logic for operations and inputs
const operate = function(operator, arg1, arg2){
    let result;
    if (operator === add){
        result = add(arg1, arg2);
        return result
    }
    if (operator === subtract){
        result = subtract(arg1, arg2);
        return result
    }
    if (operator === multiply){
        result = multiply(arg1, arg2);
        return result
    }
    if (operator === divide){
        result = divide(arg1, arg2);
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

