const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const income=document.getElementById('income');
    const val=parseInt(income.value);
    let totalTax=0;
    
    if(val<=1200000)
    {
        totalTax=0;

    }
    else if(val<=1600000)
    {
        totalTax=(val-1200000)*0.15;
    }
    else if(val<=2000000)
    {
        totalTax=(val-1600000)*0.20 + 60000 ;
    }
    else if(val<=2400000)
    {
        totalTax= (val-2000000) *0.25 + 60000+80000;
    }
    else{
        totalTax= (val-2400000) *0.30 + 60000+80000+100000;

    }

    const result=document.querySelector('h2');
    result.textContent=`Tax: ${totalTax}`;
    // form.reset()
})