// console.log("hello world")


// if else 
// task
// checking the leap year using if else

// var year = 1900

// if (year %4===0 || year %400===0){
//     console.log("this year " + year + " is leap year")
// }else{
//     console.log("this year " + year + " is not leap year")
// }

// task 2
// truthy and falsy values
// 5 falsy values in JS 
// 0,"",undefined,null,NaN,false



// ternary operator
// variablename = condition?true:false

// switch statement
// task 
// find the area of circle, triangle and rectangle

// while loop statement
// var num = 10;
// while(num<11){
//     console.log(num);
//     num++;
// }


// do-while loop
// for loop
// task , print table for 12


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// functions in JS

// function sum(){
//     var a=2;
//     var b=4;
//     var total=a+b;
//     console.log(total);
// }

// sum()

/////////////////////////////////////////// function parameter vs function arguments

// function sum(a,b){
    
//     var total=a+b;
//     console.log(total);
// }

// sum(8,7)


// interviews questions
// why we use functions?


////////////////////////////////////// function expression

// function sum(a,b){
    
//     var total=a+b;
//     console.log(total);
// }



// var funcExpression = sum(8,2);
// funcExpression;

////////////////////////////////////// Return keywords

// function sum(a,b){
    
//     return total=a+b;
// }

// var funcExpression = sum(8,2);
// console.log(funcExpression);


//////////////////////////////////// anonymous Function

// var funcExp = function(a,b){
//     return total=a+b;
// }

// console.log(funcExp(9,7));


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////ECMAscript or ES6///////////////////////////////////////////////////////////

////// interview questions

// //////////////////////////////////let vs var vs const


//////////////////////////////////// template Literals(template strings)

// for (let i=1; i<11;i++){
//     let table=13;
//     console.log(`${table} * ${i}= ${table * i}`);        //using template literals
// }



//////////////////////////////////// Default parameters

// function mul(a,b=8){
//     return a*b;
// }

// console.log(mul(4));




/////////////////////////////////// fat arrow function

// const sum =(a,b)=>{
//     return a+b;
// }

// console.log(sum(4,6));

/////////////////////////////////////////////////////////////ARRAY IN JAVASCRIPT//////////////////////////////////////////////////////////////////


///////////////////// array example

// var myFriends = ['ramesh',22,"male",'arjun',20,"male",'visal',true];

// console.log(myFriends);

///////////////////////////////// traversal in Array


// var myFriends = ['ramesh',22,"male",'arjun',20,"male",'visal',true];

// console.log(myFriends[3]);


////////////// if we want to check the length of element of an array

// console.log(myFriends.length);


////////  we use for loop to navigate


//////////////////////////// for in loop

// for (let i in myFriends){
//     console.log(i);
// }


/////////////////////// for of loop

// for (let i of myFriends){
//     console.log(i);
// }


//////////////////////// for each loop

// myFriends.forEach(function(element,index,array){
//     console.log(element + "index :" + index + " " + array);     //we cant use break statement in for each
// })


///////////////////////Searching and filter in an Array


//////////array.prototype.indexOf()

// var myFriends = ['ramesh',22,"male",'arjun',22,"male",'visal',true];


// console.log(myFriends.indexOf(22));
// console.log(myFriends.indexOf(22,3));

//it is case sensitive, return the first index or -1 if not found


//////////////lastIndexOf()


// var myFriends = ['ramesh',22,"male",'arjun',22,"male",'visal',true];


// console.log(myFriends.lastIndexOf(22));
// console.log(myFriends.lastIndexOf(22,3));

///////////////////////includes()



// var myFriends = ['ramesh',22,"male",'arjun',22,"male",'visal',true];


// console.log(myFriends.includes(21));


/////////////////////////////find()

// const price =[100,230,500,430,700];

// console.log(price.find((curValue)=>{
//     return curValue <500;
// }));

////////////////////////////findIndex()

// const price =[100,230,500,430,700];

// console.log(price.findIndex((curValue)=>{
//     return curValue <500;
// }));


/////////////////////////////////////////////filter()


// const price =[100,230,500,430,700];

// console.log(price.filter((curValue)=>{
//     return curValue <500;
// }));



///////////////////////////////////how to sort and compare an array

// const price =[100,230,10000,500,430,700];

// console.log(price.sort());

