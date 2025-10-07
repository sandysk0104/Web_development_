//object 
//key-value pair

// const user={
//     name:"rohit",
//     age:20,
//     email:"negi@gmail.com",
//     amount:5400,
//     "home address":"dwarika"
// }

// console.log(user["name"])
// console.log(user["home address"])

// console.log(user)
// console.log(typeof user)

//CRUD operation :Create Read Update Delete 

//update
// user.adhar=123456789123;
// user.amount=6000

// console.log(user)

// //delete
// delete user.email
// console.log(user)

// const user={
//     name:"rohit",
//     age:20,
//     email:"negi@gmail.com",
//     amount:5400,
// }

//copy by reference
// const user2=user;
// user2.age=22;
// console.log(user) // because of copy by reference

//imp-------------------------

// console.log(Object.keys(user)) //give array of keys
// console.log(Object.values(user))
// console.log(Object.entries(user))


//loop (for in loop ) 
// for(let key in user)
// {
//     console.log(key,user[keys])
// }

//destructuring of an object-----------------
// let {name,age}=user;
// console.log(name,age)

//kind of key value pair for giving name
// let {name:userName,age:userAge}=user
// console.log(userName,userAge)



//destructuring of an array------------------------------------
// const arr=[1,2,378,90,123];
// let  [first,second]=arr;
// console.log(first,second)






//for of loop

// for(let key of Object.keys(user))
// {
//     console.log(key)
// }

// for( let values of Object.values(user))
// {
//     console.log(values)
// }

// for( let entries of Object.entries(user))
// {
//     console.log(entries)
// }

// As above for in loop is not recommended thats why we use for of loop . As we cannot use 
//it directly thats why we use indirectly using destructuring 



//function in object
// const user={
//     name:"rohit",
//     age:20,
//     email:"negi@gmail.com",
//     amount:5400,
//     greeting:function(){
//         console.log(`strike is coming on 18 october ${this.name}`)
//         //here this is referensing to the object by it is called we can use instead
//         // user.name but sometime there will be problem
//         return 20;
//     }
// }

// // console.log(user)
// // console.log(user.greeting()) // called by user object means this referencing to it

// //imp why "this" keyword is used instead directly using key value-----------------------
// const user2={
//     name:"mohan"
// }
// user2.greeting=user.greeting;// now there will be problem if we use "user.name" instead of 
// //"this.name" you can see in output
// console.log(user2.greeting())


// Nested object
// const user={
//     name:"rohit",
//     age:20,
//     email:"negi@gmail.com",
//     amount:5400,
//     address:{
//         city:"kotdwar",
//         state:"Uttrakhand"
//     }
// }
// console.log(user)
// console.log(user.address)
// console.log(user.address.city)


// const user={
//     name:"rohit",
//     age:20,
//     email:"negi@gmail.com",
//     amount:5400,
//     address:{
//         city:"kotdwar",
//         state:"Uttrakhand"
//     }
// }

// let user1=user // copy by reference

//shalow copy----------------------------------------
// let user1={...user}// now seperte new copy is created to the user1 but only to the first level
// user1.name="mohan" // 
// // console.log(user1)
// // console.log(user)
// user1.address.city="dwarka" // now reflected to both object 
// console.log(user1)
// console.log(user)

//deepcopy---------------------------------------------
// user1=structuredClone(user)
// user1.name="mohan"
// user1.address.city="dwarka"
// console.log(user)
// console.log(user1)


// const user={
//     name:'rohit',
//     0:"zero",
//     1:"one"
// }
// console.log(user)
// console.log(user[0])
// console.log(user['0'])


//infact in js array is stored like wise means
// const arr=[23,45,39,10,7]
// const arr={
//     0:23,
//     1:45,
//     2:39,
//     3:10,
//     4:7
// }
// console.log(arr[0])// 23 means thats how array is stored means like an object not exactly like
// actual object

// In js for key value pair we now know key is string but in 2025 new rule comes out that 
// instead of string you can use symbol means
// key=string ||symbol

// let sym=Symbol("id");
// const ob={
//     name:"rohit",
//     age:20,
//     [sym]:"hello ji"// way to written "sym"  otherwise it treat as a string 
// }
// console.log(ob)
// console.log(ob[sym])





















