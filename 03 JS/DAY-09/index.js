//function

//function define
// function greeting(){
//     console.log("hello coder army , strike is coming 18 october")

// }
// //calling
// greeting()

// function addNum(num1,num2,num3=0,num4=0){
//     let sum=0;
//     sum=num1+num2+num3+num4;
//     console.log(sum);
// }

//rest operator----------------------
// function addNum(...num)
// {
//     // console.log(num)// array of num 
//     let sum=0;
//     for( n of num)
//     {
//         sum+=n;
//     }
//     console.log(sum);

// }
// addNum(3,8);
// addNum(12,2,3);
// addNum(1,2,3,4)
// addNum(1,2,3,3,55,6,9);


// const arr=[1,2,3,4,5,6]
// const [first,second,...num]=arr // destructuring + rest
//operator (...) toward variable thats why rest
// console.log(first,second,num)


// const arr1=[1,2,3,4,5,6]
// const arr2=[4,4,7,8,2]
// const ans=[...arr1,...arr2] // operator toward array thats why spread 
// console.log(ans)


//2nd way of writing function(expression)-----------------------
// const addNum=function(num1,num2){
//     return num1+num2
// }

// console.log(addNum)//[Function: addNum]
// console.log(addNum(1,2)) 

//3rd way------------------------------------
//now means funtions is replaced by =>
// const addNum=(num1,num2)=>{
//     return num1+num2
// }

// console.log(addNum(2,4))

//now again 
// const addNum=(num1,num2)=>{ return num1+num2}
// console.log(addNum(8,9))

//now again
// const addNum=(num1,num2)=> num1+num2
// console.log(addNum(8,9))

//now again
// const sqr=num=>num*num  //because of on only one parameter
// console.log(sqr(9))


//now let return the object 

// const ob=()=>{
//     let user={
//         name:"rohit",
//         age:15
//     }
//     return user
// }
// console.log(ob())

// const ob=()=>{
//     let user={
//         name:"rohit",
//         age:15
//     }
//     return user
// }
// console.log(ob())


// const ob=()=>{
//     let user={
//         name:"rohit",
//         age:15
//     }
//     return user
// }
// console.log(ob())

//for making one state after { we use ()---------------------
// const ob=()=>({name:"rohit",age:15})
// console.log(ob())


// //IIFE(4th way)
// (function greeting(){
//     console.log("helloji");
// })();

// (()=>{console.log("hi")})();

//means "()()" first "()" for wrap the function  then second "()" for call



//Callback function
// function place_at(){
//     console.log("Iam at joshimath");

// }

// function meeting(callback){ //parameter name anything 
//     console.log("I am at the meeting");
//     // place_at() //hardcode we dont want means want flexibility thats why use callback
//     callback()
//     //more code below---
//     //-----
// }

// function greeting(){
//     console.log("hello kaise ho");
// }

// meeting(greeting()) 
// meeting(greeting)// now for callback(i.e. passing a reference)
// meeting(place_at)


//Real world example of callback() funtion
// function blinkit(){
//     console.log("packing item  for delivering")
// }

// function payment(amount,callback){
//     console.log(`${amount} accepted now we go for next process`)
//     callback()

//     //below code like -----
//     //gst calculation 
//     //other calcutaion
//     //profit calculation
// }

// function zomato(){
//     console.log("preparing food")
//     console.log("delivering in 30 min")
// }

// payment(500,zomato)
// payment(300,blinkit)

























