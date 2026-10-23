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