//there is bug it convert into string and than sort it


///////////////////////////////////how to insert, add, replace and delete elements in Array (CRUD)//////////

//////////////////push()

// const price =[100,230,10000,500,430,700];

// price.push(555,444,333);
// console.log(price);

//////////////////////unshift()

// const price =[100,230,10000,500,430,700];

// price.unshift(555,444,333);
// console.log(price);

////////////////////////////pop()

// const price =[100,230,10000,500,430,700];
// console.log(price)

// price.pop();
// console.log(price);


//////////////////////////////////////shift()

// const price =[100,230,10000,500,430,700];

// console.log(price);
// price.shift();
// console.log(price);


//////////////////////////////////////////////////using slipce method for all CRUD/

// const price =[100,230,10000,500,430,700];

// price.splice(3,2,777);           //splice(index,delete number of elements,value want ot add)
// console.log(price);

//// another example

// const indexOfPrice = price.indexOf(500);
// console.log(price);

// if(indexOfPrice!= -1){
//     price.splice(indexOfPrice,1,501);           //splice(index,delete number of elements,value want ot add)
// console.log(price);
// }else{
//     console.log('no such data found');
// }



/////////////////////////////////////////////////// map() ///////////////////////////

// returns a new Array containing the results of calling 
// a function on every elemen in this array

// const price =[100,25,10000,529,400,49];

// let newPrice = price.map((curElem,index,arr)=>{
//     return curElem>499;
// })
// console.log(price);
// console.log(newPrice);


// find sq root 

// let arrSqr = price.map((curElem)=>{
//       return Math.sqrt(curElem);
// })

// console.log(arrSqr);


// ////multiply and return which is greater than 50
// let arrSqr = price.map((curElem)=>{
//     return curElem*2;
// }).filter((cur)=>{
//     return cur>500;
// })

// console.log(arrSqr);


/////////////////////////////reduce method///////////////


// flatten an array means to convert the 3d or 2d array 
// into a single dimensional array

// let arr =[5,6,4];

// let sum = arr.reduce((accumulator,cur)=>{
//     return accumulator +=cur;
// });

// console.log(sum)







// //////////////////////////////abouve exapmle using reduce
// let arrSqr = price.map((curElem)=>{
//     return curElem*2;
// }).filter((cur)=>{
//     return cur>500;
// }).reduce((accumulator,cur)=>{
//     return accumulator +=cur;
// });

// console.log(arrSqr);


//2d to 1d

// const arr = [
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7','zone_8']
// ];

// let flatArr = arr.reduce((accum,cur)=>{
//     return accum.concat(cur);
// })

// console.log(flatArr);


///////////////////////////////////////////////////////  strings in javascript   ///////////////////////////


////escape character

// let anySentence ="we are the so called \"sandeep\" bhat";

// let anySentence ='we are the so called "sandeep" bhat';

// console.log(anySentence);

//////////////////finding a string in a string


// let anySentence ='we are the so called sandeep bhat';

// console.log(anySentence.indexOf("the"));


///lastIndexOf()

// let anySentence ='we are the so called sandeep bhat';

// console.log(anySentence.lastIndexOf("the"));


/////////searching for a string in a string


//search() method
// let anySentence ='we are the so called sandeep bhat';

// console.log(anySentence.search("so"));


///////////////////////Extracting String Parts

// slice(start,end )
// substring(start,end)
// substr(start,length)

// var str = "apple, banana, kiwi";

// let res = str.slice(0,4);
// console.log(res);

//some assignment

/////////////////////////substring()


// var str = "apple, banana, kiwi";

// let res = str.substring(8,-2);
// console.log(res);


///////////////////////substr()

// var str = "apple, banana, kiwi";

// let res = str.substr(8);
// console.log(res);


// difference between substr and substring


///////////////////////////////////////////Replacing String Content()

// .replace(searchFor,replaceWith)

// let myBioData = 'I am sandeep bhat am am';

// console.log(myBioData.replace('am','AM'));


//////////////////////////////////////////Extracting String Characters

//charAt(position)
//charCodeAt(position)
// Property access [ ]


//////////////////////////charAt(position)
//  let str = "hello";


//  console.log(str.charAt(0));


//  ///////////////////////////charCodeAt(position)
//  console.log(str.charCodeAt(0));

//////////////////////////////// Property access [ ]

