const div=document.getElementById('timer')

setInterval(()=>{
    let currentTime=Date.now()
// console.log(currentTime) // from 1 jan 1970 in mili second

let olympicTime= new Date(2028,6,14).getTime() //milisecond

let diff=olympicTime-currentTime

const days=Math.floor(diff/(24*60*60*1000));
diff%=24*60*60*1000

const hours=Math.floor(diff/(60*60*1000))
diff%=60*60*1000

const minutes=Math.floor(diff/(60*1000))
diff%=60*1000;

const seconds=Math.floor(diff/(1000))
diff%=1000

div.textContent=`days: ${days} hours: ${hours} minutes: ${minutes} seconds: ${seconds} `

},1000)