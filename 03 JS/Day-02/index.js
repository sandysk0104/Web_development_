// how to declare the variable ------------------------------------

// let name="rohit"
// console.log(name)

// let a=20;
// // a=30;
// console.log(typeof a)
// console.log(a)

// const b=10;
// // b=30; // wrong
// console.log(b);

//old way of decalare the variable---------------------------------- 

// var a=20;
// var a=30; //this work also 
// // console.log(a)

// if(true){
//     var b=10;
// }
// console.log(b); //also work but not in the new way 

// thats why we avoid var method 

// in case fuction, global  var way respect this but who care----------



//data type
//1. primitive data type
//these are : number , string ,boolean, undifined,bigint,null 

//2. non-primitive data type
//these are: array, objec , function


// //number
// let a=1.1
// // // memory reserved for number is 8byte which for decimal range from -2^53 to 2^53-1
// // let b=10;
// console.log(typeof a)
// console.log(a,b);

// //string
// let c="strike is coming soon"
// let d='hello coder army'
// console.log(typeof c)

// //boolean
// let login=true;
// console.log(login);
// console.log(typeof login)


// //undifined
// let e;
// console.log(e);
// // const f;//give error becasue here you have to initilize here only 
// console.log(e)
// console.log(typeof e)


// //bigint
// let f=123124342354398797994n; //place n to the end for representing the bigint
// console.log(f)
// console.log(typeof f)

// //null
// let num=null; //intensionaly saying there nothing inside 
// console.log(num);
// console.log(typeof num) // legacy problem of javasript which never been solved means  
//instead of giving type null vut actually type object


//example
// let weather=current_weather("Dwarka")//api
// may 3 value will get 
// 1. 25
// 2. null i.e. means currently can't able to find
//3. undifined means thormameter does't exist there(means dwarka)

//symbol
// const id1=Symbol("id") // give unique value to a variable
// const id2=Symbol("id")
// console.log(id1==id2) // output false
// console.log(typeof id2)



//Non primitive datatype

//array
// let arr=[1,1.2,"rohit",true]
// // console.log(arr)
// console.log(typeof arr) //output:object and also it actully a object not an array 


// object
// let user={
//     name:"rohit",
//     account_no:112323,
//     age:18,
//     caste:'gen'
// }
// console.log(typeof user) 


//object for give meaning full semantic because of key-value pair

//function--------------------------------------imp-----------------------------
// let a=function add(){
//     console.log(10)
// }
// // now above function is stored in the variable "a"
// console.log(a) // tell a is function on the standard output
// a() // now function is been called

// console.log(typeof a) // give output as type function but it actually a object 

//point of learning
//1. Every primitive data type when on printing output using typeof keyword same datatype 
// we get except for null(which is legacy problem of js)

//2. Every non primitive data type is of actually type of object irrespective of showing 
// using typeof keyword



// Mutable and imutable
// Primitive data type are imutable where as non-primitive not

// let a="Rohit"
// a="mohan"  // now "a" is pointing(think of it like pointer) to "mohan" and memory where rohit is there still there i.e. immutable

// console.log(a)
// a[0]="e"
// console.log(a) //still mohan will print 


//Non primitive datatype
// let arr=[1,2,3,4]
// arr.push(90)  //mutable
// console.log(arr)

// let user={
//     name:"rohit",
//     age:18
// }
// user.name="mohit"
// console.log(user)


//primitive follow copy by value where as non-primitive follow copy by reference
// let a=10;
// let b=a; //copy by value
// b=30;
// console.log(b)//output be 30

// let user={
//     name:"rohit",
//     age:40
// }

// let user1=user //copy by reference means user1 now pointing to memory which is pointed 
// // by user or we can say user1 and user sharing same memory

// user1.name="mohan";
// console.log(user) 






















