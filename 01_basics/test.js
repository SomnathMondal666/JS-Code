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

// Primitive



