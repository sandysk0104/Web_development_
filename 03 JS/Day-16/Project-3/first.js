const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    // console.log(e)

    const boy=document.getElementById("boy")
    const girl=document.getElementById("girl")

    const l1=boy.value.length;
    const l2=girl.value.length
    let result=Math.pow(l1+l2,3)%101;
    
    const element=document.querySelector('h2')
    element.textContent=`Result: ${result}%`;
    form.reset();
})