// console.log(str[0]);

//////////////////////////////////concat()
//////////////////////////toUpperCase()
//////////////////////////toLowerCase()


///////////////////////////////////.trim()


//////////////  converting a string to an array use .split() method



////////////////////////////////////////////DATE and TIME in JAVASCRIPT

// there are 4 ways to create a new date object:

// new Date()
// new Date(year,month,day,hours,minutes,seconds,milliseconds)
// // it takes  7 arguments

// new Date(milliseconds)

// new Date(date string)


///////new Date()


// console.log(new Date());     //     not india time
// console.log(new Date().toLocaleString());   //it will show correct time  india time
// console.log(new Date().toString());

///////////Date.now()

// it will return miiliseconds elapsed since jan 1 1970
// console.log(Date.now());

///////////new Date(year,month,...)

// console.log(new Date(2021,0,5,10,33,20,0));

////////////new Date(dateString)

// console.log(new Date("October 13,2021 11:13:00"));


///////////////////Date methods

const curDate = new Date();

// how to get the indiviual date 

// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDay())
// console.log(curDate.getDate())





////how to set the indiviual date


// console.log(curDate.setFullYear(2022,10,5));
// console.log(curDate.setMonth(10));
// // console.log(curDate.setDay(3))
// console.log(curDate.setDate(4))



//////////////////////// Time Methods

// const curTime = new Date();

// how to get the indiviual time

// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getMilliseconds());
 

// using setTime to set the time()



// practice time

// console.log(curDate.toLocaleTimeString());
// console.log(curDate.toLocaleDateString());


// ///////////////////////////////////////////////   Math Object in Javascript

// to perform math tasks on numbers.


// console.log(Math.PI);

// console.log(Math.round(10.745));

// console.log(Math.pow(2,2));

// console.log(Math.sqrt(25));

// console.log(Math.abs(-245));

// console.log(Math.ceil(2.2));


// console.log(Math.floor(2.2));

// console.log(Math.max(2,3));

// console.log(Math.min(2,9));

// console.log(Math.random()*10);

// console.log(Math.trunc(2.2));


// ////////////////////////////////////////////////////   DOM in Javascript

// DOM, BOM, WINDOW OBJECT 

// Difference between dom and bom;


//  window properties;
// document.documentElement

// document.head
// document.body
// document.body.childNodes
// document.children
// document.childNodes.length



// practice time
// how to check whether an element has child nodes or not ?
// we will use haschildNodes()


// practice time 
// how to find the child in DOM tree
// firstChild s firstElementChild
// lastChild vs lastElementChild

// const data = document.body.firstElementChild;

// data
// data.firstElementChild
// data.firstElementChild.firstElementChild

// .document.body.nextSibling

//  getElementsByName();


//////////////////////////// how to search the elements and the References


//  Difference between getElementById and querySelector vs getElementsByClassName() vs getElementsByTagName() vs getElementsByName();




//////////////////////////////////////////Events in JAVscript

// 4 ways of writing events in javascript

// 1. using inline events alert()
// 2. by calling a function 
// 3. using inline events
// 4. using event listeners


// check thhe events HTML file



// 1st way 
{/* <a onclick="alert('I am 1st way')"></a> */}

// 2nd way
// const callingFunction = ()=>{
//     alert('2nd way ');
// }

// 3rd way

// const thirdWay = document.getElementById('thirdWay');
// thirdWay.onclick= function(){
    //     alert('most common way of writing function again');
    // }
    

// 4th way
// const fourthWay = document.querySelector('#fouthWay');

// fourthWay.addEventListener('click',()=>{
    //     alert("4th way");
    // })


    // what is event object?
    // event object is the parent object of the event object.
    // for example
    // MouseEvent,FocusEvent,KeyboardEvent etc

    // MouseEvent in Javascript
    // mouseDown(), mouseUp(),mouseenter(),mouseleave()

    // keyboardEvent in JS
//  onkeypress(),onkeydown(),onkeyup()


    // InputEvent in JS



    // interview questions
    // onclick vs addEventListener


    /////////////////////////////////////////////////Timing based events in JS
     //setTimeout()
    //  setInterval()
    // clearTimeout()
    // clearInterval()

    // interview questions

//   10:48


    //////////////////////////////////////////////OOPS in JS

