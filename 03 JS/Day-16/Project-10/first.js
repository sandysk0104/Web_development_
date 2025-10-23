const form=document.querySelector('form')

const answerKey={
    q1:"Sachin Tendulkar",
    q2:"West Indies",
    q3:"Sachin Tendulkar",
    q4:"264",
    q5:"Muttiah Muralitharan"
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const data=new FormData(form)  //New thing here
    let score=0;
    
    for(let [key,value] of data.entries())
    {
        if(answerKey[key]==value)
        {
            score++;
        }
    }

    const result=document.getElementById('out');
    result.textContent=`Score ${score} out of 5`;
    result.style.marginTop="20px"
    form.reset();
})

//Homework 
// 1. study about FormData
//2.  Create the question paper which is dynamic in nature means with a pool of lets say 
// 100 pick randomly  10 question and give score based on the answer given
