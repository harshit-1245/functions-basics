// function decleration without parameter

function square(){
    let a =2;
   let sq=a*a;
   console.log(sq);
    
 }
 square() // calling function  by its square and with parenthsis.
 
 //function returning a value

 function sum1(){
  let a=5;
  let b=6;
  let c = a+b;
  return c;
 }

 console.log(sum1())

 //function with a parameter
 function sum(r){
  return Math.PI*r*r;
 }
 console.log(sum(5))