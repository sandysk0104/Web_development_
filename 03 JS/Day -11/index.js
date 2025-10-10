// scope, clouser,HOF(high order function)

//scope
//global scope -accessble to anywhere
//function level scope-accessible only within funtion
//block level scope ->accessible only within block
// all about true wrt let and const but when it come to var all will be respected except 
//block 

//block level
// let a=10;

// if(true)
// {
//     console.log(a);
//     var b=12;
//     let c=13;
// }
// console.log(b) //because of var
// // console.log(c)//error


// let global=20;
// function greeting()
// {

//     function greet()
//     {
//         let global=90
//         console.log(global) //90 

//     }

//     greet();
    
// }
// greeting()

//lets talk about clouser-----------------------
// function counter_incre(){
//     let count=0;

//     function increement(){
//         count++;
//         return count;
//     }

//     return increement;
// }

// let counter=counter_incre()
// // console.log(count) //error
// console.log(counter());
// console.log(counter());
// console.log(counter());

//Here clouser means when funtions scope is finished then if their variable going to use 
//again then that variable stored in stack is going stored heap so that even functions 
// is being distoryed still there variable be accessable .


//Real world example of clouser in which we make balance to be private------
function banking_system(){
    let balance=500;
    const user={ 

        deposit:function(amount)
        {
            if(typeof amount=="number" && amount>0)
            {
                balance+=amount;
                return balance;
            }

        },

        withdraw:function(amount)
        {
            if(typeof amount=="number"&&amount<=balance)
            {
                balance-=amount;
                return balance;
            }
        },

        balance_inquary:function(){
            return balance;
        }

    }
    return user; //instead directly return 
}

// console.log(balance)// give error
let customer=banking_system()
console.log(customer.deposit(20))
console.log(customer.withdraw(500))

// Now balance variable become private means now developer do not change the balace variable 
//directly due to this accidental event can not be happen now 


//HOF(Higher order function)
// but nothing but function is being passed as argument thourgh another function
//or function is being return through a funtion


function double(value){

    return function execute(num){
        return num*value; //
    }
    
}
const n = double(20)(5);
console.log(n);
// here also clouser property is being used. means "value" is private here or we can say 
// shifted to heap from stack for future use









