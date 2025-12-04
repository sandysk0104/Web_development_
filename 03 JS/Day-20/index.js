// // About Async await 

// async function greet(){
//     return "rohit"; //promise
//     // Either return above you can return promise like we discussed it earlier 

// }
// // ***Asynic always return a promise**** 

// let respose =greet();
// // console.log(respose);
// respose.then((data)=>console.log(data))
// .catch((error)=>{
//     console.log("Error:",error);
// })


// Await keyword inside a async function for synchronization

// async function github(){
//     console.log("hello world ")
//     const respose= await fetch("https://api.github.com/users");
//     const data = await respose.json();
//     console.log(data);
    
// }

// github();
// console.log("hello ji kaise ho")

//notes------------------
// Note you await keyword can be used outside but it is recommended to be used inside the 
// async function 
// Await is used for asynchorous task and due to ***inside a async function asynchronous 
// work given to webapi*** for handling otherwise js is stopped which we do not want.
//3. 

// Make a project ------------------------------

// https://api.github.com/users

// async function github() {

//     try{
//         console.log("kaisa h")
//             const response=await fetch("https://api.github.com/users");
//             if(!response.ok)
//             {
//                 throw new Error("data is not there");
//             }
//             const data =await response.json()
//             // console.log(data)
//             const parent=document.getElementById("first");
//             for(let user of data)
//             {
//                 const element=document.createElement('div')
//                 element.classList.add('user') //*

//                 const image=document.createElement("img");
//                 image.src=user.avatar_url   //* 
//                 //image attached
                
//                 //username
//                 const username=document.createElement('h2')
//                 username.textContent=user.login;

//                 //visit profile
//                 const anchor=document.createElement('a');
//                 anchor.href=user.url
//                 anchor.textContent="Visit Profile";

//                 //append
//                 element.append(image,username,anchor)
//                 parent.append(element)
                
//             }
//         }
//     catch(error)
//     {
//         console.log("Error:",error)
//     }
// }
// github();
// console.log("hello ji")



// //previous project
// const orderDetail = {
//     orderId: 123123,
//     food:["Pizza","biryani","coke"],
//     cost: 620,
//     customer_name: "Rohit",
//     customer_location: "Dwarka",
//     restaurant_location: "Delhi"
// }

// function placedOrder(orderDetail){
//     console.log(`Payment is in progress of ${orderDetail.cost}`);
     
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(Math.random()>0.1)
//             {
//                 console.log("Payment is received and order get placed");
//                 //creating status 
//                 orderDetail.status=true;
//                 resolve(orderDetail)
//             }
//             else{
//                 reject("Payment is unsuccessfull")
//             }
       
//         },3000)
   
//     })
// }

// function preparingOrder(orderDetail){
//     console.log(`Your food preparation started of ${orderDetail.food} `);

//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             if(Math.random()>0.05)
//             {
//                 console.log("Your order is now prepared");
//                 orderDetail.token=123;
//                 resolve(orderDetail);

//             }
//             else
//             {
//                 reject("Restaurent is closed");
//             }
            
//         },3000)
//     })
// }

// function pickupOrder(orderDetail){
//     console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
        
//     return new Promise((resolve,reject)=>{
       
//             setTimeout(()=>{
//                 if(Math.random()>0.05)
//                 {
//                      console.log("I have picked up the order");
//                 orderDetail.recievedStatus=true;
//                 resolve(orderDetail)

//                 }
//                  else 
//                 {
//                     reject("Delivery boy not able to reach restaurant");
//                 }
               
//              },3000)
        
       
        
       
//     });
// }

// function deliverOrder(orderDetail){
    
//     console.log(`I am on my way to deliver order for ${orderDetail.customer_location}`);
//     return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//         console.log("Order delivered succesfully");
//         orderDetail.delivery=true;
//         resolve(orderDetail)
//         },3000) 
//     })
   
// }


// placedOrder(orderDetail)
// .then((orderDetail)=>{return preparingOrder(orderDetail)})
// .then((orderDetail)=>pickupOrder(orderDetail))
// .then((orderDetail)=>deliverOrder(orderDetail))
// .then((orderDetail)=>{
//     console.log(orderDetail)
// })
// .catch((error)=>{
//     console.log("Error:" ,error);
// })
// .finally(()=>{
//     console.log("I am doing clean up")
// })


// async function ordreing(){
//     try{
//         const response1=await placedOrder(orderDetail);
//         const response2=await preparingOrder(response1);
//         const response3=await pickupOrder(response2);
//         const response4=await deliverOrder(response3);
//         console.log(response4)
//     }
//     catch(error){
//         console.log("Error:",error);
//     }
    
// }
// ordreing()
// console.log("hello ji")




//one more thing ***
async function fun() {
    const comment=await fetch("userComment")
    const imag=await fetch("userImage")
    const likes=await fetch("userlikes");
}

//Above wrong way(x) because all above promises can also be run parrallel due to await keyword
// its happen to sequential which we don't want so below is better way to resolve it using 
//Promise.all() methods

const [comment,imag,likes]=await Promise.all([fetch("userComment"),fetch("userImage"),fetch("userLikes")]);









