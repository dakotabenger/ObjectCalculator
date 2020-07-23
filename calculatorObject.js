//Build Object (objects are collections of key-value pairs) with Methods (values that are functions)

let calculator = {
    "add": function add(num1,num2,cb,num3) {
        //create the solution for adding the first operation
        let addSum = num1 + num2;
        //Check to see if num3 has a value, if it does then call our secondOperation as a callback (cb) and pass in the addSum variable and num3
        if (num3 !== undefined) {
            return cb(addSum, num3);
        } 
        return addSum;
        
    }
    ,
    //The Rest of these methods run the same way
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
// Deconstruct the Object Methods so you can use them easier
let {remainder, multiply, add, subtract, divide, exponent} = calculator;


function doCalculate() {
    
    //Function to Check to see if a given value is actually a number
    let isNum = function(num) {
        return typeof(parseInt(num,10)) === "number";
    }
    // In the Case of an empty value, force the secondOperation to be add and return 0 as the value
    let emptyValue = function() {
        secondOperation = add;
        return 0;
    }
    //Pull Second Operation from HTML
    let secondOperation = document.getElementById("secondOperations").value;
    
    //Determine which operation the second operation is looking for
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
    
//Pull Data from HTML, Turn them into numbers, and pull first operator from  HTML
    let numOne = document.getElementById("num1").value;
    let numTwo = document.getElementById("num2").value;
    let numThree = document.getElementById("num3").value;
    let selectedOperation = document.getElementById("operations").value;
    let firstNum = parseInt(numOne,10);
    let secondNum = parseInt(numTwo,10);
    let thirdNum = parseInt(numThree,10) || emptyValue();
    
 
    //Run a Calculator Function based on the given first operation. Pass in the first two numbers as required values, 
    // the secondOperation function as a "callback" (a function that is used inside of another function), and the thirdNum as a optional value too.
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
