//Array Non primitive data type 


// let marks=[78,20,4,5,5,6]
// console.log(marks)
// console.log(marks.length)

// let arr=[1,23,"rohit",true]
// console.log(arr)
// arr[2]=1;
// console.log(arr)


// let arr=[1,23,"rohit",true]
// //push operation i.e. insert operation at the end

// arr.push("sandeep");
// arr.push(90);
// console.log(arr);

// //pop operation i.e. delete at the end

// arr.pop();
// console.log(arr)

// //push at the beginning 
// arr.unshift(20);
// console.log(arr);

// // pop at the beginning
// arr.shift()
// console.log(arr)
// shift and unshift are advisible not to use of time complexity issue means it hamper the 
// system 


// let arr=[1,2,3,4,5,6,7]
//how to iterate
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// another way means value of array
// for(let num of arr)
// {
//     console.log(num);
// }

// let arr=[1,2,4,5,"Rohit"];
// let arr1=arr;
// arr1.push(67);
// console.log(arr)// because of copy  by referece

//primitive :copy by value
//non-primitive:copy by reference i.e. address will be copied

// const arr=[1,2,3,4,5]
// arr=[3,4,5,6] //again wrong(X) because of const means now address will not change
// arr[2]=100;//valid because we are not changing the address

//slice operation

// let arr=[1,2,3,4,5,6]
// console.log(arr.slice(2,4)) // i.e. return new array and do not change in the array arr

// let arr1=arr.slice(2,4);
// console.log(arr1) //[1,2,3,4,5,6]

//splice

// console.log(arr.splice(1,3)) //[2,3,4]
// console.log(arr)// [1,5,6]

// console.log(arr.splice(1,3,"rohit",56)) 
// console.log(arr)

//i.e. change in the original array arr syntex splice(index, number of element from index,element to be inserted after trim out)


// let arr=[1,2,3,4,5,6,7];
// let arr1=["rohit",1,7];
// let arr2=["sandeep",true];

// let arr3=arr.concat(arr1,arr2)
// console.log(arr3)

// //other way i.e. spread operation(...)----------------
// // let arr3=[...arr,...arr1,...arr2];
// console.log(arr3)



//to string operation -----------------
// let arr=["sandeep","Kumar"]
// console.log(arr.toString()); //give string (output:sandeep,kumar)

// //other way
// console.log(arr.join(" ")) // give string (output:sandeep kumar) 
// console.log(arr.join("-"))// give string (output:sandeep-kumar) 

//sort method 

// let arr=["Bob","Rohit","Mohan","Alice"]
// arr.sort();
// //sort on the basis of ASCII value
// console.log(arr)
// arr.reverse()
// console.log(arr)

//note for sorting in decending order for that first normal sort then reverse(imp***)-----

// let arr=[1,7,31,3,8,9,10];
// arr.sort() 
// console.log(arr)//[1, 10, 3, 31,7,  8, 9] i.e. sort on the basis of ASCII value means
//first each number converted into string then compare
//But why ???? 
// simple here array is a collection of different data type then for comparision we have to 
// make to scale for comparison so that we can compare here standard scale is string


// let arr=["rohit",1,"mohit",true]
// arr.sort()
// console.log(arr) //[ 1, 'mohit', 'rohit', true ]


// for normal sort on an inter array means
// let arr=[34,78,10,89,57,30]

// arr.sort((a,b)=>a-b)//accending 
// console.log(arr)

// arr.sort((a,b)=>b-a)
// console.log(arr)


//flatening of an array
// const arr=[1,2,[3,4,[56,89],5],90,100]
// console.log(arr[2][2][0])// 56

// // let a=arr.flat(); 
// // console.log(a)

// let a=arr.flat(Infinity) //flat all the layer 
// //flat(1) flat till one layer
// console.log(a)


//Array is not an array but actually it is object

















