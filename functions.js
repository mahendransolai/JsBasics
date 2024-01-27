//1. Function declrations:

function add(a,b){
    return a+b;
}


const sum = add(4,7);
console.log(sum);


function print(){
    console.log("This is Mahen ")
}

print()



// 2. Function Expression:Annonymous Function 

const multiply = function(x,y){
    return(x*y);
}

const mul = multiply(5,6);
console.log(mul);

//Arrow function 

const divide = (t1,t2) => (t1/t2);
const div = divide(50,5);
console.log(div);


// 4. Function Constructor:

const substract = new Function('a','b','return a-b;')

const subs = substract(10,2);
console.log(subs);

//5. IIFE(Immediately Invoked Function Expression)
(function(){
    console.log("Javascript Practise working ");
})();

// 6. Generator Functions:
// function* and yield keyword 
function* generateNumbersSequence(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;

}

const generator = generateNumbersSequence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);


// 7. Annoymous function:
// no specific name 

const numbers= [1,2,3,4,5];
const sqNumbers = numbers.map((e)=>{
    return e*e;
})

console.log(sqNumbers);

//8. Recurssive function

function factorial(n){
    if(n===1 || n===0){
        return 1;
    }
    else {
        return n * factorial(n-1);
    }

}

console.log(factorial(4));

//9. Higher Order Function
//* one or more argument as a function 

function addition(a,b){
    return a +b
}

function multiplication(a,b){
    return a +b
}

function operate(funcName, a, b){
    return funcName(a,b)
}

const s = operate(addition, 5,5);

console.log(s);

const t = operate(multiplication, 5,5);

console.log(t);