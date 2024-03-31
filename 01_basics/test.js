// console.log("Som");

//variable
// const accountId = 144553;
// let accountEmail = "abc@gmail.com"; //Preferable
// var accountPassword = "12345"; //there was a problem of block scope and functional scope that's why we doesn;t use var
// accountCity = "Jaipur"
// let accountState

// accountId = 2 //not allowed

// accountEmail = "hc@hc.com"
// accountPassword= "22145"
// accountCity = "Kolkata"

// console.log(accountId);
// //for print multiple outputs
// console.table([accountId, accountEmail, accountPassword, accountCity , accountState])

"use strict"; //treat all js code as newer version

// alert() //we are using node js not browser

//mdn is not real documentation of js real documnetation is {tc39.es/ecma262}

/*peimitive datatypes*/
//bigint
//null => standalone value 
//undefined => value not assigned / type in js
//symbol => uniqueness
//object

// console.log(typeof null) //object
// console.log(typeof undefined) //undefined


// Conversion
// let score = "33abc"
// console.log(typeof score)
// console.log(typeof(score))

// let valueInNumber = Number (score)
// console.log(typeof valueInNumber);//number
// console.log(valueInNumber) //NaN 

// "33" => 33
// "33abc" => NaN
// "true" => 1
// "false" => 0

// let isLoggedIn = 1
// let StringNumber = Boolean(isLoggedIn)
// console.log(StringNumber);

// 1 => true
// "" => false
// "som" => true

// let someNumber = 33
// let StringNumber = String(someNumber)
// console.log(StringNumber);
// console.log(typeof StringNumber);

/* Operation */

// let value = 3
// let negVlalue = -value
// // console.log(negVlalue);

// let str1 = "hello"
// let str2 = "hitesh"
// let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2) //if first is the string then all are treated as string in js
// console.log(1 + 2 + "2") //if first is the number then numbers are treated as number then print string in js
// console.log(+true);  //1
// console.log(+"");  //0

// let num1, num2, num3

// num1 = num2 = num3 = 4

// let gameCounter = 100
// gameCounter++;
// ++gameCounter;
// console.log(gameCounter);

// console.log("2" > 1); //true
// console.log("02" > 1);

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true
// The reason is that an equility check == and comparisons >< >= <= work differently. Comperision convert null to a number, treatiting it as 0

// console.log(undefined > 0); //false
// console.log(undefined == 0); //false
// console.log(undefined >= 0); //false

// console.log("2" === 2);//false
// console.log("2" == 2);//true

// categorization oficially as the based of how to store the data and how to access the data
// Primitive:
// 7 types of data: String, number, bollean, null, undefined, Symbol, BigInt
// const id = Symbol('123')
// const id1 = Symbol('123')

// console.log(id === id1)//false


//Reference (Non primitive)
//Array, Objects, Functions
// const heros = ["Shaktiman", "Naagraj", "doga"];
// let myobj={
//     name:"hitesh",
//     age:22
// }

// const myFunction=function(){
//     console.log("Hello World");
// }
// console.log(typeof myFunction);

/*Memories*/
//Stack(Primitive) , Heap(non-Primitive)
// let myYoutube="som"
// let anotherName=myYoutube
// anotherName = "Somnath"

// console.log(myYoutube)
// console.log(anotherName)

// let userone = {
//     email:"user@google.com"
// }
// let usertwo = userone

// usertwo.email = "som@gmail.com"

// console.log(userone.email); //som@gmail.com
// console.log(usertwo.email); //som@gmail.com

/* String */
// const myname = "Som"
// const repocount = 40;
// const gamaename = new String('Somnath')//another type of declearation if you run in cnsole it's display as object
// console.log(`Hello my name is ${myname} and my repo count is ${repocount}`) //Hello my name is Som and my repo count is 40
// console.log(gamaename[1]);
// console.log(gamaename.length);
// console.log(myname.toLocaleUpperCase());
// console.log(myname.charAt(2));
// console.log(myname.indexOf('m'));

// all string meathods
/* anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]() */

// const newString = gamaename.substring(0,4)
// console.log(newString);

// const newString = gamaename.slice(1,4)
// console.log(newString);

//string.trim(), trimStart(), trimEnd()
//string.replace('present value wants to change','new value want to replace') 
//string.split('seperator')
//string.include('string')

/*Numbers*/
// const score = 400;
// const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) //for how many numbers to see after point
// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)); //presized value
// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

/* Maths */
// console.log(Math);//object
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.3))//4
// console.log(Math.ceil(4.3))//5
// console.log(Math.floor(4.3))//4
// console.log(Math.max(4,3,2))//4
// console.log(Math.min(4,3,2))//2

// console.log(Math.random());
// console.log((Math.random()*10)+1);//0 not comming

// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max-min + 1))+min) //formula for getting random value but not getting 0

/*Dates of Js */
// let myDate = new Date()
// console.log(myDate);//2024-03-29T17:47:18.145Z
// console.log(myDate.toString());//Fri Mar 29 2024 17:48:09 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Fri Mar 29 2024
// console.log(myDate.toLocaleString());//3/29/2024, 5:51:35 PM
// console.log(myDate.toLocaleDateString());//3/29/2024
// console.log(myDate.toLocaleTimeString());//5:51:35 PM
// console.log(myDate.toTimeString());//17:51:35 GMT+0000 (Coordinated Universal Time)

// console.log(typeof myDate);

// let myCreateedDate = new Date(2023, 0, 23)
// let myCreateedDate = new Date(2023, 0, 23, 5, 3)
// let myCreateedDate = new Date("2023-01-14")
// console.log(myCreateedDate.toDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateedDate.getTime());
// console.log(Math.floor((Date.now()/(3600000*24))/365));//date during 1970-2024(54 years)

// let newDate = new Date();
// console.log(newDate.getMonth());

// newDate.toLocaleString('default',{
//     weekday: "long",
//     day:"2-digit"
// })

/*Arrays */
// const myArr = [0, 1, 2, 3, 4, 5]
// const myarr = new Array(1,2,3,4)

// myArr.push(6)
// myArr.pop()
// myArr.unshift(0)//[0, 0, 1, 2,3, 4, 5]
// myArr.shift()

// console.log(myArr.includes(9)) //false means 9 not present
// console.log(myArr.indexOf(9)) //-1

// const newArr = myArr.join()//creates the whole array into string

// console.log(newArr);


//Slice, Splice
// console.log("A", myArr);

// const myn1 = myArr.slice(1,3)//Returns a copy of a section of an array
// console.log(myn1)

// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)
// console.log("c", myArr);//that affects the original array
// console.log(myn2)
// const marvel = ["thor","captain","Ironman"]
// const dc = ["superman","batman","Aquaman"]

// marvel.push(dc)

// console.log(marvel);//[ 'thor', 'captain', 'Ironman', [ 'superman', 'batman', 'Aquaman' ] ] problrm there was the push of array inside of array

// const all_heros = marvel.concat(dc)
// console.log(all_heros);//[ 'thor', 'captain', 'Ironman', 'superman', 'batman', 'Aquaman' ]

// const allnewheros = [...marvel, ...dc]//spreads the array here all elements are create different types of array
// console.log(allnewheros);//[ 'thor', 'captain', 'Ironman', 'superman', 'batman', 'Aquaman' ]

// const anotherArray = [1,2,3,[4,5],7,[8,9,[10,11]]]

// const real_another_array = anotherArray.flat(Infinity)//eturns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array);//[1, 2, 3,  4,  5,7, 8, 9, 10, 11]
// console.log(Array.isArray("Somnath"))//false
// console.log(Array.from("Somnath"))//['S', 'o', 'm','n', 'a', 't','h']
// console.log(Array.from({name:"Somnath"}));//always there was an empty array for case of object just because it's cannot rectify whicch element should be converted

// let a= 100
// let b = 200
// let c= 300

// console.log(Array.of(a,b,c));//convert veriable to array

/*Objects */
//Singleton
// Object.create()

//Objects Literals
// const mySym = Symbol("key1")
// const JsUser = {
//     name:"Somnath",
//     1:"Full Stack Developer",
//     isloggedin:false,
//     lastlogin: ["Monday", "Staurday"],
//     [mySym]: "myKey1" //for using like symbol use squre brackets
//     ,"full_name": "Somnath Mondal"
// }
// console.log(JsUser.name);
// console.log(JsUser[1]);
// console.log(JsUser["lastlogin"]);
// console.log( typeof JsUser[mySym]);
// JsUser.isloggedin = true
// Object.freeze(JsUser)//Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
// // JsUser.isloggedin=false // get error
// console.log(JsUser);

// JsUser.greeting = function () {
//     console.log(("Hello"));
// }
// JsUser.greeting2 = function () {
//     console.log((`Hello js user, ${this.full_name}`));
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());

// const tinderuser = new Object()
// const tinderuser = {}

// tinderuser.id = "123"
// tinderuser.name = "Som"

// // console.log(tinderuser);

// const regularuser = {
//     email: "som@gmail.com",
//     fullname:{
//         firstname:"Somnath",
//         lastname:"Mondal"
//     }
// }

// // console.log(regularuser);
// // console.log(regularuser.fullname.firstname);

// const obj1 = {1: "a", 2:"b"}
// const obj2 = {3: "c", 4:"d"}

// // const obj3=Object.assign({},obj1,obj2)//target,source
// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);

