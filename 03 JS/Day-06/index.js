//string 

// let str1="hello"
// let str2='hello'

//new way to define the string i.e. ` ` --------------------------------
// const day=18;
// let str3=`strike is coming on ${day}`
// console.log(str1,str2,str3)
// str3[0]="k"// string do not change because of immutable in nature 

// let str="hello world"
// console.log(str.length)

// console.log(str[2])


//const str=`Hello coder Army `
// upper case-------------------------

// const a = str.toUpperCase();
// const b = str.toLowerCase();
// console.log(b);


// const str = `Hello Coder Army Coder`;

// console.log(str.indexOf('Cod')); //6
// console.log(str.lastIndexOf('Cod'));//17
// console.log(str.includes('cod')); false i.e. does not include

// slice 
// console.log(str.slice(2,7)); //llo C i.e. exclude 7th index
// console.log(str.slice(3)); // lo Coder Army Coder
// console.log(str.slice(-5,-2));//Cod

// const str = `Hello Coder Army Coder`;

// console.log(str.substring(2,5)); //llo i.e. same as slice except not including -ve 
//index

// const a = "Rohit";
// const b = "Negi";
// const c = a+" "+b;
// console.log(c); // Rohit Negi

// console.log(24+"Rohit");
// console.log(24+"Rohit"+10); //24Rohit10
// console.log(24+30+"Rohit"); //54Rohit


// const str = `Hello Coder Army Coder`;
// console.log(str.replaceAll(`ode`,`iam`)); //Hello Ciamr Army Ciamr
// console.log(str.replace("ode","iam"))   //Hello Ciamr Army Coder


// const user = "  Rohit  Negi ";
// console.log(user.trim()); // trim from the beginning and ending

// const names = "Rohit Mohit Suraj Rohan Anjali";
// console.log(names.split(" ")) //[ 'Rohit', 'Mohit', 'Suraj', 'Rohan', 'Anjali' ]
// split on the basis og space and store in the array

// const names = "Rohit, Mohit, Suraj, Rohan, Anjali";
// console.log(names.split(",")) //[ 'Rohit', 'Mohit', 'Suraj', 'Rohan', 'Anjali' ]








// Date object--------------------

// const now = new Date();


// console.log(now);
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());


// Local time chal rha
// console.log(now.getDay());
// console.log(now.getDate());

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getSeconds());


// days: Mon-tue(1 based)
// Month: 0 1

// year month date hour minute second millisecond
// const now = new Date(2025,8,20,8,25,16,125);

// console.log(now.toString());


// Timestamp
// const now = Date.now();
// const dates = new Date(1759275037293);
// // console.log(dates.toString());

// console.log(dates);
// console.log(now);
// 1759272851288: TimeStamp



// rough--------------------------------------------------
// let now=new Date();
// console.log(now)

// console.log(now.toString())
// console.log(now.toISOString())
// console.log(now.toLocaleString())
// console.log(now.getMilliseconds())

let now =Date.now()
console.log(now)



