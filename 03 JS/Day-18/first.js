// zomato application

const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}

function placedOrder(orderDetail,Callback){
    console.log(`Payment is in progress of ${orderDetail.cost}`);

    setTimeout(()=>{
      console.log("Payment is received and order get placed");
      //creating status 

      orderDetail.status=true;
    Callback(orderDetail);
    },3000)
}

function preparingOrder(orderDetail,Callback){
    console.log(`Your food preparation started of ${orderDetail.food} `);

    setTimeout(()=>{
        console.log("Your order is now prepared");
        orderDetail.token=123;
        Callback(orderDetail)
    },3000);
}

function pickupOrder(orderDetail,Callback){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);

    setTimeout(()=>{
        console.log("I have picked up the order");
        orderDetail.recievedStatus=true;
        Callback(orderDetail);
    },3000);
}

function deliverOrder(orderDetail){
    
    console.log(`I am on my way to deliver order for ${orderDetail.customer_location}`);
    setTimeout(()=>{
        console.log("Order delivered succesfully");
        orderDetail.delivery=true;
    },3000) 
}

placedOrder(orderDetail,(orderDetail)=>{ 

    preparingOrder(orderDetail,(orderDetail)=>{

        pickupOrder(orderDetail,(orderDetail)=>{

            deliverOrder()
        })
    })
})

//means after 3 sec call preparingOrder like wise for below also you can
// in the funtion defination

//Above is called callback hell means callback inside callback inside callback like that 
// placedOrder(preparingOrder(pickupOrder))  // wrong never do that wrt to above code 

//Disadvantages:
//its old practises and can see code is now not readale much infact it may become more 
// and more complex to read a code and this practise not very good thats why this first 
// and last we are studing this because we better approaches then this which will studing 
//in the future but ofcourse these concept give more clarity to JS core 


//**Point to remember**
// never hardcode the code because we want flexibility while writing actual code for
//real project okk