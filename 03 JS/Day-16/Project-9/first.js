const form =document.querySelector('form');
const input=document.getElementById('todo')
const allTask=document.getElementById('alltask')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text=input.value.trim() //for trimming

    if(text=='')
        return ;
    
    const parent=document.createElement('div');
    parent.style.marginTop='10px'

    //first element of a parent
    const span=document.createElement('span');

    span.textContent=input.value.trim() 
    span.style.fontSize="20px"
    span.style.marginTop="10px"
    span.style.marginRight='20px'
    
    //second element of a parent 
    const buttonDone=document.createElement('button')
    buttonDone.textContent="Done"
    buttonDone.style.marginRight="20px"

    //third element of a parent
    const buttonRemove=document.createElement('button')
    buttonRemove.textContent="Remove"
    
    //append
    parent.append(span,buttonDone,buttonRemove)
    
    //append to parent element DOM
    allTask.append(parent)

    buttonRemove.addEventListener('click',()=>{
        parent.remove();
    })

    buttonDone.addEventListener('click',()=>{
        span.style.textDecoration="line-through"
        span.style.color="grey"

    })
    form.reset();
})