// what is object literals?
//   it is simply a key :value pair data structure.

// how to create an object?

// 1st way
 
// let bioData = {
//     myName: "sandeep",
//     age:22,
//     getData: function(){
//         console.log(`my name  is ${this.myName} and age is ${this.age}`);
//     }
// };

// (bioData.getData());

// 2nd way no need to write functions as well after es6

// let bioData = {
//     myName: "sandeep",
//     age:22,
//     getData (){
//         console.log(`my name  is ${this.myName} and age is ${this.age}`);
//     }
// };

// (bioData.getData());

// what is "this" objects?

// the defination of "this" object is that it contain the current context.
// the this object can hve different values depending on where it  is plcaed.


// for example 1
// console.log(this);

// it refers to the current context and that is window global object

// // ex 2
// function myName(){
//     console.log(this);
// }
// myName();


// ex3

// ex4

// ex5
// this object  will not work with arrow function
// const obj ={
//     myAge : 23,
//     myName:()=>{
//         console.log(this);
//     }
// }
// obj.myName();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////  Destructuring    /////////////////////////////////////////////


// // array Destructuring
// const myData = ['vinod','thapa',23];

// let [myFName,lName,age]= myData;

// console.log(age);


// object Destructuring

// const data = {
//     first:'sandeep',
//     last:'bhatt',
//     age:25
// }

// let {first,last,age}= data;

// console.log(first);


/////////////////////////////Object properties


// dynamic data in object
// const name ="sandeep";

// const myBio={
//     [name]:"hello how are you?",
//     [20+2]:"is my age"
// }

// console.log(myBio);



////////// no need to erite key and value, if both are same

// const name= "sandeep";
// const age = 23;

// const bio = {name , age}

// console.log(bio);




///////////////////////////Spread operator

// const colors = ['red','green','blue','white'];

// const FavCol = ['yellow', ...colors];

// console.log(FavCol);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////ES7 features 

// 1: array include
// 2: exponentiation operator

////////////////////////////////
//////ES8 features

// string padding
// object.values()
// object.entries()


// ES2018

// const person = { name:'sandeep',age:32};
// const sper = {...person};

// console.log(person);


// es2019
// flat method

//console.log(arr.flat(Infinity));     //for multiple dimension array 
// flatmap

// ES2020
// BigInt
// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(9999999999999999999n + 13n);

// nullish 

// // ES2014
// "use strict"

// x = 3.24;
// console.log(x);


/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////Advance javascript ////////////////////////////////////////

/////////////// event propagation (Event bubbling and event capturing)

// capturing event happend top to bottom and bubble bottom to top
// then showing example
// to stop the event propagation we use event.stopPropagation();
// by deafault it use bubble

// parentId.addEventListener('click',parentCall,true  ); by default its false   //if you want capturing event


//////////////// higher order function
///////////////// callback function

// const add =(a,b)=>{
//     return a+b;
// }
// const subs =(a,b)=>{
//     return Math.abs(a-b);
// }

// const calculator =( num1,num2,operator)=>{
//     return operator(num1,num2);
// }

// calculator(5,3,add);


// so calculator is higher order function
// and add and subs are callback functions


// diffrence bwtween higher order  function and callback function



///////////////////function currying (we will see after async JS section)

/////////////Hoisting in JavaScript
//  example 
// console.log(myName);
// var myName;
// myName="Samdeep";

// it wont work with let and const

///////////////Scope chain and lexical scooping in JS

// in lexical scooping the parent can not access the value

///////////////////////what is Closures in JS

// a closures is the combination of a function bundled together with refferences 
// to  its surrounding state (the lexical environment).

// in other words , closure gives you
// access to an outer function's scope  from an inner function

// closures are created every time a function is created at function creation time.


// // for  example 
// const outerfun=(a)=>{
//     let b=10;
//     const innerFun=()=>{
//         let sum= a+b;
//         console.log(sum);
//     }
//     innerFun();
// }
// outerfun(5);


// interview
// diffrence between synchronous and asynchronous javascript

// synchronous

// asynchronous


/////////////////////////// EVENT LOOP in javascript





//////////////// callback hell
//////////////// ajax call using XMLHttprequest
//////////////// BONUS section JSON
//////////////// fetch API
//////////////// promises
//////////////// Async- await
///////////////// error handling in JS