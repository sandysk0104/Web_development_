// day 3 having the concept of stack and heap

// Day 4 Operator


// Arithmatic op.
// console.log(2+2)
// console.log(2-4)
// console.log(2*3)
// console.log(2/3)
// console.log(2%3) //for rem
// console.log(2**3)// two multifly 3 times i.e. 2 to the power 3

//Assignment
// let a=4;
// let b=4;
// a+=b;
// console.log(a)





//Comparision operator
// let x=4;
// let y=6;
// console.log(x>y)


// let a=10;
// let b="10";
// console.log(a==b); //  equal comparison but if one variable is string and other is number
//then string first convert it into number then compare so output: true
//or string number compare (first string convert to number) 

// console.log(a===b)// strict equal comparision first compare the type of varibales then go 
// actual number so :output false

// let z="120";
// let w=Number(z);
// console.log(w);

// let z="123ab"
// let w=Number(z);
// console.log(w) //Output: NaN 
//NaN means Not a number  


//String-->Number 
// let a=20;
// let b=String(a)
// console.log(b);
// console.log(typeof b) //string


//true-->1
//false-->0
//null->0
//undefined-->NaN
//for example below
// console.log(Number(true)) //1
// console.log(Number(false))//0
// console.log(Number(null))//0
// console.log(Number(undefined))// NaN


// console.log(typeof String(true))

// console.log(String(null))

// console.log(Boolean("sge")) //true but false when string is empty
// // you can play now like this 


//Computer science challenge

// let a=0.1
// let b=0.2

// let c=a+b;
// console.log(c==0.3) //false
// console.log(c)// not be exactly three i.e. show approximate value



//Some rules to remember in js------------------------

// 1: null is loosely equal to undefined only

// console.log(null==undefined); //true
// console.log(null===undefined); //false because first check the type
// console.log(null==0);
// console.log(null=="");
// console.log(null==false);
// console.log(null==true);

// >,<,>=,<= (null --> number, undefined --> NaN)

// console.log(null>=0); //true
// console.log(null<=0);
// console.log(null>0);
// console.log(null<0);
// console.log(null>=undefined);
// console.log(undefined>=0);

// console.log("Rohit">"Rahit"); //true kind of lexographically check 

// console.log(1<=true); //true

// Ek koi bhi type hai, usko agar muje compare karna hai dusre kisi type se
// to  Dono number mein convert honge

// console.log(null>=""); //true


// console.log(NaN == NaN); //false(remember)




// loop kaise kaam karte hai-------------------------

// for loop
//i++ post increement
//i-- post decreement

// for(let i=0;i<10;i++){
//     console.log(i);
// }

//while

// let i=0;
// while(i<10)
// {
//     console.log(i);
//     i++
// }


//do while

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);


//conditional statement 

// let age=18;
// if(age>=18)
// {
//     console.log("Eligible for vote")
// }
// else 
// {
//     console.log("Not eligible for vote")
// }

// child young old

// let age =19;
// if(age<18)
// {
//     console.log("kid");

// }
// else if(age>=60)
// {
//     console.log("old")
// }
// else 
// {
//     console.log("young")
// }


//Logical Operator

//Logical-AND(&&) and Logical-OR (||)

// console.log(true&&true)
// console.log(true&&false)
// console.log(false&&true)
// console.log(false&&false)

// console.log("rohit"&&"mohit")
// console.log(""&&"rohit")
// console.log(10&&0)

// in case of logical && if first operand is false it will print first value else print
// second value whatever it is 


//Logical OR

// console.log(true||true)
// console.log(true||false)
// console.log(false||true)
// console.log(false||false)

// console.log("Rohit"||"shivam")
// console.log(""||"mohit")
// console.log(10||0)


//// in case of logical || if first operand is true it will print first value else print
// second value whatever it is 

//not equal !=
// console.log(5!=9)

//Home work
// about & and | 
// e.g.
console.log(8|8)
//  think about the actual solution so 0.1 +0.2==0.3 like that i.e. for every number 



