// let a=34
// let b=45.3456
// console.log(b)

// console.log(b.toFixed(2)) //output :45.35 which is string type and also  value of b is 
// // is not been change due to immutable in nature 

// console.log(b.toPrecision(3)) // 45.3 also of string type 

// console.log(b.toString())


// let a=new Number(2);
// let b=new Number(2);

// console.log(a==b);//false due to a and b are object;
// console.log(Boolean(a)) // true due to valid reference to object 
// console.log(Boolean({}))//true due to valid reference ot object


//Math Object 
// console.log(Math.E)
// console.log(Math.LN10) //log with base exp 
// console.log(Math.abs(-78))
// console.log(Math.max(1,2,3,4,90))
// console.log(Math.sqrt(5))


// console.log(Math.random()) 
// //output will be from [0,1) i.e. 0 include and 1 is not 

// // for making range 0-9
// // console.log(Math.floor(Math.random()*10))

// //for making range 1to 10
// console.log(Math.floor(Math.random()*10)+1)

// // 0-5
// console.log(Math.floor(Math.random()*6))

// //1-6
// console.log(Math.floor(Math.random()*6)+1)

// //15-25
// console.log(Math.floor(Math.random()*11)+15)

//form Math.floor(Math.random()*number_of_outcome)+shift
//formula Math.floor(Math.random()*(max-min+1))+min



//Otp generator (1000-9999)
// console.log(Math.floor(Math.random()*(9999-1000+1)+1000))

// important//---------------------
//Problem with Math.random() is cannot be used to generate the otp because of the 
//predictibilty of seed value which is mainly system time which can be easily predicited 
// hacker thats why seed is created using cryptographic library e.g. for making a seed value
// library or we take mouse coordinate , system heating reading rightnow, rightnow RAM acquired
// like that then we take all these value and create seed value which is totally random 
// which cannot be guess by hacker.
//Same code is also having by hacker of math.random but donot be worry about rightnow 



