//Variable: container which can hold/store some date

// var,let,const

//syntax: keyword variablename :datatype = value
//EX: var age:number = 25
//ex  var age =30


//var age=30;
//console.log(age);


//var. vs  let vs const 


/* 

 1)Scope
 2)Declaration/Value assignment
 3)Re-declaration
 4)re-initialization/re-assignment
 5)Hoisting

*/


//var= we dont use n modern js/ts avoid var because it has function scope and and can leead ti unexpected results. we use let and const instead of var

//let= use let when you need a variable that can change
// const -use const when you need a variable that should not change


//1)scope - Accesible area (functional scope(var) & block scope (let, const)

// Example2 1: var (functional scope)

/* function varScope() 
{ 
    if(true)
    {
        var msg= "Hello world";
        //console.log(msg); 
    }
    console.log(msg); 
}

varScope(); */


function blockscope() 
{ 
    if(true)
    {
        let msg= "Hello world";
        const greeting = "Hello world";
 
        console.log(msg); 
          console.log(greeting); 
    }
    //console.log(msg); // connot access
    //console.log(greeting); // connot access

}

blockscope(); 


//2) Declaration /value assignment

// Example1: Var can be declared without initialization


/* var x //declaration
console.log(x); //undefined
x= 30; //initialization
console.log (x);


var and let both can be used declaration and initilization  */

/* let y //declaration
console.log(y); //undefined
y= 30; //initialization
console.log (y); */


//Example 3: const must be initiliazed at the time of declaration

//const z; // incorrect


/* const z=30; // correct
console.log(z); */

//3) Re-declaration

// var - allows re-declaration
//let and const - does not allow re-declaration

//eample 1: var allows redeclarion
/* var city = "Bangalore";
var city = "Mysore";
console.log(city);  */

/* exmaple 2: let and const does not allow re-declaration */

/* let city = "Bangalore";
let city = "Mysore"; //error
console.log(city); */

/* example 3: const does not allow re-declaration

const city = "Bangalore";
const city = "Mysore"; //error
console.log(city); 
 */


