//foreach,filter,map,..........

//foreach
// const arr=[2,6,97,"rohit",89]

// arr.forEach((number,index,arr)=>{ //first argument is mandatory and second and third are 
//     //optinal
//     console.log(number,index,arr)
// })


// const arr=[2,3,4,59,7,78]
// let sum=0;
// arr.forEach((number)=>{
//     sum+=number;
// })
// console.log(sum)
// //inside forEach() method we are passing callback function

// //filter
// const newArr=arr.filter((number)=>number>25)
// console.log(newArr)

// but how these  function work  ???
// const arr=[2,3,4,59,7,78]
// arr.filtering=function(compare)
// {
//    const ans=[]
//     for(let num of this)
//     {
//         if(compare(num))
//         {
//             ans.push(num)

//         }
//     }
//     return ans;
// }
// const answer=arr.filtering(number=>number>25)
// console.log(answer)

//above just for demo
//homework make for sort also 

//map........
// const arr=[1,2,3,4,56,9]
// const newArr=arr.map((num)=>num*2)
// console.log(newArr) 

//real world example:
const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];


// const ans=products.filter(product=>product.price>50).sort((a,b)=>b.price-a.price).map(product=>({name:product.name,price:product.price}))
// console.log(ans)

// const ans = products.map((product)=> ({name:product.name, price:product.price}))
// console.log(ans);

//key point
//filter wrt to rows i.e.while taking all columns
// map wrt to column i.e. while taking all rows 
// index and arr are 2nd and third parameter wrt to filter() and map() respectivily just like
// in forEach() method 

//Homework map method is implemented



//reduce 
//lets say in the products above we want to calculate the sum of all product price 
//accumilator = sum ,initially value is zero 

// const totalPrice=products.reduce((accumulator,currentValue)=>{
//     if(currentValue.inStock)
//     return accumulator + currentValue.price
//     else {
//         return accumulator;
//     }
// },0) // 0 for accumulator value means accumulator= 0

// console.log(totalPrice)  //total price of product which are in stock



//Set------------------------------- 
// const arr=[1,5,76,1,5,89,12,70];
// // console.log(arr)

// const s1=new Set(arr)
// console.log(s1) //{ 1, 5, 76, 89, 12, 70 }

// //add
// s1.add(99)
// console.log(s1)

// //present or not-----
// console.log(s1.has(76)) //true
// console.log(s1.has(101))//false

// s1.delete(76)
// console.log(s1) //{ 1, 5, 89, 12, 70, 99 }
// console.log(s1.size)

// s1.clear();
// console.log(s1) //{}

//Real world exampl--------------------------
// const email = ["ro@gm","ra@gm","mo@gm","ro@gm"];

// //for comeback
// // const uniqueEmail=[...new Set(email)]
// // console.log(uniqueEmail)

// let s1=new Set(email)
// for(let val of s1)
// {
//     console.log(val)
// }



//Map--------------------
//It actually a seperate Data structure not like arr.map
// let m1=new Map([
//     ["rohit",20],
//     [true,90],
//     [{name:"sandeep"},89],
//     [20,"rohit"]
// ])
// console.log(m1)//output below
// //Map(4) {
// //   'rohit' => 20,
// //   true => 90,
// //   { name: 'sandeep' } => 89,
// //   20 => 'rohit'
// // }

// m1.set({name:"sandeep",age:27},89)
// console.log(m1)

// console.log(m1.has(true)) //true
// console.log(m1.get(true)) //90
// console.log(m1.size) //5


// for(let [key,value] of m1)
// {
//     console.log(key,value)
// }

// this map concept genrally used in DSA not in actual real life....
































