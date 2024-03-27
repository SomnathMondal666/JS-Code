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

