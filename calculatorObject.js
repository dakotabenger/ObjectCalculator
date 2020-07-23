let calculator = {
    "add": function add(num1,num2,cb,num3) {
        let addSum = num1 + num2;
        if (num3 !== undefined) {
            return cb(addSum, num3);
        } 
        return addSum;
        
    }
    ,
    "subtract": function subtract(num1,num2,cb,num3) {
        let subtractValue = num1 - num2;
        if (num3 !== undefined) {
           return cb(subtractValue,num3)
        } 
        return subtractValue;
        
    },
    "divide": function divide(num1,num2,cb,num3) {
        let divided = num1 / num2
        if (num3 !== undefined) {
            return cb(divided,num3);
        } 
          return divided;
        
    },
    "multiply": function multiply(num1,num2, cb, num3) {
        let product = num1 * num2
        if (num3 !== undefined) {
           return cb(product,num3);
        } 
            return product;
        
    },
    "remainder": function remainder(num,modNum, cb, num3) {
        let mod = num % modNum;
        if (num3 !== undefined) {
           return cb(mod,num3)
        } 
            return mod;
            
    },
    "exponent": function (base, exponent, cb, num3) {
        let power = Math.pow(base,exponent);
        if (num3 !== undefined) {
           return cb(power,num3);
        } 
            return power;
        
    }
}

let {remainder, multiply, add, subtract, divide, exponent} = calculator;


function doCalculate() {
    
    
    let isNum = function(num) {
        return typeof(parseInt(num,10)) === "number";
    }
    
    let emptyValue = function() {
        secondOperation = add;
        return 0;
    }
    
    let secondOperation = document.getElementById("secondOperations").value;
    
    //refactor for switch?
    switch (secondOperation) {
    case "Add":
        secondOperation = add;
        break;
    case "Subtract":
        secondOperation = subtract;
        break;
    case "Divide":
        secondOperation = divide;
        break;
    case "Multiply":
        secondOperation = multiply;
        break;
    case "Remainder":        
        secondOperation = remainder;
        break;
    case "Exponential":
        secondOperation = exponent;
        break;
    default:
        secondOperation = secondOperation;
    }
    

    let numOne = document.getElementById("num1").value;
    let numTwo = document.getElementById("num2").value;
    let numThree = document.getElementById("num3").value;
    let selectedOperation = document.getElementById("operations").value;
    let firstNum = parseInt(numOne,10);
    let secondNum = parseInt(numTwo,10);
    let thirdNum = parseInt(numThree,10) || emptyValue();
    console.log(thirdNum)

    
 
    //refactor for switch?
    if (selectedOperation === "Add") {
        document.getElementById("results").innerHTML = "Result: " + add(firstNum,secondNum,secondOperation,thirdNum);
    } else if (selectedOperation === "Subtract") {
        document.getElementById("results").innerHTML = "Result: " + subtract(firstNum,secondNum,secondOperation,thirdNum);
    } else if (selectedOperation === "Divide") {
        document.getElementById("results").innerHTML = "Result: " + divide(firstNum,secondNum,secondOperation,thirdNum);
    } else if (selectedOperation === "Multiply") {
        document.getElementById("results").innerHTML = "Result: " + multiply(firstNum,secondNum,secondOperation,thirdNum);
    } else if (selectedOperation === "Remainder") {
        document.getElementById("results").innerHTML = "Result: " + remainder(firstNum,secondNum,secondOperation,thirdNum);
    } else if (selectedOperation === "Exponential") {
        document.getElementById("results").innerHTML = "Result: " + exponent(firstNum,secondNum,secondOperation,thirdNum);
    }









}
