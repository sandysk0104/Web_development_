// const element=document.getElementById("first")

// function clickHandle(){
//     element.textContent="Strike is coming Soon"
// }


// 2nd way problem of overriding
// const element=document.getElementById("first");
// element.onclick=function clickHandle()
// {
//     element.textContent="strike is coming soon"
//     element.style.backgroundColor=pink
// }

// // element.onclick()
// element.onclick=function clickHandle()
// {
//     element.textContent="hello ji"
    
// }

// //3rd which is best way
// const element=document.getElementById("first");
// element.addEventListener('click',()=>{
//     element.textContent="strike is coming soon"
// })

// element.addEventListener('dblclick',()=>{
//     element.style.backgroundColor="orange"
// })

// // like click, dblclick there are many more

// for individual
// const child=document.getElementById("child1")
// child.addEventListener('click',()=>{
//     child.textContent="first is clicked"
// })


//for all 
// const parent=document.getElementById("parent");
// for(let child of parent.children){
//     console.log(child)
//     child.addEventListener('click',()=>{
//         child.textContent=" I am clicked"
//     })
// }

//event bublling
// const grandparent=document.getElementById("grandparent")
// grandparent.addEventListener('click',(e)=>{ // object e given by event listener
//     // console.log(e)
//     console.log(e.target) //this line is very important

//     // console.log("grandparent")
// }) // third parameter is false bydefault

// const parent=document.getElementById("parent")
// parent.addEventListener('click',(e)=>{ // 
//     console.log(e)
//     // console.log("parent")
// })

// const child=document.getElementById("child")
// child.addEventListener('click',(e)=>{
//     console.log(e)
//     // console.log("child")
//     // e.stopPropagation() 
// }) 

// output: grandparent //capture phase :true
//          child //capture phase:true
//          parent //due capture phase is off means false

//now we understand the power of event(specially e.target) object now again back to 
// previous code


//for all 
// const parent=document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     console.log(e.target)
//     e.target.textContent="i am clicked";
// })

// //for removing eventlistener
// parent.removeEventListener('click',(e)=>{ //wrong(X) due to callback function having different memory hey
//     //simple seem same but different due to different memory allocation
    
//     console.log(e.target)
//     e.target.textContent="i am clicked";
// })

//better approach
// function clickHandle(e){

//     e.target.textContent="i am clicked";
//     parent.removeEventListener('click',clickHandle)

// }
// parent.addEventListener('click',clickHandle)










