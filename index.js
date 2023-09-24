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

 //function with multiple parameter

function ArraySum(arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum +=arr[i];
  }
  return sum;
}
const numbers=[1,2,3,4,5];
console.log(ArraySum(numbers));

const areaOfCircle=(radius)=>{
  let area=Math.floor(Math.PI*(radius*radius));
  return area;
}

let n=10;
console.log(areaOfCircle(n));

function sumArray(){
  
  let sum=0;
  for(let i=0;i<arguments.length;i++){
    sum +=arguments[i];
  }
  return sum;
  
}
console.log(sumArray(1,2,3,4,5))

const sumArr=(...arr)=>{
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum +=arr[i];
  }
  return sum;
}

console.log(sumArr(1,2,3,4))

//Anonymous Function

const anonymousFun=function(){
  console.log("Anonymous Function here")
}
//expression function

const Square=function(n){
  return n*n;
}
console.log(Square(2))

//Self Invoking Functions

(function(n) {
  console.log(n * n)
})(5)