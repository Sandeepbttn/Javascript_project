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




