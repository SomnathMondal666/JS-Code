// const isUserLoggedIn = true
// const tempreture = 41
// if(tempreture === 41){
//     console.log("executed");
// }
// else{
//     console.log(`executed`);
// }

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

/* truthy and falsy Value */

// const userEmail = []
//do not use thids type
// if(userEmail){
//     console.log("Got the user Email");
// }else{
//     console.log("Don't have user email");
// }

/*
Falsy value: false, 0, -0, bigInt 0n, "", null, undefined, NaN
Truthy Value: "0", 'false', " ", [], {}, function(){}
*/

// const userEmail = []

// if(userEmail.length === 0){
//     console.log("Don't have user email");
// }else{
//     console.log("Got the user Email");
// }

// const emptyobj = {}
// if(Object.keys(emptyobj).length === 0){
//     console.log("Object is Empty");
// }


//Nullish Coaliscing Operator(??): null, undefined [if value is null or undefined , actually this is safety check ]
// let val1;
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20
// console.log(val1);