// const users = [
//     {
//         id:1,
//         email:"h@gmail.com"
//     },
//     {
//         id:2,
//         email:"h@gmail.com"
//     },
//     {
//         id:3,
//         email:"h@gmail.com"
//     },

// ]

// console.log(users[1].id);
// console.log(Object.keys(tinderuser));//important
// console.log(Object.values(tinderuser));//important
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('islogged'));

/* Object De-structuring */

// const course = {
//     coursename: "Js in Hindi",
//     price: "999",
//     CourseInstructor:"Somnath"
// }

// const {CourseInstructor} = course;
// console.log(CourseInstructor);//Somnath

// const {CourseInstructor: instructor} = course;
// console.log(instructor);//Somnath
//use in React
// const navbar = (company)=>{

// }
// navbar(company = "Somnath")

// json
// {
//     "name": "Somnath",
//     "coursename": "js in hindi"
// }

// [
//     {},
//     {},
//     {}
// ]

/* Function */
// function add(number1, number2){
// console.log( number1 + number2);//7
// }
// const result = add(3,4);
// console.log(result);//undefined

// function add(number1, number2){
//     let result = number1 + number2;
//     return result;
// }
// const result = add(3,4);
// console.log(result);//7

// function login(username){
//     // if(username === undefined){ or
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} is just logged in`
// }
// console.log(login("Somnath"))//Somnath is just logged in
// console.log(login())// if no value given login() then return undefined

//Shopping cart
// function calculatecartPrice(...num1){  //rest operator (...)for take multiple parameters
//     return num1;
// }
// console.log(calculatecartPrice(100,200,500));//[ 100, 200, 500 ]

// function calculatecartPrice(val1,val2,...num1){  //rest operator (...)for take multiple parameters
//     return num1;
// }
// console.log(calculatecartPrice(100,200,500));//[ 500 ]

// const user ={
//     username: "Som",
//     id : "12456"
// }
// function handleObject(anyObject) {
//     console.log(`username is ${anyObject.username} and id is ${anyObject.id}`);
//}
// handleObject(user)
// handleObject({
//     username: "Sam",
//     id : "14758"  
// })

// const myArray = [100, 200, 300, 400]
// function retunValue(getArray){
//     return getArray[2]
// } 
// console.log(retunValue(myArray));
// console.log(retunValue([100, 200, 300, 400]));

/* Scopes */
// let c = 10;//global scope
// if(true){ 
//     let a = 10;//block scope
//     var b = 20;
// }
// console.log(a);//a is not defined
// console.log(b);//20 but the var doesn't follow thw value of scope

/* Nested If-else */
// function one(){
//     const username = "Somnath"
//     function two(){
//         const website = "Youtube"
//         console.log(username);
//     }
//     // console.log(website);//error
//     two()
// }
// one()

// console.log(addone(5));//return 6
// function addone(num){
//     return num+1;
// }

// addTwo(5)//error
// const addTwo = function(num){
//     return num+2;
// }
// console.log(addTwo(5));//7 its run and give the value is 7


/* arrow Function */
// const user ={
//     username: "Somnath",
//     price:999,
//     welcomeMessage: function(){
//         console.log(`${this.username} , Welcome to website`);
//         // console.log(this);
//     }
// }
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);//here empty object

// function chai(){
//     let username = "Som"
//     console.log(this.username);//never read
//     console.log(this ); //undefined
// }
// chai()

// const chai = ()=>{
//     let username = "Somnath"
//     console.log(this.username);//undefined
//     console.log(this);//{}
// }
// chai()

// const addtwo = (num1, num2)=>(num1+num2) //if we use parenthisis then we don't need return the value . In react this type have heavy uses
// console.log(addtwo(3,4));

// const addTwo = (name1)=>({username:name1})
// console.log(addTwo("Som"))

/* Immediately Invoked Function Expression(IIFE) */
//IIFE introduce for plooution of global scope
// (function chai(){
//     console.log(`Db Connected`);
// })();//here always apply semicolon for ednding directive
// (function chai(name){
//     console.log(`Db Connected ${name}`);
// })("Som");


/* Call Stack */
//Javascript Executaion Context
// notes in nootbook

/* Hoisting */
// function one(){
//     const username = "Som"
//     function two(){
//         const website = "Youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()


/* Loop */
// let myarray = [10,11,2,,2]
// for(let i=0; i< myarray.length; i++){
//     const element = myarray[i]
//     console.log(element);
// }

//break and continue
// for (let index = 1; index <= 20; index++) {
//     if(index ==5){
//         console.log(`value of index is ${index}`);
//         // break;
//         // continue;
//     }
//     console.log(`value of index is ${index}`);

    
// }

let i =0;

// while (i<=10) {
//     console.log(`value : ${i}`);
//     i= i+2;
// }

do{
    console.log(`value : ${i}`);
    i++;
}while(i<10);