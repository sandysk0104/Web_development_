// //prototype

// const obj={
//     name:"Rohit",
//     age:38,
//     greet: function(){
//         console.log("hello ji")
//     }
    
// }
// // console.log(obj)
// // obj.greet()
// console.log(obj.hasOwnProperty("names")) //will work(? how)
// console.log(obj.toString()) //will work(? same)

// const arr=[96,56,89];
// arr.sort() // how(?) because we actually didn't make it 
// console.log(arr) 


// const obj2={
//     account:30
// }
// console.log(obj2.account)
// console.log(obj2.name)//wrong(x)

// //for that 
// obj2.__proto__=obj;
// console.log(obj2.name)

// //Now answer is clear for all the above thing which is due to prototype
// // for better explaination refer figure



//Classes------------------------------------------------------

// const obj1={
//     name:"Rohit",
//     age:30,
//     greet: function(){
//         console.log(`hello ${this.name}`);
//     }
// }

// const obj2={
//     name:"Mohit",
//     age:20,
//     greet: function(){
//         console.log(`hello ${this.name}`);
//     }

// }
// const obj3={
//     name:"Sohit",
//     age:15,
//     greet: function(){
//         console.log(`hello ${this.name}`);
//     }

// }

// Now problem of redundency 

// class Person{
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age
//     }
//     sayHi(){
//         console.log(`Hi ${this.name}`);
//     }
// }
// // const Person1=new Person("Rohit",30);
// // console.log(Person1.name)

// // const Person2=new Person("Mohit",20);
// // console.log(Person2)
// // //output of above :Person { name: 'Mohit', age: 20 }

// // const obj={
// //     name: "name",
// //     age:30,
// //     greet: function(){
// //         console.log(`hello ${this.name}`);
// //     }
// // }
// // console.log(obj)
// // output: { name: 'name', age: 30, greet: [Function: greet] }

// //Now if we compare the 2 outputs then you can find the differnence by how(?) 
// // Simple answer due to prototyping and also you can see in the figure how efficienctly 
// //memory is used .
// // And also due to efficiently usage of memory ,defining the multiple objects of same 
// // blueprint become become useless.
// // **Agenda** kya hai which is ***do not repeat***


// //Example of banking system---

// class Customer extends Person{ // extends keyword for taking all parent property i.e. 
    // attributes and methods.
//     constructor(name,age,acc_no,balance){
//         super(name,age); //for calling the parent constructor
//         this.acc_no=acc_no; // as normal as before
//         this.balance=balance;
//     }
//     balanceCheck(){
//         console.log(`Balance ${this.balance}`);
//     }

// }
// //Now proper inheretence above using extends 
// const c1=new Customer("Rohit",30,12,5000);
// console.log(c1)
// console.log(c1.sayHi())
// console.log(c1.balanceCheck())




//Object.create()----------------
// like using __proto__ keyword we can also use Object.create(obj) e.g. below
const obj={
    name:"Rohit",
    age:20
}
const obj2=Object.create(obj); //like using __proto__ keyword above
console.log(obj2)
// output: {}    //means empty
obj2.account=4567
console.log(obj2) //output: { account: 4567 }

console.log(obj2.name) // output:Rohit;












