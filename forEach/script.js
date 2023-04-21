//**************************************************************************************
//Callback Functions Revisited

function add(x,y) {
    return x + y;
}
function subtract(x,y) {
    return x - y;
}
function multiply(x,y) {
    return x * y;
}
function divide(x,y) {
    return x / y;
}

function power(x,y){
    return x**y;
}

// put all the functions in an array
//NOTE: we don't use the parens in the array, since we're just storing the functions, not calling them
const mathFuncs = [add, subtract, multiply, divide, power];

//create a new function that has mathFuncs as a call back (the 3rd parameter)
function doMath(a,b,mathFuncs) {
    return mathFuncs(a,b);
}

console.log(doMath(30,35,add));

//create a function that calculates all the functions in mathFunc, with the same 2 integers
function doAllMath(a,b,mathfuncs) {
    for(let func of mathFuncs) {
        console.log(func(a,b));
    }
}

//Takeway: we're writing functions that take in a callback function

//**************************************************************************************
// Using forEach passing in a function to an array

const colors = ['teal', 'cyan', 'peach', 'purple'];

function yell(val,i) {
    const caps = val.toUpperCase();
    console.log(`At index ${i}, ${caps}`);
}

colors.forEach(yell);
//------------------------------------------------------------------------------------------
// Adding all the prices in the array 'prices'
//Here forEach will 1) add price[0] to total, then updating total, 2) add price[1] to total, then updating & etc

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0; //Note: we're using 'let' instead of const bc we want the 'total' to change/update
prices.forEach(function(price) {   //Note: 'function' is an anonymous function, w/ and newly created apt name 'price
    total += price;
});

console.log(total);


//for of version of adding up the prices
//this version is cleaner and easier to understand
const prices2 = [30.99, 19.99, 2.5, 99.0];
let total2 = 0;
for(let price2 of prices2) {
    total2 += price2
}
console.log(total2);


//**************************************************************************************
//Writing forEach Exercise

const milesInApril = [2,2,2,2,2,2,2,2,2.27,5]
let total3 = 0;
let daysSkipped = 1;
milesInApril.forEach(function(milesPerDay){
    total3 += milesPerDay
})

console.log(`As of April ${(milesInApril.length) + daysSkipped}, you ran ${total3} miles.`);

//------------------------------------------------------------------------------------------
//Writing forEach Exercise 2
//Parameters 1) Loops through an array 2) Runs a callback function 3) returns 'undefined'
//we can write out 'return undefined' explicitly, but if we don't write a 'return' line,
//the function will return 'undefined' by default

function forEach(arr, callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i],i);
    }
}
forEach(colors, function(color,i){ //Note the parameters 'color' is newly a defined apt variable, i = index
    console.log(color.toUpperCase(), 'at index of:', i); //Note: make sure to use () after .toUpperCase to execute
})

//rewriting line 98
colors.forEach(function(color,i){ //Note: only 2 paramenters: single item in the array 'color' & index
    console.log(color.toUpperCase(), 'at index of:', i);
})

//Remember, how forEach works, you pass in the index to the callback-- line 95: callback(arr[i],i);
