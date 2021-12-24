// finding maximum number in array

// var max=-Infinity
// var marks=[20,30,50,80,60];
// for(var mark of marks)
// {
//     if(mark>max)
//     {
//        max=mark;
//     }
// }
// console.log(max);


//Math.max() is inbuilt function for to find maximum number

// var a=Math.max(...marks);
// console.log(a);

//function for get the avarage,array as input

// function avr(marks){
//     let sum=0;
//     for(let s of marks)
//     {
//         sum=sum+s;
//     }

//     let average=sum/marks.length; 
//     return average;
// }
// console.log(avr([20,30,40,50]));



// var vs let vs const

// var name ="sivaraj";  //declaration
// var name ="jayasurya";
//name="musthafa"; //reassign
// console.log(name);

//var --->can redeclare same variables
// var --->can reassign the value

// let name ="sivaraj";  //declaration
// let name ="jayasurya";
// name="musthafa"; //reassign
// console.log(name);

//let ---> cannot redeclare same variables
// let---> can reassign the value


// const name ="sivaraj";  //declaration
// const name ="jayasurya";
// name="musthafa";
// console.log(name);

//const ---> cannot redeclare same variables
// const---> cannot reassign the value

// undefined vs not defined

// var z1;
// console.log(z1);//--->undefined, type of undefined is "undefined"

// undefined is a Value 
// declared but value is not assigned-undefined

// console.log(z2);//--->  not defined

// not defined is error
// not defined - no declaration  

//scope -lifetime of variable
// var ---> global scope(myth)---> function scope

// function double(num){
//     var twice = num*2;
//     console.log(twice);  // var access only inside the fuction
// }
// double(10);
// console.log(twice);  // is not defined bcs it fuction scope


// let & const---> block scope
// var --->function scope

// {
//     let quote=" i am the man";
//     var niceq=" i am here";
// }
// console.log(quote);   //---> its not defined bcs let block scope
// console.log(niceq);


// function nice1(){
//     for(var i=0;i<10;i++){}
//     console.log(i);
// }
// function nice2(){
//     for(let i=0;i<10;i++){}
//     console.log(i);
// }

// nice1();  //10---. bcs it only function scope not block scope
// nice2(); //not defined--->it block scope


//hoisting

// there is no hoisting in javascript, but the actual thing is

// js-- JIT--> just in time compilation
// in JS--->2 pass system is there

// in 1st pass---> all declaration will noted

// example 2 guys   1. context  2. Js

// console.log("before", a); // JS to context -- Do you know a?  yes , i know. what is the value? context --undefined
// var a =10;  // at 1st pass-JS guys say to context note down-->a (undefined) |note down a is 10
// console.log("after",a);// JS to context-- Do you know a? yes i know.what is the value?context 10 




// console.log("before", a); // JS to context -- Do you know a?  yes , i know. what is the value? error(cannot access b before initialized)
// let a =10;  // at 1st pass-JS guys say to context note down-->a and dont initialize (value is not iniialized)
// console.log("after",a}; it will not get execute due to show error at 1st line itself
// a is declared but not inintialized

// console.log("before", a); // Do you know a?  yes , i know. what is the value? context not initialized error
// const a =10;  // at 1st pass-JS guys say to context note down-->a and dont initialized (not initialized) |
// console.log("after",a);//it will not get execute due to show error at 1st line itself.

//closue,lexical scope(local-outside) 
// var price =400;
// function getprice(){
//     console.log("old price",price);
//     // var price=800;
//     console.log("new price",price);
// }
// getprice();

// var price =400;

//IIFE- Immediately Invoked Function Expression

// var result=(function(n){
//     return n*2;
// })(10)
// console.log(result);

// (function double(n)
// {
//     console.log(n*2);
// })(80);

// //nameless fucntion - anonymous function

// (function(n){
//     console.log(n+2);
// })(4);


//ES6 -2015

// function areaofcircle(radius){
//     return Math.PI*radius*radius;
// }

//var/let/const-->arrow function

// const areaofcircle= (radius)=>{
//     return Math.PI*radius*radius;
// };

//syntactic sugar - short syntax- only when body in one line

// const areaofcircle= (radius)=>Math.PI*radius*radius;


// task
// function sum(a,b){
//     return a+b;
// }
// const sum=(a,b)=>a+b;

// var sum=(a,b)=>a+b;
// console.log(sum(2,8));

// types fo function
// 1.normal function
// 2.arrow function
// 3.anonymous function
// 4.IIFE pattern


// function fullname(firstname,lastname){
//     return "welcome "+lastname+" ,"+firstname+" 😊!!!";
// }
// console.log(fullname("mohamed","musthafa"));

// ES6-template literal ``   ${}->interpolation(substitution)
// by using  template literal (backticks``)

// function fullname(firstname,lastname){
//     return `welcome ${lastname}, ${firstname} 😊!!!`
// }
// console.log(fullname("mohamed","musthafa"));
// backticks also can use for multiple line as it is

//ES6 -array destructuring - unpacking
// one to one matched by index

// const[t1,t2]=[100,200];
// console.log(t1,t2)//100,200

// const nums=[100,200];
// console.log(nums[0],nums[1]);


// const[t1,t2]=[100,200];
// console.log(t1,t2,t3); //100,200,undefined
 
// t3=80 -->default value
// default value will be taken only when t3 is undefined

// const[t1,t2,t3=80]=[100,200];
// console.log(t1,t2,t3); //100,200,80


// const[t1,t2,t3=80]=[100,200,500];
// console.log(t1,t2,t3); //100,200,500

// const[t1,t2,t3=80]=[100,200,null];
// console.log(t1,t2,t3); //100,200,null
// null is also a value
// null!=undefined


// holes

// const [,t1,t2,t3=80]=[100,200,null];
// console.log(t1,t2,t3); //200,null,80

// const[t1, ,t2,t3=80]=[100,200,null];
// console.log(t1,t2,t3); //100,null,80

//spread & rest operator  ...
// ES6 -rest operator      ...

// const [t1,t2,t3]=[90,80,50,36,54,65];
// console.log(t1,t2,t3) //90,80,50


// const [t1,t2,...t3]=[90,80,50,36,54,65];
// console.log(t1,t2,t3 )



// const[name,age]=[15,"Infant"]
// console.log(name,age)  //Infant,15

// ES6-Object destructuring-order does not matter for destructuring

// const{name,age}={ age:15,name:"infant"};
// console.log(name,age);

// matched by  key not by index











//can collect num of argument by use rest operator ...

// function add(...nums){
//     var sum=0;
//     for(var num of nums){
//         sum=sum+num;
//     }
//     console.log(sum);
// }
//  add(23,34,56,67,10);

// const marks=[80,50,90,100,30,20,70];
// console.log(marks.filter((marks)=>marks>=40));



// let arr=[10,20,30,40,50];
// let double=(num)=>num*2;
// var a=arr.map(double);
// console.log(a);

// let arr=[10,20,30,40,50];
// let test=(num)=>num>30;
// var a=arr.filter(test);
// console.log(a);

// const sum=(num)=>num+1;
// console.log(nums.map(sum));

// const scores=[{marks:32,name:"Yvette Merritt"},
//               {marks:57,name:"Lillian Ellis"},
//               {marks:22,name:"Mccall Carter"},
//               {marks:21,name:"Pate collier"},
//               {marks:91,name:"Debra Beard"},
//               {marks:75,name:"Nettie Hancock"},
//               {marks:20,name:"Hatfield Hodge"}];
// // let a=scores[0].name;
// const names=({scores}
//     )=>name;
// console.log(names());
// // console.log(scores.map(names));