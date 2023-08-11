let numA = 5;
let numB = 5;


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
// add(5,5)
// subtract(5,5)
// multiply(5,5)
// divide(5,5)

// console.log(add(numA,numB))
// console.log(subtract(numA,numB))
// console.log(multiply(numA,numB))
// console.log(divide(numA,numB))

