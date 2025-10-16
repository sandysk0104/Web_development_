const newElement=document.createElement("h2")

newElement.textContent="Strike is coming soon"
newElement.id="second"
// console.log(newElement)


const element=document.getElementById("first")
//display new element
element.after(newElement)
// element.before(newElement)

const newElement2=document.createElement("h3")
newElement2.textContent="Diwali aa rahi h"
newElement2.id="third"

//outdated way for adding class
// newElement2.className="diwali"
// newElement2.className+=" holi"

//good and proper way
// newElement2.classList.add("diwali")
// newElement2.classList.add("holi")
// newElement2.classList.remove("diwali")
console.log(newElement2)

newElement2.style.backgroundColor="brown"
newElement2.style.fontSize="20px"

//for setting the attribute
newElement2.setAttribute("hello","ji")
element.after(newElement2)

//get and set attribute
console.log(newElement2.getAttribute("hello"))

//
// const list=document.createElement("li")
// list.textContent="Milk(1)";

// const list2=document.createElement("li")
// list2.textContent="Cake(2)";

// const list3=document.createElement("li")
// list3.textContent="Halwa(3)";


// const list4=document.createElement("li")
// list4.textContent="Paneer(4)";


// const unorderElement=document.getElementById("listing")
// // unorderElement.append(list)
// // unorderElement.append(list2)
// //or
// unorderElement.append(list,list2)
// unorderElement.prepend(list3)

// // list.after(list4)
// //other way
// unorderElement.children[1].after(list4) 

//real life problem
const arr=["milk","soya","paneer","idli","sambhar"]
const unorderElement=document.getElementById("listing");

const fragment=document.createDocumentFragment();

for(let food of arr)
{
    const list=document.createElement("li");
    list.textContent=food;
    // unorderElement.append(list) not a good practisw
    fragment.append(list)

}
unorderElement.append(fragment) // at a same time all value inserted

//deletion of element
// const s1=document.getElementById("first")
// s1.remove() //element has been deleted 


//normal text-content vs inner html
const month_=document.getElementById("month")
const listing_=document.createElement("li")
listing_.textContent="<h2> hello ji </h2>"

// listing_.innerHTML="<h2> hello ji </h2>" //wrong practise 
//because e.g. your instagram may hack using inner html because inside "" it run same 
// as html file

month_.append(listing_) // append like a children as we know already










































