const body=document.querySelector('body')

body.addEventListener('click',(e)=>{
    // console.log(e.clientX,e.clientY)

    //create element
    const circleElement=document.createElement('div');

    //give class circle to the element
    circleElement.classList.add('circle');

    //give text-content to that div container means circle class
    circleElement.textContent="Hi";

    const color=["pink","yellow","orange","blue","purple","brown"];
    circleElement.style.backgroundColor=color[Math.floor(Math.random()*6)]
    
    circleElement.style.top=`${e.clientY}px`
    circleElement.style.left=`${e.clientX}px`
    
    body.append(circleElement);
    console.log(body)

    //remove element after every 5 second means from the body container
    setTimeout(()=>{
        circleElement.remove()
    },5000) // milisecond 

})