// // About promises

// console.log("hello world start")

const p1=fetch("https://api.github.com/users")
// // // console.log(p1)//(wrong way because ----)


//below is a asynchrounous task 
const p2=p1.then((response)=>{
    return response.json(); //this

})

p2.then((data)=>{
    console.log(data);
})

// //better because here chaining is used---------------
// // fetch("https://api.github.com/users")
// // .then((response)=>{
// //     return response.json(); // javasript object(check later)
// // })
// // .then((data)=>{
// //     console.log(data)

    
// // })



// fetch("https://api.github.com/user")
// .then((response)=>{
    
//     if(!response.ok) // means server did not able to give error
//     {
        
//         throw new Error("Data is not present in server")
//     }
//     return response.json(); // javasript object(check later)
// })
// .then((data)=>{
    
//     const parent=document.getElementById("first");
//     for(let i=0;i<data.length;i++){
//         //things has to be simple and flexeble 
//         const img=document.createElement("img")
//         img.src=data[i].avatar_url;
//         img.style.height="60px"
//         img.style.width="60px"
//         parent.append(img);  
//     }
    

// })
// .catch((error)=>{
//     const parent=document.getElementById("first");
//     parent.textContent=error.message;
// })





// //
// console.log("hello world end")



//Above is consuming the promises

//Creating  the promisies
// const p1=new Promise((resolve,reject)=>{ //resolve means fullfilled 
//     // reject means offcourse reject
//     resolve({
//         name:"rohit",
//         age:20
//     })
// })
// console.log(p1) //Promise { { name: 'rohit', age: 20 } }


// //consume the promises(actual way)------
// p1.then((resolve)=>{
//     console.log(resolve)
// })
// .catch((error)=>{
//     console.log(error);
// })





//Lets talk about JSON

//fullform Javasript object notation 
// this format is different from js obect which is understand by every other languages like 
// js,c++,java ,python etc 
// Difference between JSON and js object
// differences: json doesnot allow key to be without double qoute, not allowing undifined,funtion
// , comma at the end of last key-value pair etc which is unlike in js object
//--------
//------


//js object to JSON

// const ob={
//     name:"rohit",
//     age:20,
//     address:"dwarka",
// }
// const jsonformat=JSON.stringify(ob)
// console.log(jsonformat) //i.e. stringify




//Creating the JSON
// const json_format=`{
//     "name":"rohit",
//     "age":20,
//     "location":"dwarka"
// }` // its actually a string format  
// console.log(json_format)


// //converting the json to JS object 
// const obj_format=JSON.parse(json_format)
// console.log(obj_format)


//previos lecture example i.e. zomato application-------------------
//Now resolve using promises 


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
//                 if(Math.random()>0.9)
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


