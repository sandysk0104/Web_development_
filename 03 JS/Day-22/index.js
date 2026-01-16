// this, call, apply and bind---------------

//this: class object method (more precisely means whom it is referencing)
// **this** means actually a reference to whom it is pointing to 
// strict mode vs non-strict mode
//Global object: As global object is not a part of javascript so every platform define own 
//global object e.g. for window or chrome browser **window** , for nodejs platform **global** is global
//object.
// There is comman command for getting a global object on any platform using **globalThis**
// **this** keyword(means in global scope) point to empty object **{}** in nodejs and to **window** in the browser.
//In non strict mode **this** keyword inside the function point to **global object** 
// In strict mode this keyword word inside the function point to **undefined**

// **call**, **apply**, **bind**: this point to invoking object
// In class constructor **this** point to newly created object

// 'use strict'

// // var a=10
// // //  b=20 // now will get the error due to strict mode
// // var b=20
// // console.log(a,b)

// // function ab(name1,name2){
// //     console.log(name1,name2);
// // }

// // ab("Rohit", "Mohit");
// // console.log(window) // give error on nodejs envirnment
// console.log(global) // for nodejs envirnment
// // console.log(globalThis) // **universal command**


//Learn about this keyword-----------------

// 'use strict'
// console.log(this) //**{}** in Nodejs and **window**(global object) in the browser

// function greet(){
//     console.log(`Hi, ${this.name}`)
// }

// function increement(age,name)
// {
//     this.age+=age;
//     this.name=name;
//     console.log(this.age);
//     console.log(this.name);
// }
// const user={
//     name:"Rohit",
//     age:30
// }
// const user1={
//     name:"Mohit",
//     age:20
// }

// greet.call(user)// now this point to user
// greet.call(user1)//now this point to user1

// increement.call(user,5,"Mohan")
// increement.apply(user,[5,"Mohan"])
// const incr=increement.bind(user,5,"Mohan")
// console.log(incr) //output :[Function: bound increement] means incr referencing to 
// increement method
// incr() // now used as a increement funtion just like using **call** and **apply** methods

//



// 'use strict'
// function greet(){
//     console.log(this)  // undefined due to strict mode else it is point to global object
// }
// greet();


//class 
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

 
// const p1= new Person("Rohit",10);
// // this ={name:"Rohit",age:10} means now this keyword point to p1 means class object
// console.log(p1)


//Arrow function: Arrow function does not have this keyword,means lexical envirnment scope(means taking **this** 
//from outside from own scope)
//  'use strict'
//  console.log(this)

//  const greet=()=>{
    
//     console.log(this); //{} due to lexical envirnment scope
// }

// function meet(){
//     console.log(this) //undefined 
// }
// greet()
// meet();


// Now discuss, if we donot use arrow function then what we have to do ------------

// 'use strict'
// const user={
//     name:"Rohit",
//     greet: function(){
//         console.log(this) // Rohit
//         const that=this;
//         function meet()
//         {
//             console.log(that.name); //Rohit

//         }
//         meet();
//     }
// }

// user.greet();


// Now, example using arrow function unlike above in which we use another variable for storing **this**
// keyword means same reference to where **this** is pointing

// const stopwatch={
//     timer:0,
//     time:function(){
//         setInterval(()=>{
//             this.timer++;
//             console.log(this.timer);

//         },1000)
//     }
// }
// stopwatch.time();
//means this keyword inside a arrow funtion pointing to stopwatch unlike using normal
// function becuase due to lexical evirnment scope


//Now wrt object---------------
// console.log(this)

// const user={
//     name:"Rohit",
//     greet:()=>{
//         console.log(this) //{} because inside user it is only context not actually a scope
//     }
// }

// user.greet()

//Note:-
//'use strict' this statement do not fear about it because it for out benifit means using this statemet('use strict')
//  we can eliminate the ambiguity e.g. inside function if we donot use strict mode **this**
// inside a function point to {} in nodejs but if use strict mode then it point to undefined which
// is good


//This keyword wrt to DOM

// const botton=document.getElementById("first")
// botton.addEventListener('click',function(){
//     console.log(this) // this pointing to button 

// })

//or
// botton.addEventListener('click',()=>{
//     console.log(this) // window object in browser
// })


// Now wrapuup--------
// this keyword point to empty object in nodejs and window object in browser
// Function: if function is called by someone then this point to that someone
// If funtion is independently called then this point to global object in non-strict mode
// and  in strict mode **this** point to undefined.


// function greet(){
//     console.log(this); //window onject 
// }
// greet();

//else it is undefinde means in strict mode

// And for arrow function **this** keyword always use lexical envirnment scope















