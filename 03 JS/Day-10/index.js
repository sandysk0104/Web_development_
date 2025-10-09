//hoisting in JS

var a=10;
var b=20;

function addNum(num1,num2)
{
    var sum=num1+num2;
    return sum;
}

var sum1=addNum(a,b)
var sum2=addNum(2,9);
console.log(sum1,sum2);

//for running js code =>Execution context setup
//means for running the code we have 2 phases
//1. Memory allocation
//2. then code execution

// And the central on which it is happening is called GEC(global execution context)
//for remembering you can think like main-function calling other funtion

//for var, during 1st phase varaible is assigned to undefined, and for let and const variable
// assigned to <uninitilized> i.e. temporal dead zone then in the 2nd phase all variable value
// replaced by actual value
//During 1st phase for function whole code inside the fuction is pasted. Then again 
// during calling that function the whole code the fuction is set to 2 phase before returing 
//any thing


